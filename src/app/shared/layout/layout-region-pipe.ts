import { inject, Pipe, PipeTransform } from '@angular/core';
import { LayoutRegionService } from './layout-region-service';
import { LayoutRegionName } from './layout-types';

@Pipe({
  name: 'layoutRegion',
})
export class LayoutRegionPipe implements PipeTransform {
  private layoutRegionService = inject(LayoutRegionService);

  transform(name: LayoutRegionName) {
    return this.layoutRegionService.get(name);
  }
}
