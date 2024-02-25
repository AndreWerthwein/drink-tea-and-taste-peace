import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { PreparationComponent } from './preparation/preparation.component';
import { AppearanceLeavesComponent } from './appearance-leaves/appearance-leaves.component';
import { AppearanceInfusionComponent } from './appearance-infusion/appearance-infusion.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

@NgModule({
  declarations: [
    GeneralInformationComponent,
    PreparationComponent,
    AppearanceLeavesComponent,
    AppearanceInfusionComponent,
  ],
  imports: [CommonModule, SharedComponentsModule],
  exports: [
    GeneralInformationComponent,
    PreparationComponent,
    AppearanceLeavesComponent,
    AppearanceInfusionComponent,
  ],
})
export class InformationModule {}
