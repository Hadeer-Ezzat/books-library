import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-search-story',
  templateUrl: './search-story.component.html',
  styleUrls: ['./search-story.component.scss']
})
export class SearchStoryComponent implements OnInit {

  searchForm: FormGroup;
  searchResults: any[] = [];
  constructor(private fb: FormBuilder, private booksService: BooksService) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchKey: ['title'],
      searchValue: ['']
    });
  }

  onSearch(): void {
    const { searchKey, searchValue } = this.searchForm.value;
    this.booksService.searchBooks(searchKey, searchValue).subscribe((results: any) => {
      const firstNineItems = results.docs.slice(0, 9);
      this.searchResults = firstNineItems;
    });
  }

}
