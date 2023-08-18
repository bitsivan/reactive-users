import { Injectable } from '@angular/core';
import { User } from './user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[]=[];
  private user$=new Subject<User[]>();
  constructor() { }

  addUser(user: User){
    this.users.push(user);
    this.user$.next(this.users);
    setInterval(()=>{
      this.users.push(user);
      this.user$.next(this.users);
    },1000);


    console.log(this.users);
  }

  getAll(){
    return this.user$.asObservable();
  }

  finishRegister(){
    this.user$.complete();
  }

}
