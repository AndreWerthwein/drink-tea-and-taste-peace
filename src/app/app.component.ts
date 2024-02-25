import { Component } from '@angular/core';
import { AppearanceLeavesModel } from './shared-data-models/appearance.model';
import { APPEARANCE_LEAVES } from './tea-data/997-caipirinha.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  test: AppearanceLeavesModel;

  constructor() {
    this.test = APPEARANCE_LEAVES;
  }
}
