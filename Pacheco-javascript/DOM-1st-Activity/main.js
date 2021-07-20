 /*var myText = '             Welcome to Google!';
 let result = myText.trim();
 console.log(result);

var res = result.replace("Google", "Alphasys");
console.log(res);

let message = 'Hello Adventures, ';
var res1 = message.concat(res);
console.log(res1);*/

/*let title = 'How to coook rice without water';
let author = 'John';
let likes = 5;

let result = `The Blog ${title} created by ${author} has ${likes} likes`;

let html = `
        <h1>${title}</h1>
        <p>${author}</p>
        <p>${likes}</p>
`;
console.log(html);*/

/*let fruits = ['banana', 'coconut'];
let start = 1;
let deleteCount = 0;
fruits.splice(start, deleteCount, 'avocado', 'pineapple');
console.log(fruits);
fruits.splice(2, 1);
console.log(fruits);*/


/*for(let i=1; i <=10; i++){
    console.log('loop is ', i);
}

let names = ['theo', 'voldemort', 'weasley'];
let i = 0;

while(i < names.length){
    console.log('in loop', names[i]);
    i++;
}*/
/*
const scores = [50, 25, 0, 100, 20, 10];
for(let i=0; i < scores.length; i++){
    
    if(scores[i] === 0){
        continue;
    }
    console.log(scores[i]);

    if(scores[i] === 100){
        console.log('Congrats, you have reach the top score!');
        break;
    }
}


switch (new Date().getDay()) {
    case 6:
      console.log("Today is Saturday");
      break;
    case 0:
      console.log("Today is Sunday");
      break;
    default:
      console.log("Looking forward to the Weekend");
  }

const grade = 'D';

if ( grade === 'A'){
    console.log('you got an A');
}else if (grade === 'B') {
    console.log('you got a B');
}else if( grade === 'C'){
    console.log('you got C')
// }*/

/*
let highNum = [1, 2, 3, 4, 8, 6];
var maxLength = 0;
for (var i = 0, length = array.length; i < length; i++) {
    maxLength = Math.max(maxLength, array[i].length);
 };*/

 /*const array = [1, 2, 3, 4, 8, 6];
 const max = array[array.length-1]
 console.log(`Maximum: ${max}`)*/

/* var values = [10, 2, 3, 4, 8, 6];
 function extremeValue(array, maxmin) {
	if (maxmin === "Maximum") {
        return Math.max.apply(null, array);
 }
}
console.log(extremeValue(values, "Maximum"));*/
/*
let i = 0;

function findLargest (integers) {
  for (let x=0; x<integers.length; x++) {  
    if (integers[x] > i) {     
      i = integers[x];
    }
  }
  console.log(i);
}

findLargest([0, 25, 3, 4, 6, 8]);  

const input = [1, 2, 3];
const reverse = Array.from(input).reverse().join('');
console.log(reverse);*/

/*function reverse1(array){
    var output = [];
    for (var i = 1; i<= array.length; i++){
        output.push(array.pop());
    }

    return output;
}

console.log(reverse1([1, 2, 3]));*/
/*
var var1 = ['aaa', 'bbb', 'ccc', 'ddd'],
    var2 = ['ddd', 'eee', 'ccc'];
var results = [];

for(let i=0; i < var1.length; i++){
    for(let n=0; n < var2.length; n++){
        if(var1[i] == var2[n]){
            results.push(var2[n]);
    }
}
}
console.log(results);*/

/*function getMatch(a, b) {
    var matches = [];

    for ( var i = 0; i < a.length; i++ ) {
        for ( var e = 0; e < b.length; e++ ) {
            if ( a[i] === b[e] ) matches.push( a[i] );
        }
    }
    console.log(matches);
}*/

//getMatch(var1, var2);



//practice arrow function

/*let greet = () => {
    return 'hello world';
};
console.log(greet());
greet();*/


/*let bill = (products, tax) =>{
    let total = 0;
    for(let i=0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}
//let products = [50, 50];
//let tax = 0.2;
console.log(bill([300, 300], 0.2));*/



/*let interestRate = (originalValue, finalValue) => {
    finalValue = (finalValue / originalValue) *100;
    return finalValue;
}
let originalValue = 400;
let finalValue = 500;
let total = (originalValue, finalValue);
console.log(interestRate[500],400);*/


/*function getPercentageChange(oldNumber, newNumber){
    var decreaseValue = newNumber - oldNumber;

    return (decreaseValue / oldNumber) * 100;
}


console.log(getPercentageChange(400, 500) + '%');*/





//TASK-2




/*function detect_data_type(value)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
}
console.log(detect_data_type('text'));
console.log(detect_data_type(['123', 'john']));
console.log(detect_data_type(true));*/


/*function predictMyFuture(name, years, futureJob, kids){
    console.log(`My name is ${name} and in ${years} I will become ${futureJob} with ${futureJob} ${kids}.`)
};

predictMyFuture('Harry')*/

/*

function predictMyFuture(name = 'Weasley', years = '21', futureJob = 'mage', kids = '2'){
   return 'My name is ' + name + ' and in ' + years + ' years I will become ' + futureJob + ' with ' + kids;
}
let info = predictMyFuture();
console.log(info);

function timeOftheDay(date1){
switch (date1) {
    case 'today':
      return "The date is April 27, 2021";
      break;
    case 'yesterday':
        return "The date is April 26, 2021";
      break;
    case 'tomorrow':
        return "The date is April 28, 2021";
        break;
   default:
      return "The date is outdated";
  }
}
var result = timeOftheDay('dfgdfgdsfg');
console.log(result);




/*function getIndex (arr){
    let arr = ['aaa', 'bbb', 'name', 'ccc'];
    return arr;
}
var result1 = getIndex()*/

/*const letters = [
    {
      letter: 'aaa',
    },
    {
      letter: 'bbb',
    },
    {
      letter: 'name',
    },
    {
        letter: 'ccc',
      },
  ]
  
  const index = (element, index) => {
      let result1;
      let letter = ['aaa', 'bbb', 'name', 'ccc'];
    if (element.letter === 'aaa') {
      result1 = 'found at index 0';
    } 
    else if (element.letter === 'bbb'){
        result1 = 'found at index 1';
    }
    else if (element.letter === 'name'){
        result1 = 'found at index 2';
    } 
    else if (element.letter === 'ccc'){
        result1 = 'found at index 3';
    }
    else {
        result1 = 'Not found index';
    }
    return result1;
  }

  console.log(index('ccc'));*/

  /*

  function findAllIndex(array, element) {
    indices = [];
    let currentIndex = array.indexOf(element);
    while (currentIndex != -1) {
      indices.push(currentIndex);
      currentIndex = array.indexOf(element, currentIndex + 1);
    }
    return indices;
  }
  
  let letter = ['aaa', 'bbb', 'name', 'ccc', 'junjun'];
  
  let index1 = findAllIndex(letter, 'aaa');
  console.log(`Name found at index ${index1}`); 
  
  let index2 = findAllIndex(letter, 'bbb');
  console.log(`Name found at index ${index2}`);
  
 let index3 = findAllIndex(letter, 'name');
 console.log(`Name found at index ${index3}`);

  let index4 = findAllIndex(letter, 'ccc');
  console.log(`Name found at index ${index4}`);
  
  let index5 = findAllIndex(letter, 'junjun');
  console.log(`Name found at index ${index5}`);


const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
console.log(countOccurrences(['aaa', 'bbb', 'test', '10', 'ccc', 'test', 'test'], 'test'));



function findYourname(name){
    let names = ['ryu', 'john', 'liz', 'cayde', 'aaa'];
    for(let i = 0; i < names.length; i++){
        if (name == names[i]){
            return 1;
        }
    }
    return 'not found';
}

function duplicateCount(text){
    let names = ['aaa', 'bbb', '10', 'test', 'ccc', 'test', 'test', 'happy'];
    let count = 0;
    for(let i = 0; i <names.length; i++){
        if( text != names[i]){
            count += 1;

        }
    }
    return count;
}
console.log(duplicateCount('test'));



function primeNumber(number){
    
    if (number % 2 || number == 0){
       return 'prime number';
    } else {
       return 'not a prime number';
    }
}
console.log(primeNumber('7'));

/*function is_prime (n) {
    if (n < 3) return n > 1;
    else if (n % 2 === 0 || n % 3 === 0) return 'not a prime';
    else if (n < 25) return 'prime number';
    let i = 5;
    while (i * i <= n ) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }
console.log(is_prime('8'));*/

/*
function divisiblebyThree(number1){
    
    if (number1 % 3 === 0){
       return 'divisible by 3';
    } else {
       return 'not divisible by 3';
    }
}
console.log(divisiblebyThree('3'));*/


/*let getPrimeNumbers = (num) => {
    let evencount = 0;
    let oddcount = 0;
  
    for (let i = 0; i < arr_size; i++) {

      if (arr[i] & 1 == 1){
        oddcount++;
      } else{
        evencount++;
    }
  }
}
console.log(getPrimeNumbers('The even numbers are: ', evencount));*/


/*
let count = 0;
let count1 = 0;

function odd(list)
{
    let c = 0;
    let arr = [ 3, 4, 5]; 

  for (let j =0; j < arr.length; j++)
  {
    if (arr[j] % 2 == 0){
        count += 1;
    } 
     }
     if(count > 1){
        return 'The total number of even are: ' + count;
     }else{
        return 'The total number of even is: ' + count;
     }
     
 }
 console.log(even(count));


function even(li)
{
    let arr= [ 3, 4, 5]; 

  for (let j =0; j < arr.length; j++)
  {
    if (arr[j] % 2 == 1 ){
        count1 += 1;
    } 
     }
     if(count1 > 1){
        return 'The total number of primary are: ' + count1;
     }else{
        return 'The total number of primary is: ' + count1;
     }
     
 }
 console.log(even(count1));*/

 //Call back function

 /*
 function myFunc(callbackFunc){
        let value = 50;
        callbackFunc(value);
 }

 myFunc( param => {
     console.log(param);
 });

 /*let names = ['john', 'jomar', 'liz'];

 names.forEach( (person, index)  => {
    console.log(index, person);
 };*/


 /*var fruits = ['apple', 'orange', 'cherry'];

 let html = "";

 let createTemplate = (item) => {
    html += `
    <p>${item}</p>
    `
 }
 fruits.forEach(createTemplate);
 console.log(html);*/
/*
 let numbers = [1, 2, 3, 4, 5];
 //total = numbers.length;

 for(let h = 0; h < total; h++){
     //console.log(numbers[i]);
 }*/

 /*let numbers = [1, 2, 3, 4, 5, 6];
 let total = 0;
 numbers.forEach( function(item){
        if( item % 2 === 0) {
        total += item;
     }

 });
 console.log(total);*/


//objects

/*let users = {
    name: 'Ryu',
    age: 30,
    email: 'ryu@gmail.com',
    location: 'Philippines',
    blogs: ['How to cook rice without water', 'best reads of 2021']
};

console.log(users['name']);*/


let human = {
    name: 'Hi! My name is Merraylen Pacheco.',
    age: 23,
    email: 'pikachu.972011@gmail.com',
    tvShows: 'Big Bang Theory',
    colors: 'My favorite color is nude.',
    hobbies: [
            {type: 'cooking', desc: 'asdfghjkl'} , 
            {type: 'baking', desc: 'asdfghjkl'}, 
            {type: 'coding', desc: 'asdfghjkl'}
],
    welcomePage: function(){
        console.log('Hello, human! Welcome to my page!');
    },
    endPage: function(){
        console.log('Goodbye! See you next time!')
    },
    conCAt: function(){
        this.hobbies.forEach(function (item){
            console.log(item);
        })
    },
    addHobbies: function(chores){
            this.hobbies.push(chores);
            console.log(this.hobbies);
    },
    removeHobbies: function(){
        let clear = "";
        this.hobbies = clear;
        console.log(this.hobbies);
    },
    updateShows: function(param1){
        var param1 = this.tvShows.replace(this.tvShows, item);
       this.type=param1;
       console.log(this.param1);
    }
};

//human.age=30;
//human.hobbies[0]='cooking';


/*human.welcomePage();
console.log(human.name);
console.log(human.colors);
human.endPage();*/
//console.log(human);
//human.conCAt();
human.addHobbies({type: 'reading', desc: 'asdfghjkl'});
//console.log(addHobbies());
//human.removeHobbies();
//console.log(human.updateShows('SpongeBob'));

//console.log(human.hobbies);


//Math Object

// const area = 7.4

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));


// //random number


// const number = Math.random()
// console.log(number);
// console.log(Math.round(number));
// console.log(Math.round(number)*10);

//primitive types

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//reference types

userOne = { name: 'John', age: '30'};
userTwo = userOne;

console.log(userOne, userTwo);

