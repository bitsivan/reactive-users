import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[]=[];
  constructor(private service: UserService){
    this.service.getAll().subscribe(data=>{
      this.users=data;
    })
  }
}
