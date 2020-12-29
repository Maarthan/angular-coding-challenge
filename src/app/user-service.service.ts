import { Injectable } from '@angular/core';
import { User } from 'src/shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public arrayOfUsers:User[] = new Array<User>();
  constructor() { }

  pushUser(user:User){
    this.arrayOfUsers.push(user);
  }

  deleteUser(user:User){
    let id = this.arrayOfUsers.indexOf(user);
    this.arrayOfUsers.splice(id,1);
  }

  getUsers(){
    return this.arrayOfUsers;
  }

  updateUser(user:User){
    let id = this.arrayOfUsers.indexOf(user);
    console.log(id);
    console.log(user);
    this.arrayOfUsers[id+1] = user;
  }
}
