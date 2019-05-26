/*Homework JavaScript
  Week 1*/

  //Exercise nr. 1 Age-ify (A future age calculator)

var yearOfBirth = 1980;
var yearFuture = 2076;
var age = yearFuture - yearOfBirth;
console.log("My age will be" + age);

// Exercise nr. 2 Goodboy-Oldboy (A dog age calculator)

var dogYearOfBirth = 2017;
var dogYearFuture = 2027;
var ageInHumanYears = dogYearFuture - dogYearOfBirth;
var ageInDogYears = ageInHumanYears * 7;
var shouldShowResultInDogYears = true;

if(shouldShowResultInDogYears) {
    console.log("Your dog will be " + ageInDogYears + " dog years old in " + dogYearFuture);
} 
else{
    console.log("Your dog will be " + ageInHumanYears + " human years old in " + dogYearFuture);
}

// Exercise nr. 3 Housey pricey (A house price estimator)

// The house that Peter wants:

var width1 = 8;
var depth1 = 10;
var height1 = 10;
var garden1 = 100;
var volume1 = width1 * depth1 * height1;
var price1 = volume1 * 2.5 * 1000  +  garden1 * 300;
var priceRequested1= 2500000;
if(priceRequested1 <= price1){
    console.log("Peter can buy the house.");
}else{
    console.log("Peter should look after other offers.");
}
// The house that Julia wants:

var width2 = 5;
var depth2 = 11;
var height2 = 8;
var garden2 = 70;
var volume2 = width2 * depth2 * height2;
var price2 = volume2 * 2.5 * 1000  +  garden2 * 300;
var priceRequested2= 1000000;
if(priceRequested2 <= price2){
    console.log("Julia can buy the house.");
}else{
    console.log("Julia should look after other offers.");
}


// Exercise nr. 4 Ez Namey (Startup name generator)

var firstWords = ["Amazing", "Hiit", "Future", "Desruptive", "Hack", "Community", "Global", "Trust", "Hub", "Play"];
var secondWords = ["Adventure", "Studio", "Creative", "Young", "Kids", "World", "Games", "Connect", "Explore", "Integrate"];
//var startUpNames = [Math.floor(Math.random() * 10 , Math.floor(Math.random() * 10];
/*I will come back with this exercise because none of the solutions are not functional on the console, something is not right, keep surching for solutions...*/