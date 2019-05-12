/*
The return value should:
start with an octothorpe (#)
have the first letter of each word capitalized
be false if the final result is longer than 140 chars
be false if the input or the result is an empty string 
*/

class Hashtag {

    constructor(x) {
        this.x = x;
    }

    generate() {
        if (this.x == "") {
            return false;
        }
        var emptyStringCount = 0;
        for (var i = 0; i < this.x.length; i++) {
            if (this.x.charAt(i) == ' ') {
                emptyStringCount = emptyStringCount + 1;
            };
        }
        if (emptyStringCount == this.x.length) {
            return false;
        }
        var stringWithoutSpaces = "";
        for (var i = 0; i < this.x.length; i++) {
            if (this.x.charAt(i) != ' ') {
                if (this.x.charAt(i - 1) != ' ') {
                    stringWithoutSpaces = stringWithoutSpaces + this.x.charAt(i);
                } else {
                    stringWithoutSpaces = stringWithoutSpaces + this.x.charAt(i).toUpperCase();
                }
            };
        }
        return "#" + stringWithoutSpaces
    }
}

module.exports = {
    Hashtag
}

// THESE are the Test Inputs 

// Output 1 - Should Return false when there is an empty string
const testingEmptyStrings = new Hashtag('').generate();
console.log('Ouput 1 Should Be false --> ', testingEmptyStrings);

// Output 2 - Should Return false when there is a long empty string
let input = " ".repeat(200);
const testingLongStrings = new Hashtag(input).generate();
console.log('Ouput 2 Should Be false --> ', testingLongStrings);

// Output 3 - Should Return the input with a octothorpe at the beginging
const testingSingleWord = new Hashtag('Depot').generate();
console.log('Ouput 3 Should Be #Depot --> ', testingSingleWord);

// Output 4 - Should Return a octothorpe at the beginging of words with a sentance
const testingOctothorpe = new Hashtag('Do We Have A    Hashtag').generate();
console.log('Ouput 4 Should Be # --> ', testingOctothorpe[0]);

// Output 5 - Should Return a input without spaces
const testingRemovalOfSpaces = new Hashtag('Please Get Rid Of These Spaces').generate();
function hasWhiteSpace() {
    return testingRemovalOfSpaces.indexOf(' ') >= 0;
}
console.log('Ouput 5 Should Be false (Does not have spaces) --> ', hasWhiteSpace());

// Output 6 - Should Return the beginning of each word with a capital letter
const testingCapitalLetters = new Hashtag('Please have Some Capital Letters').generate();
console.log('Ouput 6 Should Be #PleaseHaveSomeCapitalLetters --> ', testingCapitalLetters);

// EXTRA 
/*
// Output 7 - Should Capitalise the first word if there are no leading spaces
input = "home" + " ".repeat(140) + "depot";
const testingCapitalFirstWord = new Hashtag(input).generate();
console.log('Ouput 7 Should Be #HomeDepot --> ', testingCapitalFirstWord);

// Output 8 - Should Return false if the input is longer than 140 Characters
input = "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat";
const testingCharacterLength = new Hashtag(input).generate();
console.log('Ouput 8 Should Be false --> ', testingCharacterLength);

// Output 9 - Should Return an ouput if the input is equal to 140 Characters
input = "a".repeat(139);
const testingShouldHaveOutput = new Hashtag(input).generate();
console.log('Ouput 9 Should Be #Aa(x138) --> ', testingShouldHaveOutput);
*/
