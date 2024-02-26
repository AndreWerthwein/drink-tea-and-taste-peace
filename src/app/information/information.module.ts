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
import { PreparationHelpComponent } from './preparation/preparation-help/preparation-help.component';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { TeaPropertyComponent } from './tea-property/tea-property.component';
import { TeaPropertyWithTextComponent } from './tea-property-with-text/tea-property-with-text.component';

@NgModule({
  declarations: [
    GeneralInformationComponent,
    PreparationComponent,
    AppearanceLeavesComponent,
    AppearanceInfusionComponent,
    PreparationHelpComponent,
    TeaPropertyComponent,
    TeaPropertyWithTextComponent,
  ],
  imports: [
    CommonModule,
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
