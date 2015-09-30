//Assignment 3, Part 1

// Part 1.	Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.

//var movies = ["Wings of Desire", "A Hard Days Night", "The Fifth Element", "Pinocchio", "Kikis Delivery Service"];
//window.console.log(movies[1]);

// Part 2.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.

//var movies = [];
//movies[0] = "Wings of Desire";
//movies[1] = "A Hard Days Night";
//movies[2] = "The Fifth Element";
//movies[3] = "Pinocchio";
//movies[4] = "Kikis Delivery Service";
//window.console.log(movies[0]);

//Part 3.	Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.

//var movies = ["Wings of Desire", "A Hard Days Night", "The Fifth Element", "Pinocchio", "Kikis Delivery Service"];
//movies.splice(2, 0, "The Eternal Sunshine of the Spotless Mind");
//window.console.log(movies.length);

//Part 4.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.

//var movies = [];
//movies[0] = "Wings of Desire";
//movies[1] = "A Hard Days Night";
//movies[2] = "The Fifth Element";
//movies[3] = "Pinocchio";
//movies[4] = "Kikis Delivery Service";
//delete movies[0];
//window.console.log(movies);

//Part 5.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.

//var movies = [];
//movies[0] = "Wings of Desire";
//movies[1] = "A Hard Days Night";
//movies[2] = "The Fifth Element";
//movies[3] = "Pinocchio";
//movies[4] = "Kikis Delivery Service";
//movies[5] = "Performance";
//movies[6] = "A Clockwork Orange";
//
//movies.forEach(function (movies) {
//    "use strict";
//    window.console.log(movies);
//});

//var movies = [];
//movies[0] = "Wings of Desire";
//movies[1] = "A Hard Days Night";
//movies[2] = "The Fifth Element";
//movies[3] = "Pinocchio";
//movies[4] = "Kikis Delivery Service";
//movies[5] = "Performance";
//movies[6] = "A Clockwork Orange";
//
//for (var i = 0; i < movies.length; i++) {
//    window.console.log(movies[i]);
//}

//Part 6.	Now, use a for-in loop to iterate through the array and display each movie within the console window.

//var movie = ["Wings of Desire", "A Hard Days Night", "The Fifth Element", "Pinocchio", "Kikis Delivery Service", "Performance", "A Clockwork Orange"];
//for (var index in movie) {
//    window.console.log(movie[index]);
//}

//Part 7 Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view. 

//var movie = ["Wings of Desire", "A Hard Days Night", "The Fifth Element", "Pinocchio", "Kikis Delivery Service", "Performance", "A Clockwork Orange"];
//movie.sort();
//for (var index in movie) {
//    window.console.log(movie[index]);
//}

//Part 8 Under the previous movies array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
//Movies I like:
//
//Movie 1
//Movie 2
//Movie 3
//…
//
//Movies I regret watching:
//
//Movie 1
//Movie 2
//Movie 3

//var movies = ["Wings of Desire", "A Hard Days Night", "The Fifth Element", "Pinocchio", "Kikis Delivery Service", "Performance", "A Clockwork Orange"];
//var leastFavMovies = ["Sucker Punch", "Bloodrayne", "Barbwire"];
//window.console.log("Movies I like:" + "\n \n");
//for (var i = 0; i < movies.length; i++) 
//{
//    window.console.log(movies[i]);
//}
//window.console.log("\n \n" + "Movies I regret watching:" + "\n \n");
//for (var i = 0; i < leastFavMovies.length; i++) 
//{
//    window.console.log(leastFavMovies[i]);
//}

//Part 9 Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order. 

//var movies;
//var favMovies = ["Wings of Desire", "A Hard Days Night", "The Fifth Element", "Pinocchio", "Kikis Delivery Service", "Performance", "A Clockwork Orange"];
//var leastFavMovies = ["Sucker Punch", "Bloodrayne", "Barbwire"];
//movies = favMovies.concat(leastFavMovies);
//movies.sort();
//movies.reverse();
//
//for (var i = 0; i < movies.length; i++) 
//{
//    window.console.log(movies[i]);
//}

//Part 10. Return just the last item in the array and display it within the console window. 

//var movies;
//var favMovies = ["Wings of Desire", "A Hard Days Night", "The Fifth Element", "Pinocchio", "Kikis Delivery Service", "Performance", "A Clockwork Orange"];
//var leastFavMovies = ["Sucker Punch", "Bloodrayne", "Barbwire"];
//
//movies = favMovies.concat(leastFavMovies);
//window.console.log(movies.pop());

//Part 11. Remove the previous method and this time return just the first item in the array and display it within the console window. 

//var movies;
//var favMovies = ["Wings of Desire", "A Hard Days Night", "The Fifth Element", "Pinocchio", "Kikis Delivery Service", "Performance", "A Clockwork Orange"];
//var leastFavMovies = ["Sucker Punch", "Bloodrayne", "Barbwire"];
//
//movies = favMovies.concat(leastFavMovies);
//window.console.log(movies.shift());




// ???????????????????????????????????
//Part 12. Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. 

//var favMovies = ["Wings of Desire", "A Hard Days Night", "The Fifth Element", "Pinocchio", "Kikis Delivery Service", "Performance", "A Clockwork Orange"];
//var leastFavMovies = ["Sucker Punch", "Bloodrayne", "Barbwire"];
//var leastFavIndices = leastFavMovies.indexOf(leastFavMovies);

//window.console.log(leastFavIndices);

//var names = new Array("Zak", "Fred", "Sally", "Jessica", "John", "Mike");
//console.log(names.indexOf("Sally")); 
//
//var names = new Array("Zak", "Fred", "Sally");
//names.splice(1, 2, "Jessica", "John", "Mike");
//console.log(names); 





//Part 13. Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window. 

//var employee1 = [];
//employee1["id"] = 1234;
//employee1["name"] = "Michael Jones";
//employee1["title"] = "Tech Support";
//employee1["department"] = "IT";
//employee1["isCurrent"] = true;
//
//var employee2 = [];
//employee2["id"] = 5678;
//employee2["name"] = "Sue Simmons";
//employee2["title"] = "Vice President";
//employee2["department"] = "Management";
//employee2["isCurrent"] = true;
//
//var employees = [employee1, employee2];
//window.console.log(employees[1]["name"]);


//Part 14. Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees. 

//var employee1 = [];
//employee1["id"] = 1234;
//employee1["name"] = "Michael Jones";
//employee1["title"] = "Tech Support";
//employee1["department"] = "IT";
//employee1["isCurrent"] = true;
//
//var employee2 = [];
//employee2["id"] = 5678;
//employee2["name"] = "Sue Simmons";
//employee2["title"] = "Vice President";
//employee2["department"] = "Management";
//employee2["isCurrent"] = true;
//
//var employees = [employee1, employee2];
//for (var i = 0; i < employees.length; i++) {
//    window.console.log(employees[i]["name"]);
//}

//Part 15. And to really tick you off, add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window. 

//var employee1 = [];
//employee1["id"] = 1234;
//employee1["name"] = "Michael Jones";
//employee1["title"] = "Tech Support";
//employee1["department"] = "IT";
//employee1["isCurrent"] = true;
//
//var employee2 = [];
//employee2["id"] = 5678;
//employee2["name"] = "Sue Simmons";
//employee2["title"] = "Vice President";
//employee2["department"] = "Management";
//employee2["isCurrent"] = true;
//
//var employee3 = [];
//employee3["id"] = 9101;
//employee3["name"] = "Anthony Barker";
//employee3["title"] = "Sales Manager";
//employee3["department"] = "Sales";
//employee3["isCurrent"] = false;
//
//var employees = [employee1, employee2, employee3];
//for (var i = 0; i < employees.length; i++) {
//    if (employees[i]["isCurrent"] === true) {
//    window.console.log(employees[i]["name"]);
//    }
//     else {
//    window.console.log("");
//     }
//    }

//for (var i = 0; i < employees.length; i++) {
//    if (employees[i]["isCurrent"] === false) {
//    window.console.log("");
//    }
//     else {
//    window.console.log(employees[i]["name"]);
//     }
//    }





//Part 16. Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 
//movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
//Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type. 

// ????????????????????  NEEDS TO BE A MULTI-DIMENSIONAL ARRAY

//var movies = ["Wings of Desire", 1, "A Hard Days Night", 2, "The Fifth Element", 3, "Pinocchio", 4, "Spirited Away", 5];
//var titles = movies.filter(function (item) {
//    "use strict";
//    return typeof item === "string";
//});
//window.console.log(titles);




//Practice with Functions (5 points)
//    
//Part 1. Create an anonymous function named displayMessage that accepts one parameter. Within the function write a statement that prints out the value of the parameter out into the console window. Now, call the function and pass in a string as the parameter in the function call. 

//var displayMessage = function (a) {
//    "use strict";
//    window.console.log(a);
//};
//displayMessage("Bang!");


//Part 2. Create a named function named calculate that accepts two parameters. Within the function write a statement that returns the modulus of the first and second parameters. Now, call the function and pass in two numbers as parameters into the function call. Make sure to display the result within the console window.

//function calculate(a, b) {"use strict"; return a % b;
//                         }
//var result = calculate(100, 24);
//window.console.log(result);




    
//Part 3. Create a string array called employees and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:
//
//Employees:
//
//ZAK 
//JESSICA 
//MARK 
//FRED 
//SALLY 

// ?????????????????????
//var employees = ["Michael Jones", "Sue Simmons", "Robert Matthews", "Leslie Collins", "George Teller"];
//
//var showEmployee(a) {
//    window.console.log("My employees are ");
//}
////showEmployees(employees);
//window.console.log(showEmployees(employees));



//var showEmployee = function () {
//    window.console.log(showEmployee(employees));
//
//};
////showEmployee(employees);
//window.console.log(showEmployee(employees));
//var results = showEmployee(employees);
//window.console.log(results);






// Assignment 3, Part 2
//The Rock, Paper, Scissors Game (10 points)

//var origUserChoice = window.prompt("Enter rock, paper or scissors");
//var userChoice = origUserChoice.toLowerCase();
//
//if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
//    window.console.log("Caculating…");
//} else {
//    window.alert("You need to enter either rock, paper or scissors.");
//}
//
//var computerRand = Math.random();
//if (computerRand >= 0 && computerRand < 0.333) {
//    var computerChoice = "rock";
//} else if (computerRand >= 0.333 && computerRand < 0.666) {
//    var computerChoice = "paper";
//} else if (computerRand >= 0.666) {
//    var computerChoice = "scissors";
//} else {
//    window.console.log("Error");
//}
//
//if (userChoice === "rock" && computerChoice === "rock") {
//    var result = ("tie");
//} else if (userChoice === "paper" && computerChoice === "paper") {
//    var result = ("tie");
//} else if (userChoice === "scissors" && computerChoice === "scissors") {
//    var result = ("tie");
//} else if (userChoice === "rock" && computerChoice === "paper") {
//    var result = ("computerWins");
//} else if (userChoice === "scissors" && computerChoice === "rock") {
//    var result = ("computerWins");
//} else if (userChoice === "paper" && computerChoice === "scissors") {
//    var result = ("computerWins");
//} else if (userChoice === "scissors" && computerChoice === "paper") {
//    var result = ("userWins");
//} else if (userChoice === "paper" && computerChoice === "rock") {
//    var result = ("userWins");
//} else if (userChoice === "rock" && computerChoice === "scissors") {
//    var result = ("userWins");
//} else {
//    window.console.log("Error");
//}
//
//if (result === "computerWins") {
//    window.alert("I win.");
//} else if (result === "userWins") {
//    window.alert("You win.");
//} else if (result === "tie") {
//    window.alert("It was a tie.");
//} else {
//    window.console.log("Error");
//}


//The Basic Calculator (10 points) 

//var firstString = window.prompt("Enter a number.");
//var secondString = window.prompt("Enter a second number.");
//var firstNumber = parseInt(firstString, 10);
//var secondNumber = parseInt(secondString, 10);
//var operation = window.prompt("Enter an operation - add, subtract, multiply, or divide.");
//function calculate(a, b, c) {
//    "use strict";
//    switch (operation) {
//    case "add":
//        window.alert(firstNumber + secondNumber);
//        break;
//    case "subtract":
//        window.alert(firstNumber - secondNumber);
//		break;
//    case "multiply":
//        window.alert(firstNumber * secondNumber);
//		break;
//    case "divide":
//        window.alert(firstNumber / secondNumber);
//		break;
//    default:
//        window.alert("You need to enter either add, subtract, multiply, or divide.");
//    }
//}
//calculate(firstNumber, secondNumber, operation);

//Death by JavaScript (4 points each for 20 points total


// Part 1. Write a JavaScript function that when called, returns a passed in string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string. 

//var userString;
//function alphaOrder(a) {
//    "use strict";
//    window.alert(userString.split("").sort().join(""));
//}
//var userString = window.prompt("Enter a word or string of letters.");
//alphaOrder(userString);

// Part 2. Write a JavaScript function that accepts a string as a parameter and when called, converts the first letter of each word of the string to upper case characters and return it.
                   
//function capitalizeEachWord(str) {
//    "use strict";
//    return str.replace(/\w\S*/g, function (txt) {
//        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//    });
//}
//var x = window.prompt("Enter a sentence using lowercase letters.");
//var y = capitalizeEachWord(x);
//window.alert(y);


//Part 3. Write a JavaScript function that accepts a string as a parameter and when called, counts the number of vowels within the string and returns that number. 

//function countVowels(somevowels) {
//    "use strict";
//    var i = 0, vowelsCount = 0, vowelString = somevowels.toString();
//    for (var i = 0; i <= vowelString.length - 1; i++) {
//    if (vowelString.charAt(i) === "a" || vowelString.charAt(i) === "e" || vowelString.charAt(i) === "i" || vowelString.charAt(i) === "o" || vowelString.charAt(i) === "u") {
//      vowelsCount += 1;
//    }
//  }
//  return vowelsCount;
//}
//window.console.log(countVowels("The quick brown fox"));

// Part 4. Write a JavaScript function that when called, generates a string id (specified length) of 8 random characters and returns those characters as a string. This is a great application to learn for making password generator-type applications. 

//function randomChars(len) {
//    var chars = '';
//
//    while (chars.length < len) {
//        chars += Math.random().toString(36).substring(2);
//    }
//
//    // Remove unnecessary additional characters.
//    return chars.substring(0, len);
//}
//
//window.console.log(randomChars(8));

// Part 5. Write a JavaScript function that accepts a list of country names as input and when called, returns the longest country name as the output. 

//function longestCountry() {
//    "use strict";
//    var countries = window.prompt("Enter your country names, seperated by commas.").split(","), lgth = 0, longest, i;
//    for (var i=0; i < countries.length; i++){
//    if(countries[i].length > lgth){
//        var lgth = countries[i].length;
//        longest = countries[i];
//    }      
//} 
//return longest;
//}
//window.alert(longestCountry());


//Germany, United States of America, Laos, Taiwan, France