import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterOutlet } from '@angular/router';
import { LayoutModule } from './shared/layout';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, RouterOutlet, LayoutModule],
  templateUrl: './app.html',
})
export class App {}
