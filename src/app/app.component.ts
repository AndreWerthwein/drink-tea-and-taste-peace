import { Component } from '@angular/core';
import { GeneralInformationModel } from './shared-data-models/general-information.model';
import { CAIPIRINHA_997 } from './tea-data/997-caipirinha.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  test: GeneralInformationModel;

  constructor() {
    this.test = CAIPIRINHA_997;
  }
}
