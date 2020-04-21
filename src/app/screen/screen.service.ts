import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getPosts(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(retry(3), catchError(this.handleError));
  }

  getPostById(id): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(retry(3), catchError(this.handleError));
  }

  getPostCommentsById(id): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).pipe(retry(3), catchError(this.handleError));
  }
}
