import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/shared/user.model';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  public newUser:User = new User('',null,'','');
  

  constructor(private router:Router, private _userService:UserServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.newUser = form.value;
    this.router.navigate(['/home']);
    this._userService.pushUser(this.newUser);
    form.reset();
  }

}
