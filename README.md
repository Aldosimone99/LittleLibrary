# LittleLibrary

Questo è un progetto Angular che visualizza i vari libri dopo aver inserito la categoria nella barra di ricerca. Tutti i dati sono ottenuti dall'API di OpenLibrary.

### Link Online 
 https://littlelibrary-26f19.web.app/
## Indice

- [Installazione](#installazione)
- [Componenti](#componenti)

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
