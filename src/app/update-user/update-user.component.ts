import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/shared/user.model';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  public theUser:User = new User('',null,'','');
  constructor(private activatedRoute:ActivatedRoute, private _userService:UserServiceService, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data =>{
      this.theUser.email = data.email;
      this.theUser.age = data.age;
      this.theUser.firstName = data.firstName;
      this.theUser.lastName = data.lastName;
    })
  }

  onSubmit(){
    this._userService.updateUser(this.theUser);
    this.router.navigate(['/home']);
    console.log(this.theUser);
  }

}
