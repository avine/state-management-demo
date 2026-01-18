import { DestroyRef, Directive, inject, input, TemplateRef } from '@angular/core';
import { LayoutService } from './layout-service';
import { LayoutHeaderAction, LayoutHeaderPosition } from './layout-types';

@Directive({
  selector: '[appLayoutHeader]',
})
export class LayoutHeader {
  readonly template = inject(TemplateRef);

  readonly position = input.required<LayoutHeaderPosition>({ alias: 'appLayoutHeader' });

  readonly action = input<LayoutHeaderAction>('append');

  constructor() {
    const service = inject(LayoutService);
    service.addHeader(this);
    inject(DestroyRef).onDestroy(() => service.removeHeader(this));
  }
}
