import { Component } from '@angular/core';
import * as selectBoxData from './shared-data/select-box.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'drink-tea-taste-peace';
  sizes: Array<string> = [];
  clarity: Array<string> = [];

  constructor() {
    this.sizes = selectBoxData.LEAF_SIZE;
    this.clarity = selectBoxData.INFUSION_CLARITY;
  }
}
