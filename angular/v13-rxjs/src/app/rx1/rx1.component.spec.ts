import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rx1Component } from './rx1.component';

describe('Rx1Component', () => {
  let component: Rx1Component;
  let fixture: ComponentFixture<Rx1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rx1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
