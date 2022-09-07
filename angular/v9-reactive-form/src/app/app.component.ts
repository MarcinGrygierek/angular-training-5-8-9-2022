import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) {}

  form = this.fb.group({
    login: this.fb.control('Lorem', [Validators.required, Validators.minLength(3)]),
    password: this.fb.control('Ipsum', Validators.required)
  })
  
  ngOnInit(): void {
    this.form.valueChanges.subscribe(values => {
      console.log('Values', values);
    })

    this.form.get('login')?.valueChanges.subscribe(value => {
      console.log('Value', value);
    })
  }

  hasErrors = (field: string) => {
    const input = this.form.get(field);
    if(!input) return false;
    return input.errors && input.touched;
  }

  getErrors = (field: string) => {
    const input = this.form.get(field);
    if(!input || !input.errors) return {};
    return input.errors;
  }

  resetLogin = () => {
    this.form.patchValue({
      login: ''
    })
    this.form.get('login')?.markAsUntouched();
  }

  resetPassword = () => {
    this.form.get('password')?.setValue('');
    this.form.get('password')?.markAsUntouched();
  }

  handleSubmit = () => {
    console.log('Submit', this.form.value);
    this.form.setValue({
      login: '',
      password: ''
    })
    this.form.markAsUntouched();
  }
}
