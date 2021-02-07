"use strict";

const numberOfFilms = +prompt('Сколько фильмов ви уже посмотрели?', '');


const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personaMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personaMovieDB.count >= 10 && personaMovieDB.count < 30) {
    console.log('Ви класний зритель');
} else if (personaMovieDB.count >= 30) {
    console.log('Ви киноман');
} else {
    console.log('Произошла ошибка');
}



console.log(personaMovieDB);