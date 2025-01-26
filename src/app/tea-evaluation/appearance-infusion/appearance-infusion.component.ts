import { Component, Input } from '@angular/core';
import { AppearanceInfusionModel } from 'src/app/shared-data-models/appearance.model';

@Component({
    selector: 'appearance-infusion',
    templateUrl: './appearance-infusion.component.html',
    styleUrl: './appearance-infusion.component.scss',
    standalone: false
})
export class AppearanceInfusionComponent {
  @Input() data: AppearanceInfusionModel;
}
