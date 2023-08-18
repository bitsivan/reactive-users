import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  userForm: FormGroup;

  constructor(private service: UserService){
    this.userForm=new FormGroup({
      name: new FormControl(),
      company: new FormControl(),
      email: new FormControl(),
      telephone: new FormControl()
    })
  }

  onSubmit(){
    this.service.addUser(this.userForm.value);
  }

  finishRegister(){
    alert('The service was finished!');
    this.service.finishRegister();
  }
}
