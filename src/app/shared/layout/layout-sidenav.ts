import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { MatDrawerMode } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { LayoutRegionService } from './layout-region';

@Injectable({
  providedIn: 'root',
})
export class LayoutSidenav {
  readonly regions = inject(LayoutRegionService).get('sidenav');

  // TODO: should be mutualized?
  readonly isMobile = toSignal(
    inject(BreakpointObserver)
      .observe([Breakpoints.XSmall])
      .pipe(map(({ matches }) => matches)),
  );

  readonly mode = computed((): MatDrawerMode => (this.isMobile() ? 'over' : 'side'));

  readonly opened = signal(true);

  constructor() {
    inject(Router)
      .events.pipe(
        takeUntilDestroyed(),
        filter(
          (event) => event instanceof NavigationEnd && this.mode() === 'over' && this.opened(),
        ),
      )
      .subscribe(() => this.toggle(false));

    effect(() => this.regions() ?? this.toggle(false));
  }

  toggle(opened?: boolean) {
    this.opened.update((_opened) => opened ?? !_opened);
  }
}
