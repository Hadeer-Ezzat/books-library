import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auther-details',
  templateUrl: './auther-details.component.html',
  styleUrls: ['./auther-details.component.scss']
})
export class AutherDetailsComponent implements OnInit {

  bookIndex: number;
  birthDate: Date;
  topWork: [];
  workCount: number;
  topSubjects = [];
  autherName: string;
  imgKey;
  constructor(private booksService: BooksService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((param: Params) => {
      this.bookIndex = param['id'];
    });
    const autherKey = JSON.parse(localStorage.getItem('Books'))[this.bookIndex].authors[0].key;
    const lastSegment = JSON.parse(localStorage.getItem('Books'))[this.bookIndex].authors[0].name;
    this.booksService.getAutherDetails(autherKey).subscribe((auther: any) => {
      this.birthDate = auther.birth_date;
      this.autherName = auther.name;
      this.imgKey = auther.photos[0];
    });
    this.booksService.getOtherAutherDetails(lastSegment).subscribe((data) => {
      // tslint:disable-next-line:prefer-for-of
      // for (let i = 0; i < data.docs.length; i++) {
      this.topWork = data.docs[0].top_work;
      this.topSubjects = data.docs[0].top_subjects.slice(0, 5);
      this.workCount = data.docs[0].work_count;
      // }
    });
  }

}
