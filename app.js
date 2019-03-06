'use strict';

//Задание 1
let entryArr = [{x: 12, y: 13}, {x: 56, y: 45}, {x: 78, y: 54}];

function pointsToPolygon(entryArr) {
	let stringPoints = '';

	for (let i = 0; i < entryArr.length; i++) {
		stringPoints += ` ${entryArr[i].x},${entryArr[i].y}`;

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

function deleteDuplicate(arr) {

	let duplicatedNums = arr.filter((item, index, arr) => {
		return arr.indexOf(item) !== index;
	});
	let filteredArr = arr.filter((el) => {
		return duplicatedNums.indexOf(el) < 0;
	});

	console.log(`Duplicated nums are ${duplicatedNums}`);
	return filteredArr;
}

console.log(`Filtered array is ${deleteDuplicate(arrNum)}`);

// Задание 3
console.log(`\nTask 3`);

let originalString = 'Lorem ipsum \n dolor sit amet, consectetur adipisicing elit. Adipisci magni nemo quas? \n Aliquam, dolorum ea earum, excepturi nemo officia officiis placeat, \nporro quibusdam quis rem sint sunt unde vero voluptas!';

function refactorString(string) {

	if (originalString.indexOf('\n') > 0) {
		let arr = originalString.split('\n'),
			refactoringString = '';

		for (let i = 0; i < arr.length; i++) {
			arr[i] = arr[i].trim();
			if (i === 0) {
				refactoringString += `<h1>${arr[i]}</h1>`;
			} else {
				refactoringString += `<p>${arr[i]}</p>`;
			}
		}
		return refactoringString;
	} else {
		return 'Sorry, the string hasn`t the \\n';
	}
}

console.log(refactorString(originalString));
