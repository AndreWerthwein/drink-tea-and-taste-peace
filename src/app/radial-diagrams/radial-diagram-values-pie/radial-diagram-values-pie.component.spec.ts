import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialDiagramValuesPieComponent } from './radial-diagram-values-pie.component';

describe('RadialDiagramValuesPieComponent', () => {
  let component: RadialDiagramValuesPieComponent;
  let fixture: ComponentFixture<RadialDiagramValuesPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RadialDiagramValuesPieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadialDiagramValuesPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
