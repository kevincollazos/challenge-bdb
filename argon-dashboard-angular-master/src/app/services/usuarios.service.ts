import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient) {

  }

  getUsers(){
    return this.http.get(`${this.API_URI}/users`);
  }

  getUser(id: string){
    return this.http.get(`${this.API_URI}/users/${id}`);
  }

  deleteUser(id: string){
    return this.http.delete(`${this.API_URI}/users/${id}`);
  }

  saveUser(user: User){
    return this.http.post(`${this.API_URI}/users`,user);
  }

  updateUser(id: string|number, updatedUser: User){
    return this.http.put(`${this.API_URI}/users/${id}`, updatedUser);
  }
  
}
