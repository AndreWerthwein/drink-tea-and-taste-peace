import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// base components
import { RadialDiagramComponent } from './radial-diagram/radial-diagram.component';

// grid
import { RadialDiagramGridComponent } from './radial-diagram-grid/radial-diagram-grid.component';

// values
import { RadialDiagramValuesLinesComponent } from './radial-diagram-values-lines/radial-diagram-values-lines.component';
import { RadialDiagramValuesPolygonComponent } from './radial-diagram-values-polygon/radial-diagram-values-polygon.component';
import { RadialDiagramValuesAreaComponent } from './radial-diagram-values-area/radial-diagram-values-area.component';

@NgModule({
  declarations: [
    RadialDiagramComponent,
    RadialDiagramGridComponent,
    RadialDiagramValuesLinesComponent,
    RadialDiagramValuesPolygonComponent,
    RadialDiagramValuesAreaComponent,
  ],
  imports: [CommonModule],
  exports: [RadialDiagramComponent],
})
export class RadialDiagramsModule {}
