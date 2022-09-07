import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId: string = '';

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot);

    this.route.params.subscribe(params => {
     this.userId = params.id;
    })
   }

  ngOnInit(): void {
  }

}
