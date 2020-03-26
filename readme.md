![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/152855/73064373-5ed69780-3ea1-11ea-8a71-3d370a5e7dd8.png)

# Kilka ważnych informacji

Przed przystąpieniem do rozwiązywania zadań przeczytaj poniższe wskazówki

## Jak zacząć?

1. Stwórz [*fork*](https://guides.github.com/activities/forking/) repozytorium z zadaniami.
2. Sklonuj repozytorium na swój komputer. Użyj do tego komendy `git clone adres_repozytorium`
Adres repozytorium możesz znaleźć na stronie repozytorium po naciśnięciu w guzik "Clone or download".
3. Rozwiąż zadania i skomituj zmiany do swojego repozytorium. Użyj do tego komend `git add nazwa_pliku`.
Jeżeli chcesz dodać wszystkie zmienione pliki użyj `git add .` 
Pamiętaj że kropka na końcu jest ważna!
Następnie skommituj zmiany komendą `git commit -m "nazwa_commita"`
4. Wypchnij zmiany do swojego repozytorium na GitHubie.  Użyj do tego komendy `git push origin master`
5. Stwórz [*pull request*](https://help.github.com/articles/creating-a-pull-request) do oryginalnego repozytorium, gdy skończysz wszystkie zadania.

Poszczególne zadania rozwiązuj w odpowiednich plikach.

# Poniżej znajdziesz wytyczne do zadań

## Jak zacząć
Żeby zacząć pracować z ScrumLab musisz:

* `clone` - zklonować to repozytorium na swój komputer
* `npm install` - zainstalować wszytkie potrzebne paczki


## Gulp
Poniżej możesz znaleźć wszytkie komendy Gulp które są dla Ciebie dostępne:

`gulp` lub `gulp serve`  - uruchomi GULP w trybie `watchmode`. Oznacza to że zostanie uruchomiona strona `localhost` która będzie odświeżana za każdym razem gdy zmienisz jakikolwiek plik `scss`, `js` lub `html`.

`gulp watch` - uruchamia GULP w trybie nadzoru, będzie kompilować `main.scss` w `css/main.css`

`gulp sass` - Kompiluje SASS do CSS


## Struktura katalogów
```
| - development/
	| - css/      
	| - fonts/
	| - images/  
	| - js/
	| - scss/
	| - app.html  
	| - index.html  
	| - recipes.html    
	| - schedules.html
| - distribution/
| - package.json
| - gulpfile.js
```

***gdzie:***
`distribution` - powinien zawierać zoptymalizowane pliki potrzebne do produkcyjnej wersji portalu.
`development`  - powinien zawierać kod źródłowy.

---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
