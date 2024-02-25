import { Component } from '@angular/core';
import { AppearanceLeavesModel } from './shared-data-models/appearance.model';
import { APPEARANCE_LEAVES } from './tea-data/997-caipirinha.data';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  test: AppearanceLeavesModel;

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
    translateService.use('en');

    this.test = APPEARANCE_LEAVES;
  }
}
