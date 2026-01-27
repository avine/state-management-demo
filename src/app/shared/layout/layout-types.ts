import { MatDrawerMode } from '@angular/material/sidenav';

export type LayoutRegionName =
  | 'headerLeft'
  | 'headerCenter'
  | 'headerRight'
  | 'sidenav'
  | 'sidebar'
  | 'panelLeft'
  | 'panelRight';

export interface LayoutConfig {
  sidenavWidth: string;

  sidebarWidth: string;
  sidebarDesktopMode: Exclude<MatDrawerMode, 'over'>;

  panelLeftWidth: string;

  panelRightWidth: string;
}
