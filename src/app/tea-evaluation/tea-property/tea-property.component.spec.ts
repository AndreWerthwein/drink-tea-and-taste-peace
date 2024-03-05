import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaPropertyComponent } from './tea-property.component';

describe('TeaPropertyComponent', () => {
  let component: TeaPropertyComponent;
  let fixture: ComponentFixture<TeaPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeaPropertyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeaPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
