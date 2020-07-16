import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(private http:HttpClient) { }
  
  newUser(item){
    return this.http.post("http://localhost:3000/reg",{"user":item})
    .subscribe(details=>{console.log(details)});
  }
}
