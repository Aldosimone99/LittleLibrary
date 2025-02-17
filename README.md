# LittleLibrary

Questo progetto Angular permette agli utenti di cercare libri per categoria utilizzando l'API di Open Library. Gli utenti possono inserire una categoria (ad esempio, "fantasy") e visualizzare una lista di libri correlati. Inoltre, è possibile visualizzare i dettagli di ogni libro, come titolo, copertina, autore e descrizione. Il design dell'applicazione è minimal per fare in modo che sia semplice da usare ed è ottimizzato anche per mobile.

### Link Online 
 https://littlelibrary-26f19.web.app/

## Funzionalità
- **Ricerca per categoria**: Inserisci una categoria nel campo di ricerca per ottenere una lista di libri.
- **Visualizzazione dei dettagli del libro**: Clicca su un libro per visualizzarne i dettagli, inclusi titolo e descrizione.

## Installazione

Per eseguire questo progetto in locale, segui questi passaggi:

1. Clona il repository:
   `git clone https://github.com/Aldosimone99/LittleLibrary.git`

2. Vai nella directory del progetto `cd LittleLibrary`

3. `npm install`

4. `ng serve`

## Componenti

`Search` è responsabile della ricerca di un elenco di libri inserendo la categoria nella barra di ricerca al centro della pagina. Una volta inserita la categoria si aprirà una pagina con i risultati.

`Results` è responsabile per mostrare tutti i libri di una determinata categoria. In questa pagina verranno mostrati i titoli, le copertine dei libri e cliccando su uno di essi si aprirà la pagina con i dettagli.

`Book Details` è responsabile per mostrare i dettagli del libro selezionato come la copertina, il titolo, l'autore e la descrizione.



Questo progetto è stato generato con la versione 19. [Angular CLI](https://github.com/angular/angular-cli)
