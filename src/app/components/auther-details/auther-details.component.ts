import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auther-details',
  templateUrl: './auther-details.component.html',
  styleUrls: ['./auther-details.component.scss']
})
export class AutherDetailsComponent implements OnInit {

  bookIndex;
  constructor(private booksService: BooksService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((param: Params) => {
      this.bookIndex = param['id'];
    });
    const autherKey = JSON.parse(localStorage.getItem('Books'))[this.bookIndex].authors[0].key;
    this.booksService.getAutherDetails(autherKey).subscribe((auther) => {
      console.log(autherKey);
      console.log(auther);
    });
  }

}
