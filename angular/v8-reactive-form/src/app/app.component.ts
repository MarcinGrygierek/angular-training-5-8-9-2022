import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', Validators.required)
  })
  
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

  handleSubmit = () => {
    console.log('Submit', this.form.value);
  }
}
