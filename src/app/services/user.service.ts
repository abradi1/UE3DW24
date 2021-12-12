import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Users} from 'src/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  getUsers(){
    return this.http.get<Users[]>('htpp:localhost:3000/api/findalluser');
  }
}
