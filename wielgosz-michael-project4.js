// alert("JavaScript works!");

// Michael Wielgosz
// SDI 1402
// Project 4
// Library Functions

// Global Variables
var telephoneNumberReturn,
    emailAddressReturn,
    urlReturn,
    capitalizeStringReturn,
    stringReplacementReturn,
    numDecimalsReturn,
    fuzzyMatchReturn,
    timeDifferenceReturn,
    stringAsIntegerReturn,
    highestArrayNumberReturn,
    totalNumbersInArrayReturn,
    objectsByKeyReturn;

//String Functions


// Function to determine if String is in telephons number format: "123-456-789"
var isTelephoneNumber = function(strValue) {
    var patternCorrect = false,
    hyphen = "-",
    index = 0;

    index = strValue.indexOf(hyphen);

    if (index === 3) {
            index = strValue.lastIndexOf(hyphen);
            if (index === 7 && strValue.length === 12) {
                patternCorrect = true;
            };
    };

    return patternCorrect;
};

// Function to determine is String is in email address format: "email@address.com"
var isEmailAddress = function(strValue) {
    var patternCorrect = false;
    
    return patternCorrect;
};

// Function to determine if String is in URL format: "http://" or "https://" (Only compatible with Firefox)
var isURL = function(strValue) {

    if (strValue.startsWith("http://") || strValue.startsWith("https://")) {
        return true;
    };

    return false;
};

// Function to capitalize each word in String
var capitalizeString = function(strValue) {
    var finalString = "";
    
    return finalString;
};

// Function to replace String seperators: "a,b,c" "a/b/c"
var refactorStringWithReplacement = function(strValue, seperator, replacementSeperator) {
    var finalString = "";

    for(var i=0; i < strValue.length; i++) {
        if (strValue[i] === seperator) {
            finalString = finalString + replacementSeperator;
        } else {
            finalString = finalString + strValue[i];
        }
    }

    return finalString;
};


// Number Functions

// Function to return Float with X number of decimal places
var refactorNumberDecimals = function(numValue, numDecimals) {
    var returnFloat = 0.0;
    
    return returnFloat;
};

// Function to determine if first number is greater than second and if third is within the first and second
var percentageFuzzyMatch = function(firstNum, secondNum, thirdNum) {
    
};


// Function to get the difference in time and return values in hours or days
var getTimeDifference = function(firstData, secondData, hoursOrDays) {
    var returnTime = "";
    
    return returnTime;
};

// Function to return a String number as Number
var getStringAsInteger = function(strValue) {
    var isNumber = false,
        number = 0;
        
    return number;
};

// Array Functions

// Function to get the next largest number in an array as determined by the input
var getHighestArrayNumber = function(argArray, highestNum) {
    var returnNumber = 0;
    
    return returnNumber;
};

// Function to get the total number of Numbers in a given array
var getTotalNumbersInArray = function(argArray) {
    var totalNumbers = 0;
    
    return totalNumbers;
};

// Function to return the Objects in an array determined by a given key
var getObjectsByKey = function(objectAray, key) {
    var returnArray = [];

    return returnArray;
};


// Main Code

// isTelephoneNumber(strValue)
telephoneNumberReturn = isTelephoneNumber("123-456-7890");
console.log("Valid telephone number: " + telephoneNumberReturn);
telephoneNumberReturn = isTelephoneNumber("11-45454-349383-339");
console.log("Valid telephone number: " + telephoneNumberReturn);



// isURL(strValue)
urlReturn = isURL("http://google.com");
console.log("Valid URL: " + urlReturn);
urlReturn = isURL("https://fullsail.com");
console.log("Valid URL: " + urlReturn);
urlReturn = isURL("www.google");
console.log("Valid URL: " + urlReturn);



// refactorStringWithReplacement(strValue, initialSeperator, replacementSeperator)
stringReplacementReturn = refactorStringWithReplacement("soda,water,juice", ",", " ");
console.log(stringReplacementReturn);
stringReplacementReturn = refactorStringWithReplacement("insecets mammals fish bacteria", " ", "/");
console.log(stringReplacementReturn);