import { Component } from '@angular/core';
import { PREPARATION } from './tea-data/997-caipirinha.data';
import { PreparationModel } from './shared-data-models/preparation.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  test: PreparationModel;

  constructor() {
    this.test = PREPARATION;
  }
}
