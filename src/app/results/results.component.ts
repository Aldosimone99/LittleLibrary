import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  standalone: false,
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  query: string = '';
  books: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cdr: ChangeDetectorRef // Forza il rilevamento delle modifiche
  ) {}

  ngOnInit() {
    // Ascolta le modifiche nei parametri e ricarica i dati
    this.route.params.subscribe(params => {
      this.query = params['query'];
      this.fetchBooks();
      this.cdr.detectChanges(); // Forza il ricalcolo della vista
    });
  }

  fetchBooks() {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(this.query)}`;
    this.http.get(url).subscribe((response: any) => {
      this.books = response.docs.slice(0, 10).map((book: any) => ({
        id: book.key.replace('/works/', ''), // Estrai l'ID del libro
        title: book.title,
        cover: book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
          : 'https://via.placeholder.com/128x192?text=No+Cover'
      }));
    });
  }
}