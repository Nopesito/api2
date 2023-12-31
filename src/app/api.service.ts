import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }
  // Se establece la base url del API a consumir
  apiURL = 'http://localhost:3000';
  // Se declara la variable http de tipo HttpClient
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.apiURL + '/users').pipe(
      retry(3)
    );
  }

  getPosts(): Observable<any> {
    return this.http.get(this.apiURL + '/posts').pipe(
      retry(3)
    );
  }

  postPosts(post:any): Observable<any> {
    return this.http.post(this.apiURL + '/posts', post, this.httpOptions).pipe(
      retry(3)
    );
      
  }

  updatePost(id:any, post:any): Observable<any> {
    return this.http.put(this.apiURL + '/posts/' + id, post, this.httpOptions).pipe(retry(3));
  }


  deletePost(id: any): Observable<any> {
    return this.http.delete(this.apiURL + '/posts/' + id, this.httpOptions)
  }


}
