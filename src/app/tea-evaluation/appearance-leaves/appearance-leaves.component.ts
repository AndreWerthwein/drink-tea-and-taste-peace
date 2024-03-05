import { Component, Input } from '@angular/core';
import { AppearanceLeavesModel } from 'src/app/shared-data-models/appearance.model';

@Component({
  selector: 'appearance-leaves',
  templateUrl: './appearance-leaves.component.html',
  styleUrl: './appearance-leaves.component.scss',
})
export class AppearanceLeavesComponent {
  @Input() data: AppearanceLeavesModel;
}
