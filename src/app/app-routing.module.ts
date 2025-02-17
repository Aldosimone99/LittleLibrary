import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { BookDetailsComponent } from './book-details/book-details.component'; 

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'results/:query', component: ResultsComponent },
  { path: 'book/:id', component: BookDetailsComponent } // Nuova pagina dettagli libro
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }