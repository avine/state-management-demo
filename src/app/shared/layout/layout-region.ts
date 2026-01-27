import {
  DestroyRef,
  Directive,
  effect,
  inject,
  input,
  numberAttribute,
  TemplateRef,
  untracked,
} from '@angular/core';
import { LayoutRegionService } from './layout-region-service';
import { LayoutRegionName } from './layout-types';

@Directive({
  selector: '[appLayoutRegion]',
})
export class LayoutRegion {
  readonly template = inject(TemplateRef);

  readonly name = input.required<LayoutRegionName>({ alias: 'appLayoutRegion' });

  readonly index = input(undefined, {
    transform: (value: string | number | undefined) => {
      const index = numberAttribute(value);
      return Number.isNaN(index) ? undefined : index;
    },
  });

  constructor() {
    const service = inject(LayoutRegionService);

    // Run once the inputs are set (like `ngOnInit` lifecycle hook).
    effect(() => untracked(() => service.add(this)));

    inject(DestroyRef).onDestroy(() => service.remove(this));
  }
}
