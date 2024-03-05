import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaPropertyLegendComponent } from './tea-property-legend.component';

describe('TeaPropertyLegendComponent', () => {
  let component: TeaPropertyLegendComponent;
  let fixture: ComponentFixture<TeaPropertyLegendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeaPropertyLegendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeaPropertyLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
