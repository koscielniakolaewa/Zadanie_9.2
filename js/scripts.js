var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
var newName1 = 'Monika';
var newName2 = 'Marcin';
	if (allNames.indexOf(newName1) === -1) {
		allNames.push(newName1);
	}
	if (allNames.indexOf(newName2) === -1) {
		allNames.push(newName2);
	}
console.log( allNames );