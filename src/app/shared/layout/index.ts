import { NgModule } from '@angular/core';
import { Layout } from './layout';
import { LayoutHeader } from './layout-directives';

export const LayoutModule = [Layout, LayoutHeader] as const;

@NgModule({
  imports: [...LayoutModule],
  exports: [...LayoutModule],
})
export class LayoutNgModule {}
