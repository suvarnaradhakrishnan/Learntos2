import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  baseURL="https://localhost:7231/"
  login(username:string,password:string){
    return this.http.get(this.baseURL+'/api/User/Login')
  }
}
