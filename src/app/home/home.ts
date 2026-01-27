import { Component, inject, Injector, signal, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LayoutConfig, LayoutConfigService, LayoutModule } from '../shared/layout';

@Component({
  selector: 'app-home',
  host: { class: 'app-home' },
  imports: [
    LayoutModule,
    MatIconModule,
    MatListModule,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Home {
  layoutConfigService = inject(LayoutConfigService);

  index = signal(2);

  toggleAction() {
    this.index.update((value) => value - 0.5);
  }

  config = signal<Partial<LayoutConfig>>({ sidebarWidth: '600px', sidebarDesktopMode: 'push' });

  constructor() {
    const injector = inject(Injector);

    this.layoutConfigService.register(this.config);

    /*setTimeout(() => {
      this.layoutConfigService.register(this.config, injector);
    }, 2000);

    setTimeout(() => {
      this.config.set({ sidebarWidth: '280px', panelRightWidth: '100px' });
    }, 4000);*/
  }
}
