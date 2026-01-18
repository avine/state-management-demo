import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, inject, signal, ViewEncapsulation } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, map } from 'rxjs';
import { LayoutService } from './layout-service';

@Component({
  selector: 'app-layout',
  host: { class: 'app-layout' },
  imports: [
    NgTemplateOutlet,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Layout {
  protected layoutService = inject(LayoutService);

  protected isMobile = toSignal(
    inject(BreakpointObserver)
      .observe([Breakpoints.XSmall])
      .pipe(map(({ matches }) => matches)),
  );

  protected sidenavMode = computed((): MatDrawerMode => (this.isMobile() ? 'over' : 'side'));

  protected sidenavOpened = signal(true);

  constructor() {
    inject(Router)
      .events.pipe(
        takeUntilDestroyed(),
        filter(
          (event) =>
            event instanceof NavigationEnd && this.sidenavMode() === 'over' && this.sidenavOpened(),
        ),
      )
      .subscribe(() => this.toggleSidenav());
  }

  protected toggleSidenav() {
    this.sidenavOpened.update((opened) => !opened);
  }
}
