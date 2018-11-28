import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Ireview } from './review';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private _url = "http://localhost:3000/reviews";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  getReviews(): Observable<Ireview[]> {
    return this.http.get<Ireview[]>(this._url).pipe(
      catchError(this.handleError)

    )

  }

  addReviews(data): Observable<Ireview[]> {
    
    return this.http.post<Ireview[]>(this._url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)

    )

  }
  deleteReviews(id)  {
    
    if (confirm("Are you sure to delete"))

      return this.http.delete(`${this._url}/${id}`, this.httpOptions).pipe(
        catchError(this.handleError)

      )

  }
  updateReviews(data): Observable<Ireview[]> {
    
    return this.http.put<Ireview[]>(this._url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)

    )

  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occures", error.error.message)
    }
    else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    return throwError(" Something happen worng")
  }

}

