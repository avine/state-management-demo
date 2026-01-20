import { Component, signal, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LayoutModule } from '../shared/layout';

@Component({
  selector: 'app-home',
  host: { class: 'app-home' },
  imports: [
    LayoutModule,
    MatIconModule,
    MatListModule,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Home {
  prepend = signal(false);

  toggleAction() {
    this.prepend.update((value) => !value);
  }
}
