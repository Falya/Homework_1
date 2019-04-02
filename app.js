'use strict';

//Задание 1
let entryArr = [{x: 12, y: 13}, {x: 56, y: 45}, {x: 78, y: 54}];

function pointsToPolygon(entryArr) {
	let stringPoints = '';

	for (let i = 0; i < entryArr.length; i++) {
		// stringPoints += ` ${entryArr[i].x},${entryArr[i].y}`;
		stringPoints += `${Object.values(entryArr[i])} `;

	}
	return stringPoints.trim();
}

let pol = document.querySelector('polygon');
pol.setAttribute('points', pointsToPolygon(entryArr));
console.log(`Task 1`);
console.log(`Points for polygon are ${pointsToPolygon(entryArr)}`);

// Задание 2
console.log(`\nTask 2`);

let arrNum = [],
	arrLength = Math.round(Math.random() * 100);

for (let i = 0; i < arrLength; i++) {
	arrNum.push(Math.round(Math.random() * 100));
}
console.log(`Original array is ${arrNum}`);
function	getUniqueNumbers (numbers) {
	let countInfo = {},
		results = [];
	for (let value of numbers) {
		if (countInfo.hasOwnProperty(value)) {
			countInfo[value]++;
		} else {
			countInfo[value] = 1;
		}
	}
	for (let [value, count] of Object.entries(countInfo)) {
		if (count === 1) {
			results.push(Number(value));
		}
	}
	return results;
}

console.log(`Filtered array is ${getUniqueNumbers(arrNum)}`);

// Задание 3
console.log(`\nTask 3`);

let originalString = 'Lorem ipsum \n dolor sit amet, consectetur adipisicing elit. Adipisci magni nemo quas? \n Aliquam, dolorum ea earum, excepturi nemo officia officiis placeat, \nporro quibusdam quis rem sint sunt unde vero voluptas!';

function trasformToHTML(text) {
	let strings = text.split('\n'),
		htmlStrings = new Array(strings.length);
	for (let i = 0; i < strings.length; i++) {
		htmlStrings[i] = i ? `<p>${strings[i]}</p>` : `<h1>${strings[i]}</h1>`
	}
	return htmlStrings.join('');
}

console.log(trasformToHTML(originalString));
