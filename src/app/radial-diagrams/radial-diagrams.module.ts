import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// base components
import { RadialDiagramComponent } from './radial-diagram/radial-diagram.component';

// grid
import { RadialDiagramGridComponent } from './radial-diagram-grid/radial-diagram-grid.component';

// values
import { RadialDiagramValuesLinesComponent } from './radial-diagram-values-lines/radial-diagram-values-lines.component';

@NgModule({
  declarations: [
    RadialDiagramComponent,
    RadialDiagramGridComponent,
    RadialDiagramValuesLinesComponent,
  ],
  imports: [CommonModule],
  exports: [RadialDiagramComponent],
})
export class RadialDiagramsModule {}