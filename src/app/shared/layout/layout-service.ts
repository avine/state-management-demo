import { computed, Injectable, signal } from '@angular/core';
import { LayoutHeader } from './layout-directives';
import { sortHeaderList } from './layout-utils';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private headerList = signal<LayoutHeader[]>([]);

  addHeader(item: LayoutHeader) {
    this.headerList.update((list) =>
      item.action() === 'append' ? [...list, item] : [item, ...list],
    );
  }

  removeHeader(item: LayoutHeader) {
    this.headerList.update((list) => list.filter((_item) => _item !== item));
  }

  headerLeftList = computed(() =>
    sortHeaderList(this.headerList().filter((item) => item.position() === 'left')),
  );

  headerRightList = computed(() =>
    sortHeaderList(this.headerList().filter((item) => item.position() === 'right')),
  );
}
