import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  autherKey;
  constructor(private http: HttpClient) { }

  getBooks(): Observable<any[]> {
    return this.http.get<any>('https://openlibrary.org/subjects/finance.json').pipe(
      map(response => response)
    );
  }

  getAutherDetails(auther): Observable<any[]>{
    return this.http.get<any>(`https://openlibrary.org/search/authors.json?q=${auther}`).pipe(
      map(response => response)
    );
  }
}
