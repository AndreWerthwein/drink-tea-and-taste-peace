import { Component } from '@angular/core';
import { AppearanceLeavesModel } from './shared-data-models/appearance.model';
import { APPEARANCE_LEAVES, PREPARATION } from './tea-data/997-caipirinha.data';
import { TranslateService } from '@ngx-translate/core';
import { PreparationModel } from './shared-data-models/preparation.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  test: PreparationModel;

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
    translateService.use('en');

    this.test = PREPARATION;
  }
}
