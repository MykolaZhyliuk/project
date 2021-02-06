"use strict";

const numberOfFilms = +prompt('Сколько фильмов ви уже посмотрели?', '');

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотрених фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотрених фильмов?', ''),
      d = prompt('На сколько оцените его?', '');



personaMovieDB.movies[a] = b;
personaMovieDB.movies[c] = d;

console.log(personaMovieDB);