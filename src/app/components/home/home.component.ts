import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books: any[] = [];
  subjectType;
  constructor(private booksService: BooksService,
              private router: Router) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((data: any) => {
      this.subjectType = data.name;
      const firstNineItems = data.works.slice(0, 9);
      this.books = firstNineItems;
    }, (error) => {
      console.error('Error fetching books data', error);
    });
  }

  detailsPage(index): void {
    this.router.navigate(['Details'], index);
  }

}
