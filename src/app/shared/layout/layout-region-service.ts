import { computed, Injectable, signal } from '@angular/core';
import { LayoutRegion } from './layout-region';
import { LayoutRegionName } from './layout-types';
import { sortLayoutRegions } from './layout-utils';

@Injectable({
  providedIn: 'root',
})
export class LayoutRegionService {
  private list = signal<LayoutRegion[]>([]);

  add(item: LayoutRegion) {
    this.list.update((list) => [...list, item]);
  }

  remove(item: LayoutRegion) {
    this.list.update((list) => list.filter((_item) => _item !== item));
  }

  get(name: LayoutRegionName) {
    return computed(() => sortLayoutRegions(this.list().filter((item) => item.name() === name)));
  }
}
