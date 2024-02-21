import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// components
import { SelectBoxComponent } from './select-box/select-box.component';
import { EvaluationRangeComponent } from './evaluation-range/evaluation-range.component';

@NgModule({
  declarations: [SelectBoxComponent, EvaluationRangeComponent],
  imports: [CommonModule, FormsModule],
  exports: [SelectBoxComponent, EvaluationRangeComponent],
})
export class SharedComponentsModule {}
