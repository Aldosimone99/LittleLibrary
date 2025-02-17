import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  standalone: false,
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string = '';

  constructor(private router: Router) {}

  searchBooks() {
    if (this.query.trim()) {
      this.router.navigate(['/results', this.query]); // Naviga alla pagina risultati
    }
  }
}