import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rx2Component } from './rx2.component';

describe('Rx2Component', () => {
  let component: Rx2Component;
  let fixture: ComponentFixture<Rx2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rx2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rx2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
