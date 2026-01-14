import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, computed, inject, signal, ViewEncapsulation } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  host: { class: 'app-root' },
  imports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None,
})
export class App {
  protected isMobile = toSignal(
    inject(BreakpointObserver)
      .observe([Breakpoints.XSmall])
      .pipe(map(({ matches }) => matches)),
  );

  protected fixedTopGap = computed(() => (this.isMobile() ? 52 : 60));

  protected sidenavMode = computed((): MatDrawerMode => (this.isMobile() ? 'over' : 'side'));

  protected sidenavOpened = signal(false);

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
