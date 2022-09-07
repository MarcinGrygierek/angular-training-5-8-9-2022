import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}

  bmiForm = this.fb.group({
    height: this.fb.control('', Validators.required),
    weight: this.fb.control('', Validators.required)
  })

  getBmi = () => {
    const height = parseFloat(this.bmiForm.value.height) / 100;
    const weight = parseFloat(this.bmiForm.value.weight);

    if(isNaN(height) || isNaN(weight)) return '-';
 
    return (weight / (height * height)).toFixed(2);

  }
}
