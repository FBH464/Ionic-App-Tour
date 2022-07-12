import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  getposts () {
    return this.http.get<any>('http://localhost:1337/api/posts')

  }

  getpostById () {}


}
