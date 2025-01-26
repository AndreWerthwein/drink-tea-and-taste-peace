import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { TEA_EVALUTION } from './tea-data/example.data';
import { FullEvaluationModel } from './shared-data-models/evaluation-full.model';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  example: FullEvaluationModel;
  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
    translateService.use('en');
    this.example = TEA_EVALUTION;
  }
}
