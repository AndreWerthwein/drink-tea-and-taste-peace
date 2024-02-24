import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialDiagramValuesPolygonComponent } from './radial-diagram-values-polygon.component';

describe('RadialDiagramValuesPolygonComponent', () => {
  let component: RadialDiagramValuesPolygonComponent;
  let fixture: ComponentFixture<RadialDiagramValuesPolygonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadialDiagramValuesPolygonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RadialDiagramValuesPolygonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create ''RadialDiagramValuesPolygonComponent", () => {
    expect(component).toBeTruthy();
  });
});
