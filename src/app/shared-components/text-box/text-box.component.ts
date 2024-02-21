import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'text-box',
  templateUrl: './text-box.component.html',
  styleUrl: './text-box.component.scss',
})
export class TextBoxComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Output() userInput: EventEmitter<string> = new EventEmitter<string>();

  input: string = '';

  onInput(): void {
    this.userInput.emit(this.input);
  } // emits user input
}
