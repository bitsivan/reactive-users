import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  count: number=0;

  constructor(private service: UserService){
    this.service.getAll().subscribe(data=>{
      this.count = data.length;
    })
  }
}
