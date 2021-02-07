"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов ви уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов ви уже посмотрели?', '');
    }
}

start();

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

rememberMyFilms();

function rememberMyFilms() {
    for (let i = 0; i < 2;i++){
    const a = prompt('Один из последних просмотрених фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
        personaMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }  
}
}

function detectPersonalLevel() {
  if (personaMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personaMovieDB.count >= 10 && personaMovieDB.count < 30) {
    console.log("Ви класний зритель");
  } else if (personaMovieDB.count >= 30) {
    console.log("Ви киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

// detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personaMovieDB);
    }    
}

showMyDB(personaMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i<= 3; i++){
        // const genre = prompt(`Ваш любимий жанр под номером${i}`);
        personaMovieDB.genres[i - 1] = prompt(`Ваш любимий жанр под номером${i}`);
    }
}

writeYourGenres();