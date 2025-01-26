import { Component, EventEmitter, Input, Output } from '@angular/core';

// models
import { ButtonBaseModel } from 'src/app/shared-component-models/button.model';

@Component({
    selector: 'button-primary',
    templateUrl: './button-primary.component.html',
    styleUrl: './button-primary.component.scss',
    standalone: false
})
export class ButtonPrimaryComponent {
  @Input() configuration: ButtonBaseModel;
  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  onClick(): void {
    this.clicked.emit(true);
  } // emits 'true'
}
