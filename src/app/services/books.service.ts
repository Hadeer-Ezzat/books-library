import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  autherKey;
  private favoriteItems: number[] = [];
  constructor(private http: HttpClient) { }

  getBooks(): Observable<any[]> {
    return this.http.get<any>('https://openlibrary.org/subjects/finance.json').pipe(
      map(response => response)
    );
  }

  getAutherDetails(id): Observable<any[]> {
    return this.http.get<any>(`/api${id}.json`);
  }

  getOtherAutherDetails(autherName): Observable<any> {
    return this.http.get<any>(`/api/search/authors.json?q=${autherName}`);
  }

  searchBooks(searchKey: string, searchValue: string): Observable<any[]> {
    const api = 'https://openlibrary.org/search.json';
    const query = `${api}?${searchKey}=${searchValue}`;
    return this.http.get<any[]>(query);
  }

  addToFavorites(itemId): void {
    if (!this.favoriteItems.includes(itemId)) {
      this.favoriteItems.push(itemId);
    }
  }

  getFavorites(): number[] {
    return this.favoriteItems;
  }
}
