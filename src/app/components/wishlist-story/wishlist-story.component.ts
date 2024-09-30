import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-wishlist-story',
  templateUrl: './wishlist-story.component.html',
  styleUrls: ['./wishlist-story.component.scss']
})
export class WishlistStoryComponent implements OnInit {

  favoriteItems!: number[];
  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.favoriteItems = this.booksService.getFavorites();
  }
}
