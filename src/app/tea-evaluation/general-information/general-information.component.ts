import { Component, Input } from '@angular/core';
import { GeneralInformationModel } from 'src/app/shared-data-models/general-information.model';

@Component({
    selector: 'general-information',
    templateUrl: './general-information.component.html',
    styleUrl: './general-information.component.scss',
    standalone: false
})
export class GeneralInformationComponent {
  @Input() data: GeneralInformationModel;
}
