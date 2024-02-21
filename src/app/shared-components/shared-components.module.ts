import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// components
import { SelectBoxComponent } from './select-box/select-box.component';

@NgModule({
  declarations: [SelectBoxComponent],
  imports: [CommonModule, FormsModule],
  exports: [SelectBoxComponent],
})
export class SharedComponentsModule {}
