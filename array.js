// pegar este array
let films = [
  "star wars",
  "totoro",
  "rocky",
  "pulp fiction",
  "la vida es bella",
];

// solución punto 1
console.log(" el segundo elemento del array es: " + films[1]);

// ***********************************
// **            punto 2            **
// ***********************************

console.log("----------- punto 2 ------------");
/* const arrayToUpperCase = function (array) {
  let newArray = [];
  newArray[0] = array[0].toUpperCase();
  newArray[1] = array[1].toUpperCase();
  newArray[2] = array[2].toUpperCase();
  newArray[3] = array[3].toUpperCase();
  newArray[4] = array[4].toUpperCase();
  return newArray;
};
 */

const arrayToUpperCase = function (array, index) {
  allFilms[index] = array[index].toUpperCase();
};

console.log(films);
let allFilms = [];
arrayToUpperCase(films, 0);
arrayToUpperCase(films, 1);
arrayToUpperCase(films, 2);
arrayToUpperCase(films, 3);
arrayToUpperCase(films, 4);
console.log(allFilms);

// ***********************************
// **           punto 3             **
// ***********************************

console.log("----------- punto 3 ------------");
let cartoons = [
  "toy story",
  "finding Nemo",
  "kung-fu panda",
  "wally",
  "fortnite",
];

//paso array y valor que quiero agregar
function pushItem(array, value) {
  array[array.length] = value;
}

//paso array de origen e índice de elemento de origen
const addMoreFilms = function (array, index) {
  films[films.length] = array[index];
};

pushItem(films, cartoons[0]);
pushItem(films, cartoons[1]);
addMoreFilms(cartoons, 2);
addMoreFilms(cartoons, 3);

// ahhhhhhhh existe .push() <------------------
films.push(cartoons[4]);

allFilms = [];
arrayToUpperCase(films, 0);
arrayToUpperCase(films, 1);
arrayToUpperCase(films, 2);
arrayToUpperCase(films, 3);
arrayToUpperCase(films, 4);
arrayToUpperCase(films, 5);
arrayToUpperCase(films, 6);
arrayToUpperCase(films, 7);
arrayToUpperCase(films, 8);
arrayToUpperCase(films, 9);
console.log(films);
console.log(allFilms);

// ***********************************
// **          punto 4              **
// ***********************************

console.log("----------- punto 4 ------------");
cartoons.pop();
films.pop();
films.pop();
films.pop();
films.pop();
films.pop();
films.push(cartoons[0]);
films.push(cartoons[1]);
films.push(cartoons[2]);
films.push(cartoons[3]);
//films = arrayToUpperCase(films);

console.log(films);

// ***********************************
// **     punto 5 manera 1          **
// ***********************************

console.log("----------- punto 5 ------------");
const asiaScore = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScore = [8, 10, 6, 9, 10, 6, 6, 8];

const areEquals = (arr1, arr2) => {
  let areEquals = 0;
  for (let index = 0; index < arr1.length; index++) {
    if (arr2[index] === arr1[index]) {
      areEquals++;
    }
  }
  return areEquals === arr1.length;
};

console.log(areEquals(asiaScore, euroScore));

//punto 5 manera 2

console.log(asiaScore.toString() === euroScore.toString());

// forma incorrecta
console.log(asiaScore === euroScore);
