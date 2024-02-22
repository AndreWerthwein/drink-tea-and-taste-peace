import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
import { MatIconModule } from '@angular/material/icon';

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
  ],
  imports: [CommonModule, FormsModule, MatIconModule],
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
  ],
})
export class SharedComponentsModule {}
