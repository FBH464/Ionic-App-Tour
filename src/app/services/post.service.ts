import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  getposts (): Observable<any>{
    return this.http.get(`${environment.baseUrl}?api_key=${environment.apiKey}`)
    .pipe(
      map((res:any) =>{
        return res.data;
      })
    )
  }

  getpostById () {}


}
