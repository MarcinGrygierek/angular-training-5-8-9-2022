import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rx3Component } from './rx3.component';

describe('Rx3Component', () => {
  let component: Rx3Component;
  let fixture: ComponentFixture<Rx3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rx3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rx3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
