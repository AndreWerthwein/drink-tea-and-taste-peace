import { Component, Input } from '@angular/core';

@Component({
  selector: 'tea-property',
  templateUrl: './tea-property.component.html',
  styleUrl: './tea-property.component.scss',
})
export class TeaPropertyComponent {
  @Input() title: string;
  @Input() values: Array<number>;
  @Input() legend: Array<string>;
}
