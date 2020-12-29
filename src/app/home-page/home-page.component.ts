import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/shared/user.model';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public usersArray:User[] = new Array<User>();
  public newUser:User = new User('',null,'','');
  constructor(private router:Router, private _userService:UserServiceService) { }

  ngOnInit(): void {
    this.usersArray = this._userService.getUsers();
  }

  onDelete(user:User){
    this._userService.deleteUser(user);
  }

  onUpdate(user:User){
    this.router.navigate(['/update'],{queryParams:{
      email: user.email,
      age: user.age,
      firstName: user.firstName,
      lastName: user.lastName
    }});
  }

}
