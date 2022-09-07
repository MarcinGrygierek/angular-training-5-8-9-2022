import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form-reactive',
  templateUrl: './task-form-reactive.component.html',
  styleUrls: ['./task-form-reactive.component.scss']
})
export class TaskFormReactiveComponent  {
  @Input()
  addNewTask!: (name: string) => void
  
  constructor(private fb: FormBuilder) { }

  taskForm = this.fb.group({
    newTaskName: this.fb.control('', Validators.required)
  })

  handleNewTask = () => {
    if(typeof this.addNewTask !== 'function') return;

    this.addNewTask(this.taskForm.value.newTaskName);
  }

}
