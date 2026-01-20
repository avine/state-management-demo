import { NgModule } from '@angular/core';
import { Layout } from './layout';
import { LayoutRegion } from './layout-region';

export const LayoutModule = [Layout, LayoutRegion] as const;

@NgModule({
  imports: [...LayoutModule],
  exports: [...LayoutModule],
})
export class LayoutNgModule {}
