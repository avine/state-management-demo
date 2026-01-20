import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutRegionPipe, LayoutRegionService } from './layout-region';
import { LayoutSidenav } from './layout-sidenav';

@Component({
  selector: 'app-layout',
  host: { class: 'app-layout' },
  imports: [
    NgTemplateOutlet,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    LayoutRegionPipe,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Layout {
  protected layoutRegionService = inject(LayoutRegionService);

  protected layoutSidenav = inject(LayoutSidenav);
}
