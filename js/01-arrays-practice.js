/*eslint-env browser*/
//STEP 1
var favMovies = ["Movie1", "Movie2", "Movie3", "Movie4", "Movie5"];
window.console.log(favMovies [1]);
//STEP 2
var movies = new Array(5);
movies[0] = "Movie1";
movies[1] = "Movie2";
movies[2] = "Movie3";
movies[3] = "Movie4";
movies[4] = "Movie5";
window.console.log(movies[0]);

//STEP 3
var movies = new Array(5);
movies[0] = "Movie1";
movies[1] = "Movie2";
movies[2] = "Movie3";
movies[5] = "Movie6";
movies[4] = "Movie5";
window.console.log(movies.length);


//STEP 4
var movies = [];
movies[0] = "Movie1";
movies[1] = "Movie2";
movies[2] = "Movie3";
movies[3] = "Movie4";
movies[4] = "Movie5";
delete movies[0];
window.console.log(movies);


//STEP 5
Array.prototype.myMovies = function() {
    "use strict";
};
var i;
var movies = [];
movies[0] = "Movie1";
movies[1] = "Movie2";
movies[2] = "Movie3";
movies[3] = "Movie4";
movies[4] = "Movie5";
movies[5] = "Movie6";
movies[6] = "Movie7";
for (i in movies) {
    if (movies.hasOwnProperty(i)) {
     window.console.log(movies[i]);   
    }
}



//STEP 6
var movies = [];
movies[0] = "Movie1";
movies[1] = "Movie2";
movies[2] = "Movie3";
movies[3] = "Movie4";
movies[4] = "Movie5";
movies[5] = "Movie6";
movies[6] = "Movie7";
for (const movie of movies) {
    window.console.log(movie);   
    }

//STEP 7
var movies = [];
movies[0] = "AMovie";
movies[1] = "CMovie";
movies[2] = "DMovie";
movies[3] = "WMovie";
movies[4] = "ZMovie";
movies[5] = "BMovie";
movies[6] = "FMovie";
for (const movie of movies) {
    window.console.log(movies.sort());   
    }
//STEP 7.1
Array.prototype.myMovies = function() {
    "use strict";
};
var i;
var movies = [];
movies[0] = "AMovie";
movies[1] = "CMovie";
movies[2] = "FMovie";
movies[3] = "ZMovie";
movies[4] = "KMovie";
movies[5] = "LMovie";
movies[6] = "SMovie";
for (i in movies) {
    if (movies.hasOwnProperty(i)) {
     window.console.log(movies.sort()[i]);   
    }
}
window.console.log("");



//STEP 8
Array.prototype.myMovies = function() {
    "use strict";
};
var i;
var movies = [];
movies[0] = "Movie1";
movies[1] = "Movie2";
movies[2] = "Movie3";
movies[3] = "Movie4";
movies[4] = "Movie5";
movies[5] = "Movie6";
movies[6] = "Movie7";

var leastFavMovies = [];
leastFavMovies[0] = "Movie8";
leastFavMovies[1] = "Movie9";
leastFavMovies[2] = "Movie10";


window.console.log("Movies I like");
window.console.log("");
for (i in movies) {
    if (movies.hasOwnProperty(i)) {

     window.console.log(movies[i]);   
    }
}
window.console.log("");
window.console.log("Movies I dont like");
window.console.log("");
for (i in leastFavMovies) {
    if (leastFavMovies.hasOwnProperty(i)) {

     window.console.log(leastFavMovies[i]);   
    }
}


//STEP 9
var i;
var movies = [];
movies[0] = "Movie1";
movies[1] = "Movie2";
movies[2] = "Movie3";
movies[3] = "Movie4";
movies[4] = "Movie5";
movies[5] = "Movie6";
movies[6] = "Movie7";

var leastFavMovies = [];
leastFavMovies[0] = "Movie8";
leastFavMovies[1] = "Movie9";
leastFavMovies[2] = "Movie10";

window.console.log(movies.concat(leastFavMovies).reverse());

//STEP 10

var movies = [];
movies[0] = "Movie1";
movies[1] = "Movie2";
movies[2] = "Movie3";
movies[3] = "Movie4";
movies[4] = "Movie5";
movies[5] = "Movie6";
movies[6] = "Movie7";

var leastFavMovies = [];
leastFavMovies[0] = "Movie8";
leastFavMovies[1] = "Movie9";
leastFavMovies[2] = "Movie10";

var allMovies = movies.concat(leastFavMovies);
var lastItem = allMovies[allMovies.length - 1];

window.console.log(lastItem)



//STEP 11
var movies = [];
movies[0] = "Movie1";
movies[1] = "Movie2";
movies[2] = "Movie3";
movies[3] = "Movie4";
movies[4] = "Movie5";
movies[5] = "Movie6";
movies[6] = "Movie7";

var leastFavMovies = [];
leastFavMovies[0] = "Movie8";
leastFavMovies[1] = "Movie9";
leastFavMovies[2] = "Movie10";

var allMovies = movies.concat(leastFavMovies);
var firstItem = allMovies[0];

window.console.log(firstItem)


//STEP 12

//STEP 13
var favMovies = [["AMovie", 1], ["BMovie2", 2], ["CMovie", 3],["DMovie", 4],["FMovie", 5]];
var movieNames = favMovies.filter(function(item) {
    "use strict";
    return typeof item !== "number";
 });   
window.console.log(movieNames);


//STEP 14

//STEP 15

//STEP 16

//STEP 17