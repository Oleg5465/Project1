"use strict";

// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//   while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//   }
// }
// start();

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// function rememberMyFilms() {
//   for (i = 0; i < 2; i++) {
//     const a = prompt("Один із останніх фільмів який ти бачив?", "").trim(); //- прибирає пробіли
//     const b = prompt("На скільки оціниш його?", "");

//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log("Done");
//     } else {
//       console.log("error");
//       i--;
//     }
//   }
// }
// rememberMyFilms();

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
//   } else if (personalMovieDB >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы класный зритель");
//   } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
//   } else {
//     console.log("Произошла ошибка");
//   }
// }
// detectPersonalLevel;

// function showMyDB () {
//     if (personalMovieDB.privat === false) {
//         console.log(personalMovieDB);
//     }
// }
// // showMyDB(personalMovieDB.privat);

// function writeYourGenres () {
//     for (let i = 1; i < 4; i++) {
//         personalMovieDB.genres [i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }
// writeYourGenres();

// МЕТОДЫ И СВОЙСТВА СТРОК И ЧИСЕЛ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let room = "1млрд"; - запис міліарда скорочено
// let room = "7.3млрд" - 7 міліардів 300 міліонів
// console.log(room);

// const arr = "test";
// console.log(arr.toUpperCase()); - зміна регістру на верхній
// console.log(arr.toLowerCase()); - зміна регістру на нижній
// console.log(arr);

// const fruit = "Some Fruit";
// console.log(fruit.indexOf("Fruit")); //- дізнаємось з якого індексу починається слово Fruit

// const logg = "Hello world";
// console.log(logg.slice(6, 10)); //- вирізаємо строку по індексу і мінус один

// const num = 12.3;
// console.log(Math.round(num)); - округляємо чисто до найближчого цілого

// const test = "12.2";
// console.log(parseInt(test)); - перетворює із строки в число та округлює
// console.log(parseFloat(test)); - перетворює із строки в число та не округлює

// КОЛБЕК ФУНКЦІЇ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function learnJS(lang, callback) {
//   console.log(`Я вчу: ${lang}`); - це функція яка починає свою роботу після закінчення роботи попередньої
//   callback();
// }
// learnJS("JavaScript", function() {
//   console.log("Я все зрозумів!!!");
// });
// Колбек функція

// Деструктуризація об*єктів!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const options = {
//   name: "test",
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: "black",
//     bg: "red"
//   }
// };
// const {border, bg} = options.colors;//- один з прийомів деструктуризації, оптимальний варіант
// console.log(bg);
// console.log(Object.keys(options).length); //- показує яку кількість елементів містить в собі options
// delete options.name;// - видалення частини з об*єкту
//         //  Тут ми перебираємо об*єкт options
// for (let key in options) {
//   if (typeof(options[key]) === "object") {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key] [i]}`);
//     }
//   } else {
//        console.log(`Свойство ${key} имеет значение ${options[key]}`);
//   };
// };
// let currAuto = {
//   colors: "black",
//   weight: 1500,
//   power: 1333
// };

// const {weight, power} = currAuto;
// console.log(weight);

//  Масиви і псевдомасиви!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const arr = [2, 4, 6, 8];
// arr.pop(); //- видаляє останній елемент цього масиву, не забуваємо console.log(arr);
// arr.push(10); //- добавляє елемент в кінець масиву, в нашому випадку добавлено 10
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
// console.log(arr[i]); //- варіант з перебору масива
// };
// for (let value of arr) {
//   console.log(value);// - ще один варіант перебору масива
// };
// console.log(arr.length);//- свойство length состоит из последнего иднекса +1
// arr [99] = 0;
// console.log(arr);

// const arr = [2, 4, 6, 8, 10];
// arr.forEach(function(item, i, arr) { //- метод forEach дозвол.перебрати масив і щось добавити як у нашому випадку
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt("", "");
// const products = str.split(", ");
// console.log(products);

// const arr = [2, 13, 26, 8, 10];
// arr.sort(compareNum); //- метод sort відсортовує масив в порядку зростання, а строку в алфв.порядку
// console.log(arr);

// function compareNum (a, b) {
//   return a - b;
// };

// //Передача по ссилці або по значенню оператор(ES6-ES9)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let a = 5;
// let b = a;
// b = b + 5; // тут ми передали значення
// console.log(a);
// console.log(b);// так працює тільки з примітивними типами даних: строки, числа

//     //ускладнимо задачу
// const obj = {
//   a: 5,
//   b: 1
// };
// const copy = obj;// тут ми передали ссилку, яку змінили, це і назив.передача по ссилці
// copy.a = 10;
// console.log(obj);// а так працює тільки з об*єктами, масивами, функціями.

//зараз ми створ.копію об*єкту за допом.циклу
// function copy(mainObj) {
//   let objCopy = {}; // тут ми створ.копію
//   for (let key in mainObj) {  // запускаємо перебираючу кнструкцію for in
//     objCopy[key] = mainObj[key]; // зробили копію з головного об*єкту, та помістили знач.key
//   }
//   return objCopy; // вертаємо його на зовні, щоб далі з ним працювати
// };
// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4,
//   };
// };
// const nemNumbers = copy(numbers); // тут ми створ.копію об*єкту(клонували)
// nemNumbers.a = 10;
// nemNumbers.c.x = 10; // тут ми створ.глибоку копію, і вона передастся по ссилці, тобто змінить і оригінал
// console.log(nemNumbers);
// console.log(numbers);
// //так ми створ.поверхносну копію об*єкту.

// //зараз створ.копію за допом Object.assing та об*єднаємо 2 об*єкти numbers i add
// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4,
//   }
// };
// const add = {
//   d: 17,
//   e: 20,
// };
// console.log(Object.assign(numbers, add)); // тут ми об*єднуємо об*єкти numbers та add. в консолі numbers - означає, що ми в нього поміщаємо об*єкт add

//      //зараз створ.ще один варіант копії об*єкту
// const add = {
//   d: 16,
//   e: 23
// };
// const clone = Object.assign({}, add); // тут обєднуємо пустий об*єкт {} з об*єктом add
// clone["d"] = 20;
// console.log(add);
// console.log(clone);

// //зараз створ.копію масиву за допом.методу slice
// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice(); //створ.копію newArray, і в середину поклали значення масиву oldArray за допом slice
// newArray[1] = "aassddd";// змінили значення за індексом масиву
// console.log(newArray);
// console.log(oldArray);

      //зараз створ.копію масиву за допом.оператора розвороту sprete
// const video = ["youtube", "rutube", "vimeo"];
// const blogs = ["word", "paint", "insta"];
// const internet = [...video, ...blogs, "facebook", "tiktok"];// тут ми поклали в масив internet значення масивів video та blogs за допом.трьох крапок і добавили своє facebook та tiktok.
// console.log(internet);  

//       //ще один складніший варіант перебору масива за допом.оператора розвороту sprete
// function showFamily(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// };
// const num = [2, 5, 7]; // дані 2,5,7 прийшли з серверу, нам треба передати їх у функцію log
// showFamily(...num);//за доп.трьох крапок ми розвернули передали у функцію log три окремих аргумента num

//       //ще один складніший варіант перебору масива за допом.оператора розвороту sprete
// const array = ["a", "b"];
// const newArray = [...array];// тут ми поклали значення масиву array, в масив newArrey
// console.log(newArray);

      //ще один складніший варіант перебору вже об*єкту за допом.оператора розвороту sprete
// const q = {
//   one: 1,
//   two: 2
// };
// const newObj = {...q};
// console.log(q);

const arr = [];

arr[0] = +prompt("Сколько вам лет?", "");
arr[1] = prompt("ОККО гавно?","");
arr[2] = prompt("Я стану програмістом?");
console.log(typeof(arr));
