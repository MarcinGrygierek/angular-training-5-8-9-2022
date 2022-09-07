import { Component } from '@angular/core';

interface FormData {
  login: string;
  password: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: FormData = {
    login: '',
    password: ''
  }

  handleSubmit = () => {
    console.log('submitting', this.data);
  }
}
