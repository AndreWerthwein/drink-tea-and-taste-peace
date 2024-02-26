import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaPropertyWithTextComponent } from './tea-property-with-text.component';

describe('TeaPropertyWithTextComponent', () => {
  let component: TeaPropertyWithTextComponent;
  let fixture: ComponentFixture<TeaPropertyWithTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeaPropertyWithTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeaPropertyWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
