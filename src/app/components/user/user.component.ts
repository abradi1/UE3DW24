import { Component, OnInit } from '@angular/core';
import {Users} from 'src/user.model';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
users?: Users[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserNow();
  }
  getUserNow(){
    this.userService.getUsers()
    .subscribe(
      res => 
      {console.log(res)},
      error =>{
      console.log(error);}
    );
  }
}
