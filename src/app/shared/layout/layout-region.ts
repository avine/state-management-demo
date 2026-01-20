import {
  booleanAttribute,
  computed,
  Directive,
  effect,
  inject,
  Injectable,
  input,
  Pipe,
  PipeTransform,
  signal,
  TemplateRef,
} from '@angular/core';

export type LayoutRegionName = 'headerLeft' | 'headerRight' | 'sidenav' | 'sidebar';

// TODO: Class name should renamed to reflect that this is not a "region" but an "[ITEM]" in this region...
@Directive({
  selector: '[appLayoutRegion]',
})
export class LayoutRegion {
  readonly template = inject(TemplateRef);

  readonly name = input.required<LayoutRegionName>({ alias: 'appLayoutRegion' });

  readonly prepend = input(false, { transform: booleanAttribute });

  constructor() {
    const service = inject(LayoutRegionService);

    effect((onCleanup) => {
      // Reading name() ensures this runs only after the input is set
      this.name();
      service.add(this);
      onCleanup(() => service.remove(this));
    });
  }
}

@Injectable({
  providedIn: 'root',
})
export class LayoutRegionService {
  private list = signal<LayoutRegion[]>([]);

  add(item: LayoutRegion) {
    this.list.update((list) => (item.prepend() ? [item, ...list] : [...list, item]));
  }

  remove(item: LayoutRegion) {
    this.list.update((list) => list.filter((_item) => _item !== item));
  }

  get(name: LayoutRegionName) {
    return computed(() => {
      const list = this.list()
        .filter((item) => item.name() === name)
        .reduce((list, item) => {
          list[item.prepend() ? 'unshift' : 'push'](item);
          return list;
        }, [] as LayoutRegion[]);
      return list.length ? list : null;
    });
  }
}

@Pipe({
  name: 'layoutRegion',
})
export class LayoutRegionPipe implements PipeTransform {
  private layoutRegionService = inject(LayoutRegionService);

  transform(name: LayoutRegionName) {
    return this.layoutRegionService.get(name);
  }
}
