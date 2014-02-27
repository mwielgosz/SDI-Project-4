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
    refactorNumberDecimals,
    percentageFuzzyMatchReturn,
    timeDifferenceReturn,
    stringAsNumberReturn,
    nextHighestArrayNumberReturn,
    totalNumbersInArrayReturn,
    objectsByKeyReturn;

// String Functions


// Function to determine if String is in telephons number format: "123-456-789"
var isTelephoneNumber = function(strValue) {
    var hyphen = "-",
        index = strValue.indexOf(hyphen);

    if (index === 3) {
        index = strValue.lastIndexOf(hyphen);

        if (index === 7 && strValue.length === 12) {
            return true;
        }
    }

    return false;
};

// Function to determine is String is in email address format: "email@address.com"
var isEmailAddress = function(strValue) {
    var atIndex = strValue.indexOf("@", 1),
        dotIndex = strValue.lastIndexOf(".");

    if (atIndex != -1 && dotIndex != -1) {
        if (atIndex < (dotIndex -1) && (dotIndex + 1) < strValue.length) {
            return true;
        }
    }
    return false;
};

// Function to determine if String is in URL format: "http://" or "https://"
var isURL = function(strValue) {

    if (strValue.substring(0, 7) === "http://" || strValue.substring(0, 8) === "https://") {
        return true;
    }

    return false;
};

// Function to capitalize each word in String
var capitalizeString = function(strValue) {     // MAKEUP: nested loops, deliverable 3
    var finalString = "",
        wordArray = strValue.split(" "),
        letterArray = [];

    for (var i=0; i < wordArray.length; i++) {
        // Split word into array, each index containing a single letter
        letterArray = wordArray[i].split("");

        for (var i2=0; i2 < letterArray.length; i2++){
            if (i2 === 0) {
                // If first letter of word, capitalize letter
                letterArray[i2] = letterArray[i2].charAt(0).toUpperCase();
            }

            // Rebuild word by adding each letter to string
            finalString += letterArray[i2];
        }

        // If not last word, add space at end of each word
        if (i < (wordArray.length -1)) {
            finalString += " ";
        }
    }
    return finalString;
};

// Function to replace String seperators: "a,b,c" "a/b/c"
var refactorStringWithReplacement = function(strValue, seperator, replacementSeperator) {   // MAKEUP: missing "var" on loop iterator, deliverable 2
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

    numValue = numValue.toFixed(numDecimals);

    return numValue;
};

// Function to determine if first number is greater than second and if third is within the first and second
var percentageFuzzyMatch = function(firstNum, secondNum, percentage) {
    var comparisonString = "",
        comparison = secondNum * (percentage / 100);

    if (firstNum > secondNum) {
        comparisonString = firstNum + " is greater than " + secondNum;
    } else if (firstNum < secondNum) {
        comparisonString = firstNum + " is less than " + secondNum;
    } else {
        comparisonString = firstNum + " is equal to " + secondNum;
    }

    if (firstNum <= comparison) {
        comparisonString += " and is within "+ percentage + "% of " + secondNum + ", which is " + comparison;
    } else {
        comparisonString += " and is not within "+ percentage + "% of " + secondNum + ", which is " + comparison;
    }

    return comparisonString;
};


// Function to get the difference in time and return values in hours or days
var getTimeDifference = function(firstData, secondData, hoursOrDays) {
    var returnTime = "";
    
    return returnTime;
};

// Function to return a String number as Number
var getStringAsNumber = function(strValue) {
    var number = parseFloat(strValue);

        if (isNaN(number)) {
            number = strValue + " is not a valid number";
        }

    return number;
};

// Array Functions

// Function to get the next largest number in an array as determined by the input
var getNextHighestArrayNumber = function(argArray, highestNum) {
    var returnNumber = -1;

    for(var i=0; i < argArray.length; i++) {
        if (argArray[i] > highestNum) {
            returnNumber = argArray[i];
            break;
        }
    }

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
console.log("isTelephoneNumber Function:");
telephoneNumberReturn = isTelephoneNumber("123-456-7890");
console.log("Valid telephone number: " + telephoneNumberReturn);
telephoneNumberReturn = isTelephoneNumber("11-45454-349383-339");
console.log("Valid telephone number: " + telephoneNumberReturn);

//isEmailAddress(strValue)
console.log("\nisEmailAddress Function:");
emailAddressReturn = isEmailAddress("email@address.com");
console.log("Valid email address: " + emailAddressReturn);
emailAddressReturn = isEmailAddress("email@addresscom");
console.log("Valid email address: " + emailAddressReturn);

// isURL(strValue)
console.log("\nisURL Function:");
urlReturn = isURL("http://google.com");
console.log("Valid URL: " + urlReturn);
urlReturn = isURL("https://fullsail.com");
console.log("Valid URL: " + urlReturn);
urlReturn = isURL("www.google");
console.log("Valid URL: " + urlReturn);

// toUpperCase(strValue)
console.log("\ntoUpperCase Function:");
capitalizeStringReturn = capitalizeString("full sail university");
console.log("String Capitalized: " + capitalizeStringReturn)

// refactorStringWithReplacement(strValue, initialSeperator, replacementSeperator)
console.log("\nstringReplacementReturn Function:");
stringReplacementReturn = refactorStringWithReplacement("Refactored with replacement: " + "soda,water,juice", ",", " ");
console.log(stringReplacementReturn);
stringReplacementReturn = refactorStringWithReplacement("Refactored with replacement: " + "insecets mammals fish bacteria", " ", "/");
console.log(stringReplacementReturn);

// refactorNumberDecimals(numValue, numDecimals)
console.log("\nrefactorNumberDecimals Function:");
refactorNumberDecimalsReturn = refactorNumberDecimals(1.23456789, 3);
console.log("Refactored decimal number: " + refactorNumberDecimalsReturn);

// percentageFuzzyMatch(firstNum, secondNum, percentage)
console.log("\npercentageFuzzyMatch Function:");
percentageFuzzyMatchReturn = percentageFuzzyMatch(5, 10, 50);
console.log(percentageFuzzyMatchReturn);
percentageFuzzyMatchReturn = percentageFuzzyMatch(488, 245, 200);
console.log(percentageFuzzyMatchReturn);
percentageFuzzyMatchReturn = percentageFuzzyMatch(50, 50, 25);
console.log(percentageFuzzyMatchReturn);

// getStringAsNumber(strValue) Function
console.log("\ngetStringAsNUmber Function:");
stringAsNumberReturn = getStringAsNumber("12.34");
console.log("The returned number is: " + stringAsNumberReturn);
stringAsNumberReturn = getStringAsNumber("Full Sail University");
console.log("The returned number is: " + stringAsNumberReturn);

// getNextHighestArrayNumber(argArray, highestNum)
console.log("\ngetNextHighestArrayNumber Function:");
nextHighestArrayNumberReturn = getNextHighestArrayNumber([0, 2, 4, 7, 9, 14, 15, 22, 25, 30], 10);
console.log("The next highest number in the provided array is: " + nextHighestArrayNumberReturn);
