import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../../application/crud/services/generic.service';
import { User } from '../../user';

@Injectable({
  providedIn: 'root'
})
export class ReactiveService extends GenericService<User, number> {

  constructor(http: HttpClient) {
    super(http, "http://localhost:3000/api");
   }
}
