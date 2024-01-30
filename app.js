// var Country = 'Pakistan';
// var Continent = 'Asia';
// var Population = '250 millions'; 
// console.log(Country, Continent, Population);

// let Pakistan = true;
// let language;
// console.log(typeof Pakistan);
// console.log(typeof Population);
// console.log(typeof Country);
// console.log(typeof language);

// let Language = 'Pushto';
// console.log(language);

// let Population = 25000000;
// let splitIntoHalf = Population / 2;
// console.log(splitIntoHalf);
// Population++;
// console.log(Population);

// let description = 'Portugal is in Europe, and its 11 million people speak portuguese';
// let Description = `Portugal is in Europe, and its 11 million people speak portuguese`;

// let PakistanPopulation = 250000000;
// if (PakistanPopulation > 330000000) {
//     console.log('Purtagal population is above average');
// }
// else {
//     console.log('Purtagol population is 22 million below average')
// }

// let a = '9'-'5';
// console.log(a);

// let b = '19'-'13'+'17';
// console.log(b);

// let c = '19'-'13'+17;
// console.log(c);

// let d = '123'< 57;
// console.log(d);

// let e = 5+6+'4'+9-4-2;
// console.log(e);


// let numNeighbours = prompt('How many neighbour countries does your country have?');  
//     if (numNeighbours === 1) {
//     console.log('only 1 border'); } 
        
//     else if(numNeighbours > 1) {
//         console.log('more than one border');
//     }
//     else (numNeighbours <= 0); { 
//     console.log('No borders') 
//     }

let countryLanguage = prompt('Please enter your country language');
let countryPopulation = prompt('Please enter your country population');
let countryType = prompt('Please enter your country type');
if (countryLanguage = 'English' && countryPopulation < 50000000 && countryType != 'island') {
    console.log('You should live in purtagol')
}
    else {
        console.log('Purtagol does not meet your criteria');
    }

