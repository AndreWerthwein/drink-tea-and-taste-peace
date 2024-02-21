import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// components
import { SelectBoxComponent } from './select-box/select-box.component';
import { EvaluationRangeComponent } from './evaluation-range/evaluation-range.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { TextInputComponent } from './text-input/text-input.component';

@NgModule({
  declarations: [
    SelectBoxComponent,
    EvaluationRangeComponent,
    TextBoxComponent,
    TextInputComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    SelectBoxComponent,
    EvaluationRangeComponent,
    TextBoxComponent,
    TextInputComponent,
  ],
})
export class SharedComponentsModule {}
