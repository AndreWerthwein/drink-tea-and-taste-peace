import { Component, Input } from '@angular/core';

@Component({
  selector: 'select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss'],
})
export class SelectBoxComponent {
  @Input() label: string = '';
  @Input() options: Array<string> = [];
}
