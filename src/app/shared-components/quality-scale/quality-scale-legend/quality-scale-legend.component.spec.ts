import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityScaleLegendComponent } from './quality-scale-legend.component';

describe('QualityScaleLegendComponent', () => {
  let component: QualityScaleLegendComponent;
  let fixture: ComponentFixture<QualityScaleLegendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QualityScaleLegendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualityScaleLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
