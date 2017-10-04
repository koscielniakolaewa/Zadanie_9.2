var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
var newName1 = femaleNames.push('Monika');
var newName2 = maleNames.push('Marcin');
	if (allNames.indexOf(newName1) === -1) {
		var newName1 = allNames.push('Monika');
	}
	if (allNames.indexOf(newName2) === -1) {
		var newName2 = allNames.push('Marcin');
	}
console.log( allNames );