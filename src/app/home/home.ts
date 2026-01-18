import { Component, signal, ViewEncapsulation } from '@angular/core';
import { LayoutModule } from '../shared/layout';
import { LayoutHeaderAction } from '../shared/layout/layout-types';

@Component({
  selector: 'app-home',
  host: { class: 'app-home' },
  imports: [LayoutModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Home {
  action = signal<LayoutHeaderAction>('append');

  toggleAction() {
    this.action.update((a) => (a === 'append' ? 'prepend' : 'append'));
  }
}
