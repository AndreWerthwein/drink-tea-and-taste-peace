import { Component, Input } from '@angular/core';
import { PreparationModel } from 'src/app/shared-data-models/preparation.model';

@Component({
    selector: 'preparation',
    templateUrl: './preparation.component.html',
    styleUrl: './preparation.component.scss',
    standalone: false
})
export class PreparationComponent {
  @Input() data: PreparationModel;
}
