import { Component, EventEmitter, Input, Output } from '@angular/core';

// models
import { ButtonBaseModel } from 'src/app/shared-component-models/button.model';

@Component({
    selector: 'button-tertiary',
    templateUrl: './button-tertiary.component.html',
    styleUrl: './button-tertiary.component.scss',
    standalone: false
})
export class ButtonTertiaryComponent {
  @Input() configuration: ButtonBaseModel;
  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  onClick(): void {
    this.clicked.emit(true);
  } // emits 'true'
}
