import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFormReactiveComponent } from './task-form-reactive.component';

describe('TaskFormReactiveComponent', () => {
  let component: TaskFormReactiveComponent;
  let fixture: ComponentFixture<TaskFormReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskFormReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
