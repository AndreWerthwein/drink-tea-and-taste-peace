import { Component, EventEmitter, Input, Output } from '@angular/core';

// models
import { ButtonBaseModel } from 'src/app/shared-component-models/button.model';

@Component({
  selector: 'button-secondary',
  templateUrl: './button-secondary.component.html',
  styleUrl: './button-secondary.component.scss',
})
export class ButtonSecondaryComponent {
  @Input() configuration: ButtonBaseModel;
  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  onClick(): void {
    this.clicked.emit(true);
  } // emits 'true'
}
