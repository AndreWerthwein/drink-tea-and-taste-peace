import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'select-box',
    templateUrl: './select-box.component.html',
    styleUrls: ['./select-box.component.scss'],
    standalone: false
})
export class SelectBoxComponent {
  @Input() label: string;
  @Input() options: Array<string> = [];
  @Output() selected: EventEmitter<string> = new EventEmitter<string>();

  selection: string = 'PLEASE_SELECT';

  onSelect(): void {
    this.selected.emit(this.selection);
  } // emits selected value
}
