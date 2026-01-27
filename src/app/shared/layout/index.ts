import { NgModule } from '@angular/core';
import { Layout } from './layout';
import { LayoutRegion } from './layout-region';

export * from './layout';
export * from './layout-config-service';
export * from './layout-constants';
export * from './layout-region';
export * from './layout-region-pipe';
export * from './layout-region-service';
export * from './layout-side-service';
export * from './layout-types';

export const LayoutModule = [Layout, LayoutRegion] as const;

@NgModule({
  imports: [...LayoutModule],
  exports: [...LayoutModule],
})
export class LayoutNgModule {}
