////q1
function power(a, b) {
    var result = 1;
    for (var i = 0; i < b; i++) {
        result = result * a;
    }
    return result;
}

console.log(power(2, 3));


/////q2
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "Leap Year";
    } else {
        return "Not a Leap Year";
    }
}

console.log(isLeapYear(2020));

////q3
function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function triangleArea(a, b, c) {
    var S = calculateS(a, b, c);
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
}

console.log(triangleArea(3, 4, 5));

////q4
function calculateAverage(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}

function calculatePercentage(m1, m2, m3) {
    return ((m1 + m2 + m3) / 300) * 100;
}

function mainFunction(m1, m2, m3) {
    var avg = calculateAverage(m1, m2, m3);
    var per = calculatePercentage(m1, m2, m3);

    console.log("Average: " + avg);
    console.log("Percentage: " + per + "%");
}

mainFunction(80, 75, 90);

////q5
function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}

console.log(customIndexOf("Hello", "e"));

////q6
function removeVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, "");
}

console.log(removeVowels("Hello World"));

////q7
function countDoubleVowels(text) {
    var count = 0;

    for (var i = 0; i < text.length - 1; i++) {
        switch (text[i] + text[i + 1]) {
            case "aa":
            case "ee":
            case "ii":
            case "oo":
            case "uu":
            case "ae":
            case "ai":
            case "ea":
            case "ie":
            case "ou":
                count++;
                break;
        }
    }
    return count;
}

console.log(countDoubleVowels("Pleases read this application"));

////q8
var km = parseFloat(prompt("Enter distance between two cities in km"));

function toMeters(km) {
    document.write("Distance in meters: " + (km * 1000) + "<br>");
}

function toFeet(km) {
    document.write("Distance in feet: " + (km * 3280.84) + "<br>");
}

function toInches(km) {
    document.write("Distance in inches: " + (km * 39370.1) + "<br>");
}

function toCentimeters(km) {
    document.write("Distance in centimeters: " + (km * 100000) + "<br>");
}

toMeters(km);
toFeet(km);
toInches(km);
toCentimeters(km);

////q9
var hoursWorked = parseInt(prompt("Enter total hours worked"));
var overtimePay = 0;

if (hoursWorked > 40) {
    var overtimeHours = hoursWorked - 40;
    overtimePay = overtimeHours * 12;
}

document.write("Overtime Pay is Rs. " + overtimePay);

/////q10
var amount = parseInt(prompt("Enter amount to withdraw (in hundreds)")) * 100;

var hundreds = Math.floor(amount / 100);
var remainder = amount % 100;

var fifties = Math.floor(remainder / 50);
remainder = remainder % 50;

var tens = Math.floor(remainder / 10);

document.write("100 Notes: " + hundreds + "<br>");
document.write("50 Notes: " + fifties + "<br>");
document.write("10 Notes: " + tens);

