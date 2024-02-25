import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

// translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';

// components
import { SelectBoxComponent } from './select-box/select-box.component';
import { EvaluationRangeComponent } from './evaluation-range/evaluation-range.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { TextInputComponent } from './text-input/text-input.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { ButtonPrimaryComponent } from './button-primary/button-primary.component';
import { ButtonSecondaryComponent } from './button-secondary/button-secondary.component';
import { ButtonTertiaryComponent } from './button-tertiary/button-tertiary.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { QualityScaleComponent } from './quality-scale/quality-scale.component';
import { QualityScaleLegendComponent } from './quality-scale/quality-scale-legend/quality-scale-legend.component';

@NgModule({
  declarations: [
    SelectBoxComponent,
    EvaluationRangeComponent,
    TextBoxComponent,
    TextInputComponent,
    NumberInputComponent,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    ButtonTertiaryComponent,
    IconButtonComponent,
    QualityScaleComponent,
    QualityScaleLegendComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    NgbPopoverModule,
    // translation
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    SelectBoxComponent,
    EvaluationRangeComponent,
    TextBoxComponent,
    TextInputComponent,
    NumberInputComponent,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    ButtonTertiaryComponent,
    IconButtonComponent,
    QualityScaleComponent,
  ],
})
export class SharedComponentsModule {}
