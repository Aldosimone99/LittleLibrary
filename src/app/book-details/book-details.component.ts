import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookId: string = '';
  bookDetails: any = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get('id') || '';
    if (this.bookId) {
      this.fetchBookDetails();
    }
  }

  fetchBookDetails() {
    const url = `https://openlibrary.org/works/${this.bookId}.json`;
    this.http.get(url).subscribe((data: any) => {
      this.bookDetails = data;
    });
  }
}