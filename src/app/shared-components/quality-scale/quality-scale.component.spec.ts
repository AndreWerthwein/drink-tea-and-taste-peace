import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityScaleComponent } from './quality-scale.component';

describe('QualityScaleComponent', () => {
  let component: QualityScaleComponent;
  let fixture: ComponentFixture<QualityScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QualityScaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualityScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
