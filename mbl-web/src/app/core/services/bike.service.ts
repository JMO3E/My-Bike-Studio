import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Bike } from '../../shared/interface/bikeInterface';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getBikes(): Observable<Bike[]>{
    return this.http.get<Bike[]>(`${this.apiUrl}/bikes`)
    .pipe(
      catchError(this.handleError<Bike[]>('getBikes', []))
    );
  }

  getBikeById(id: number): Observable<Bike[]>{
    const customUrl = `${this.apiUrl}/bike/${id}`;
    return this.http.get<Bike[]>(customUrl)
    .pipe(
      tap(_ => console.log(`fetched bike id=${id}`)),
      catchError(this.handleError<Bike[]>(`getBikeById id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
