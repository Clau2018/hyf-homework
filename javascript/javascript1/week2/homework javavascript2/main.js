
//  --------------------------
//  Homework JavaScript Week 2
//  --------------------------

// Exercise 1: Flight booking fullname function 
// --------------------------------------------
console.log('Exercise 1');
let firstName = "";
let surName = "";
let useFormalName = false;

function getFullname(firstName, surName, useFormalName) {
    if (firstName.length === 0 || surName.length === 0) {
       return 'Please type your name!'; 
    } else if (useFormalName) {
        return 'Lord' + ' ' + firstName + ' ' + surName; 
    }   else {
        return firstName + ' ' + surName;
    }
}

const fullName1 = getFullname('Benjamin', 'Hughes', true);
const fullName2 = getFullname('Claudia', 'Cristescu', false);
const fullName3 = getFullname('Samantha', '', false);

console.log(fullName1);
console.log(fullName2);
console.log(fullName3);





// Exercise 2: Event application
// -----------------------------

console.log('Exercise 2');

const weekDays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getEventWeekday(daysToEvent) {
    const todayDate = new Date();
    let eventIndexDay = (daysToEvent + todayDate.getDay()) % 7;
    return  'Your event will be on ' +  weekDays[eventIndexDay];
}

console.log(getEventWeekday(35));



// Exercise 3: Weather wear
// ------------------------

console.log('Exercise 3');
function youCreateThisFunctionName(temp) {
    if (temp <= 0) {
        return 'Uff, you will freeze today, put your winter jacket on!';
    } else if (temp <= 18) {
        return 'It is not so nice outside, don\'t forget your umbrella!';
    } else if (temp <= 25) {
        return 'Enjoy your special day!';
    } else {
        return 'It will be hot today, don\'t forget to hidrate well!';
    }
}


const clothesToWear = youCreateThisFunctionName(18);
console.log(clothesToWear);





// Exercise 4: Student manager
// ---------------------------

console.log('Exercise 4');

let class07Students = ['Jim', 'Marie', 'Will', 'Jaqulline', 'Adam', 'Julian'];

function addStudentToClass(studentName) {
    if (studentName === '') {
        return 'Please type a name!'
    } else if (class07Students.includes(studentName)) {
        return 'Student ' +  studentName  +  '  is already in the class';
    } else if (studentName === 'Queen') {
        return class07Students = class07Students.push(studentName);
    } else if (class07Students.length >= 6) {
        return 'Cannot add more students to class 07!';
    } else {
        return class07Students = class07Students.push(studentName);
    }
}


console.log(class07Students);
console.log(addStudentToClass('Julian'));
// console.log(addStudentToClass('Ben'));
// console.log(addStudentToClass('Queen'));






// Exercise 5: Candy helper
// ------------------------

console.log('Exercise 5');
let boughtCandyPrices = [];
let candyType = '';
let weight = 0;
const sweet = 0.5;
const chocolate = 0.7;
const toffe = 1.1;
const chewingGum = 0.03;

function addCandy(candyType, weight) {
    if (candyType === 'sweet') {
        return boughtCandyPrices.push(weight * sweet);
    }
    else if (candyType === 'chocolate') {
        return boughtCandyPrices.push(weight * chocolate);
    }
    else if (candyType === 'toffe') {
        return boughtCandyPrices.push(weight * toffe);
    }
    else if (candyType === 'chewing-gum') {
        return boughtCandyPrices.push(weight * chewingGum);
    } else {
        return;
    }
}
addCandy('sweet', 20);
addCandy('chocolate', 10);

let amountToSpend = (Math.random() * 100).toFixed(0);


let sumOfSpends = 0;
    for(var i = 0; i < boughtCandyPrices.length; i++) {
        sumOfSpends += boughtCandyPrices[i];
    }


function canBuyMoreCandy() {
    if (amountToSpend >= sumOfSpends) {
        return "You can buy more, so please do!";
    } else {
        return "Enough candy for you!";
    }
}
console.log(boughtCandyPrices );
console.log('Cash in the wallet: ', amountToSpend);
console.log('Total of spends: ', sumOfSpends);
console.log(canBuyMoreCandy());