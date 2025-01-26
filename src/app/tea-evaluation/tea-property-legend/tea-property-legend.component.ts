import { Component, Input } from '@angular/core';

@Component({
    selector: 'tea-property-legend',
    templateUrl: './tea-property-legend.component.html',
    styleUrl: './tea-property-legend.component.scss',
    standalone: false
})
export class TeaPropertyLegendComponent {
  @Input() data: Array<string>;
}
