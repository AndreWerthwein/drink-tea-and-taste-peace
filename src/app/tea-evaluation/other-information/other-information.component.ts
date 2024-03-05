import { Component, Input } from '@angular/core';

@Component({
  selector: 'other-information',
  templateUrl: './other-information.component.html',
  styleUrl: './other-information.component.scss',
})
export class OtherInformationComponent {
  @Input() text: Array<string>;
}
