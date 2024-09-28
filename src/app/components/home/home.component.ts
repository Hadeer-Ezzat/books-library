import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books: any[] = [];
  subjectType;
  key;
  constructor(private booksService: BooksService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    localStorage.getItem('Books');
    this.booksService.getBooks().subscribe((data: any) => {
      this.subjectType = data.name;
      this.key = data.works[0].key;
      const firstNineItems = data.works.slice(0, 9);
      this.books = firstNineItems;
      this.saveDataToLocalStorage();
    }, (error) => {
      console.error('Error fetching books data', error);
    });
  }

  saveDataToLocalStorage(): void {
    localStorage.setItem('Books', JSON.stringify(this.books));
  }

  detailsPage(index): void {
    this.router.navigate(['Details'], { state: index });
  }
  autherDetails(id): void {
    this.router.navigate(['AutherDetails'], { queryParams: {id}});
  }

}
