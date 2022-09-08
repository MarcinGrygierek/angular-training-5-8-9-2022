import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  public users!: Observable<User[]>;

  constructor() {
    this.users = this.users$.asObservable();
  }

  public addUser = () => {
    const currentUsers = this.users$.value;
    const newUser: User = {
      id: currentUsers.length + 1,
      name: Math.round(Math.random() * 100000000).toString(),
    }

    this.users$.next([
      ...currentUsers,
      newUser
    ])
  }


}
