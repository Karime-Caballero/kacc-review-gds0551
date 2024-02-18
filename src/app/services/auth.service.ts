import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl1 = 'http://localhost:3000';

  constructor(private http:HttpClient) {}
  registerUser(usuario: User){
    return this.http.post(`${this.baseUrl1}/users`, usuario);
  }

  getUserByEmail(email:string):Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl1}/users?email=${email}`);
    
  }
}
