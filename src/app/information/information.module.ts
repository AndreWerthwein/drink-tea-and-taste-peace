import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { PreparationComponent } from './preparation/preparation.component';
import { AppearanceLeavesComponent } from './appearance-leaves/appearance-leaves.component';
import { AppearanceInfusionComponent } from './appearance-infusion/appearance-infusion.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    GeneralInformationComponent,
    PreparationComponent,
    AppearanceLeavesComponent,
    AppearanceInfusionComponent,
  ],
  imports: [
    CommonModule,
    // translation
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    // custom modules
    SharedComponentsModule,
  ],
  exports: [
    GeneralInformationComponent,
    PreparationComponent,
    AppearanceLeavesComponent,
    AppearanceInfusionComponent,
  ],
})
export class InformationModule {}
