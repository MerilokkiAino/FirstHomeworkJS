/* 1 Zadatak
Using if..else, write the code which gets a number via prompt and then shows in alert: 
•	1, if the value is greater than zero, 
•	-1, if less than zero, 
•	0, if equals zero. 
 */

let number = prompt('Type some number');

if (number > 0) {
	alert(1);
} else if (number < 0) {
	alert(-1);
} else {
	alert(0);
}

/* 2. Zadatak
Using if..else, write the code which gets a number via prompt and then shows in alert: 
•	1-3, if the value is greater than zero but less then 3 
•	3-5, if value is greater then 3 but less then 5 
•	5-7 if value is qreater then 5   */

let numerical = prompt('Type a number');
if (numerical > 0 && numerical <= 3) {
	alert('1-3');
} else if (numerical > 3 && numerical <= 5) {
	alert('3-5');
} else if (numerical > 5) {
	alert('5-7');
}

/* 3. Zadatak
Rewrite a code using tenerary operators 
let result; 
let a = 1; 
let b = 2; 
 
if (a + b < 5) { 
  result = 'Below'; 
} else { 
  result = 'Over'; 
} 
*/

let a = 1;
let b = 2;
let result = a + b < 5 ? 'Below' : 'Over';
alert(result);

// 4. Want to find out how old you'll be? Calculate it!

let myBirthYear = 1984;
let futureYear = prompt('Write any year in the future');
let newYear = futureYear - myBirthYear;
if (newYear != null) {
	alert(`I will be ${newYear} in ${futureYear}`);
}

/*5. Zadatak
Give user the info!
•	Write a javascript program that will ask user 3 questions in order
•	What is your age?
•	What is your name?
•	what do you do for a living?
•	After the user has given all the answers, alert the user that Username is {name answer from your user} age is {age answer from user} and he is doing {work answer from user) */

let age = prompt('What is your age?');
let yourName = prompt('What is your name?');
let yourJob = prompt('what do you do for a living?');
alert(`Username is ${yourName} age is ${age} you are doing as a ${yourJob}`);

// Strings
// 1. Given the user input make all letters uppersase.
let writeSmth = prompt(
	'Write something and i will write it back in uppercases'
);
alert(writeSmth.toUpperCase());

// 2. Given the user inptu make all letters in lowercase format.
let makeSmall = prompt('Write as you wish I will return it in small letters');
alert(makeSmall.toLowerCase());

// 3. Given the user input make every first letter of new word capitilized.
let firstCapital = prompt('I will rivwrite every word in capital');
let wordCapital = firstCapital.split(' ');
for (let i = 0; i < wordCapital.length; i++) {
	wordCapital[i] =
		wordCapital[i].charAt(0).toUpperCase() + wordCapital[i].slice(0);
}
let str = wordCapital.join(' ');
alert(wordCapital);

// 4. Find a longest word

let longestWord = prompt('Enter sentence longer than 5 words');
longestWord = longestWord.match(/[a-zA-Z0-9]+/gi);
let longest = '';
for (let i = 0; i < longestWord.length; i++) {
	if (longestWord[i].length > longest.length) {
		longest = longestWord[i];
	}
}
alert(longest);

// 5. Given the user input reverse it.

let reverseInput = prompt('Please write anything and i will reverse it');
let newInput = reverseInput.split('').reverse().join('');
alert(newInput);

// Loops
// 1. Log in console the numbers from 0 to 15 using for loop
for (let i = 0; i < 15; i++) {
	console.log(i);
}

// 2. Print the numbers from 12 to 24 using while loop

let i = 12;
let m = 24;
while (i <= m) {
	console.log(i);
	i++;
}

// 3. Log in console the ODD numbers from numDaysInMonth array
// 4. Log in console  the EVEN numbers from 10 to -20
for (let i = -20; i <= 10; i++) {
	if (i % 2 == 0) {
		alert(i);
	}
}

// 5. Log in console all the elements of the daysInWeek   array
let daysInWeek = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
];
for (let i = 0; i < daysInWeek.length; i++) {
	console.log(daysInWeek[i]);
}

// 6. Calculate the sum of all the numbers in the numDaysInMonth array and log it in console

const numDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let sum = 0;
for (let i = 0; i < numDaysInMonth.length; i++) {
	sum += numDaysInMonth[i];
}
console.log(sum);

// 7. Find in super hero object list s how many super heroes have power level higher than  90

const superheroes = [
	{
		name: 'Bruce Wayne',
		alias: 'Batman',
		powerLevel: 50,
	},
	{
		name: 'Wade Wilson',
		alias: 'Deadpool',
		powerLevel: 90,
	},
	{
		name: 'Peter Parker',
		alias: 'Spiderman',
		powerLevel: 70,
	},
	{
		name: 'Kristin Wells',
		alias: 'Superwoman',
		powerLevel: 99,
	},
	{
		name: 'Barry Allen',
		alias: 'The Flash',
		powerLevel: 80,
	},
	{
		name: 'Diana Prince',
		alias: 'Wonder Woman',
		powerLevel: 90,
	},
	{
		name: 'Ororo Munroe',
		alias: 'Storm',
		powerLevel: 85,
	},
	{
		name: 'Helen Parr',
		alias: 'Elastigirl',
		powerLevel: 70,
	},
];
let powerHero = 0;

for (let hero in superheroes) {
	if (superheroes[hero].powerLevel > 90) {
		powerHero++;
	}
}

alert(`Number of heroes with power above 90 is ${powerHero}`);

// 8. Write javascript program to check what day of the week is today.

const dayOfWeekName = new Date().toLocaleString('default', { weekday: 'long' });
console.log(dayOfWeekName);

// 9. Find and log in console how many letters “e” are in the next quote:
// quote = “There are times in life when people must know when not to let go. Balloons are designed to teach small children this.”

'There are times in life when people must know when not to let go. Balloons are designed to teach small children this'.split(
	'e'
).length - 1;
