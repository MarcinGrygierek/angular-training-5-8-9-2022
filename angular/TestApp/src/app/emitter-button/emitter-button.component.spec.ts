import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitterButtonComponent } from './emitter-button.component';

describe('EmitterButtonComponent', () => {
  let component: EmitterButtonComponent;
  let fixture: ComponentFixture<EmitterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmitterButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
