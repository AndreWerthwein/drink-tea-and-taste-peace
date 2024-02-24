import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialDiagramComponent } from './radial-diagram.component';

describe('RadialDiagramComponent', () => {
  let component: RadialDiagramComponent;
  let fixture: ComponentFixture<RadialDiagramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadialDiagramComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RadialDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create 'RadialDiagramComponent'", () => {
    expect(component).toBeTruthy();
  });
});
