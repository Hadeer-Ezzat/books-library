import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any[]> {
    return this.http.get<any>('https://openlibrary.org/people/mekBot/books/want-to-read.json').pipe(
      map(response => response.reading_log_entries)
    );
  }
}
