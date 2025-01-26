import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconButtonModel } from 'src/app/shared-component-models/button.model';

@Component({
    selector: 'icon-button',
    templateUrl: './icon-button.component.html',
    styleUrl: './icon-button.component.scss',
    standalone: false
})
export class IconButtonComponent {
  @Input() configuration: IconButtonModel;
  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  onClick(): void {
    this.clicked.emit(true);
  } // emits 'true'
}
