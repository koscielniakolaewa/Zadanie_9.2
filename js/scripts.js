var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
var newName1 = femaleNames.push('Monika');
var newName2 = maleNames.push('Marcin');
allNames.indexOf(newName1) === -1
allNames.indexOf(newName2) === -1
var newName1 = allNames.push('Monika');
var newName2 = allNames.push('Marcin');
console.log( allNames );