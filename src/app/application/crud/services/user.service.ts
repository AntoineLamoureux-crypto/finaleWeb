import { Injectable } from '@angular/core';
import { User } from 'src/app/user';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericService<User, number> {
  constructor(http: HttpClient) { 
    super(http, 'http://localhost:3000/api');
  }
}
