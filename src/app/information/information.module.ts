import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { PreparationComponent } from './preparation/preparation.component';

@NgModule({
  declarations: [GeneralInformationComponent, PreparationComponent],
  imports: [CommonModule],
  exports: [GeneralInformationComponent, PreparationComponent],
})
export class InformationModule {}
