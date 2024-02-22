import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialDiagramGridComponent } from './radial-diagram-grid.component';

describe('RadialDiagramGridComponent', () => {
  let component: RadialDiagramGridComponent;
  let fixture: ComponentFixture<RadialDiagramGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadialDiagramGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RadialDiagramGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create 'RadialDiagramGridComponent'", () => {
    expect(component).toBeTruthy();
  });
});
