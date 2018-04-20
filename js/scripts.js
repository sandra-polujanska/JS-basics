/ scripts

//PROMPT & ALERT

var name = prompt('Enter your name');
alert('Hello, ' + name);
console.log('Hello, ' + name);

//TRIANGLE FIELD

var a = 5;
var h = 3;
var triangleArea = a*h/2;


console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);

//CONDITIONAL STATEMENTS

var a = prompt('Wpisz pierwszą dowolną liczbę:');
var b = prompt('Wpisz drugą dowolną liczbę:');
var value = (a * a) - (2 * a * b) - (b * b);
console.log(value);

if (value>0) {
    console.log('Wynik dodatn')
} if (value<0) {
    console.log('Wynik ujemny')
} else {
    console.log('Zero')
}

//FUNCTIONS

function getTriangleArea(a, h) {
             
    if (a<0)
    return 'Nieprawidłowe dane';
    if (h<0)
    return 'Nieprawidłowe dane';    
    else
    return a*h/2;         
}
 
var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(12, 16);
var triangle3Area = getTriangleArea(8, 14);

console.log(getTriangleArea(10, 6));

//ARRAYS

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
    var x = allNames.push(newName);   
}

console.log(allNames);

//STRINGS

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var dinosaur = 'triceratops';

var dinosaurUpperCased = dinosaur.toUpperCase();

var textCharsAfter = text.replace('Velociraptor', dinosaurUpperCased);

var partOfText = textCharsAfter.slice(0,text.length/2);

console.log(partOfText);