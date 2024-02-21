import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectBoxComponent } from './select-box/select-box.component';

@NgModule({
  declarations: [SelectBoxComponent],
  imports: [CommonModule],
  exports: [SelectBoxComponent],
})
export class SharedComponentsModule {}
