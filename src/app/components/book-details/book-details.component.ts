import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  bookIndex;
  bookTitle;
  publishedIn;
  autherName;
  editionCount;
  coverImg;
  bookKey;
  constructor(private route: ActivatedRoute, private booksService: BooksService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((param: Params) => {
      this.bookIndex = param['index'];
    });
    this.bookTitle = JSON.parse(localStorage.getItem('Books'))[this.bookIndex].title;
    this.publishedIn = JSON.parse(localStorage.getItem('Books'))[this.bookIndex].first_publish_year;
    this.autherName = JSON.parse(localStorage.getItem('Books'))[this.bookIndex].authors[0].name;
    this.editionCount = JSON.parse(localStorage.getItem('Books'))[this.bookIndex].edition_count;
    this.coverImg = JSON.parse(localStorage.getItem('Books'))[this.bookIndex].cover_id;
    this.bookKey = JSON.parse(localStorage.getItem('Books'))[this.bookIndex].key;
  }

  addBook(): void {
    this.booksService.addToFavorites(this.bookKey);
  }

}
