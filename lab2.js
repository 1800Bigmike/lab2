// Question 1 - How many vowels?
// Write code that counts the number of vowels in a string.
// +1 bonus points if you ask for the string from the user

var user_prompt = prompt("Please enter a sentence")
//var sentence = "How many vowels do you think are in this one?";
// Your solution goes here.
// From character counter: https://charactercounter.com/count-characters-in-javascript#:~:text=The%20most%20basic%20way%20is,and%20other%20non%2Dvisible%20characters.
var regex = /[^a,e,i,o,u,y]/gi; // only count vowels

console.log(user_prompt.replace(/[^a,e,i,o,u,y]/gi, "").length); // prints 10 to the console


// Question 2 - Odd Addition
// You'll be given three arrays containing two numbers each. 
// Write a script that checks if the numbers are odd or even.
// If they are odd, multiple them and return or print the results.
// If they are even, add them and return or print the results.
// For example, [3, 5] would return 15; but [3, 6] would result in 9

const first = [5, 7];
const second = [12, 3];
const third = [7, 7];
// Your solution goes here
//From ChatGPT
const arrays = [first, second, third];
//help and integration with gpt/web
function ifeven_odd(arrays){
    //create list to hold values(gpt)
    const results_finish = [];
    //for loop to loop through teh number array(gpt/web)
    for (const i = 0; i < arrays.length; i++){
        const array = arrays[i];
        //specify x and y in the array(gpt)
        const x = array[0];
        const y = array [1];
        
        //if then statement for odd or even (100% me)
        if (y % 2 == 0) {
             results_finish.push(y * x);
        }
        else {
            results_finish.push (y + x);
        }
    }
    return results_finish;
};

const result = ifeven_odd(arrays);
console.log(result);

// Question 3 - Twenty One
// You'll receive three arrays with two numbers again.
// If the two numbers add up to 21, return True
// If they don't, return False unless they are identical
// If they are identical, return "Split"

const p = [19, 2];
const q = [4, 6];
const r = [16 ,16];
// Your solution goes here
const arrays_pqr = [p, q, r];
//help and integration with gpt/web
function dosomething_21(arrays_pqr){
    //create list to hold values(gpt)
    const results_finish_pqr = [];
    //for loop to loop through teh number array(gpt/web)
    for (const i = 0; i < arrays_pqr.length; i++){
        const array = arrays_pqr[i];
        //specify x and y in the array(gpt)
        const x = array[0];
        const y = array [1];
        
        //if then statement for odd or even (80% me push statement from gpt)
        if (x + y === 21) {
             results_finish_pqr.push(true);
        }
        else if (x === y){
             results_finish_pqr.push("split");
            
        }else
            results_finish_pqr.push(false);
        
    }
    return results_finish_pqr;

};
const result_prq = dosomething_21(arrays_pqr);
console.log(result_prq);




// Question 4 - FizzBuzz
// This is a classic programming question.
// Print out the numbers from 1 to 100, except
// If the number is a multiple of three, print Fizz
// If the number is a multiple of five, print Buzz
// If the number is a multiple of three and five, print FizzBuzz
// Your output might look something like 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz ....

// Your solution goes here
//Solution from: https://medium.com/swlh/fizz-buzz-solution-javascript-62a9f3b662fe
function fizzBuzz(start, end){
    //for loop to specify when to start and stop
    for(let num=start; num <= end; num++){
        //if number is divisible by 5 & 3, print fizzbuzz
        if(num % 5 === 0 && num % 3 === 0){
          console.log("FizzBuzz")
        }   
        //if else statements to find if divisible by 3 or 5
        else if(num % 3 === 0){
          console.log("Fizz")
        }
        else if(num % 5 === 0){
          console.log("Buzz")
        }
        else {
          console.log(num)
        }
    }
}


//Question 5 - Start my car
// Create a car variable (object)
// Give it the properties of make, model, year, and color
// Give it a start method that returns to the console "Vroom vroom! Car started!" or something similar
// Call the start method

//Your solution goes here
//from lecture slides
var car = {
    make:"dodge",
    model:"viper ACR",
    year: 2017,
    color: "black",
    start: function(){
        console.log("Your 2017 ACR Viper is Ready, sir.")
    }
}
car.start()




//Question 6 - How many states are there?
// Ok, this seems silly, but we're actually going to work with AJAX to get some data and process it
// You need to load a geojson file, convert it to json, and then count up the number of entires it has...
// In other words, print out to the console log the number of airports in the data set
// You'll want to use chapter 3 of the roth textbook and our Monday lecture here.
// +2 bonus points if you tell me first how many total airports there are and then how many civilian 
// feel free to explore the data in QGIS (or arc). If you know how to answer the question in QGIS, how do you transfer it to javascript?

function jsAjax(){
    //Step 1: Create the data request
    // You may not have your data stored in a data sub-directory, just update this appropriately
    var request = new Request('data/airports.geojson');

    //Step 2: define Fetch parameters
    // Note this isn't really necessary, do you remember/know why?
    function loadData(){
        var init = {
            method: 'GET'
        }
    

    //Step 3: use Fetch to retrieve the data and set up callback functions
    fetch(request, init)
    .then(conversion)
    .then(callback)
    };

//Step 4: define your callback functions
// You'll need to process the data in some way. First, from geojson to json... then to find the answer.
// Loops are helpful here.
    loadData();
    function conversion(rersponse){
        return response.json();

    }

    function callback(data){
        var numberofAirports = data.features.length;

        console.log("Total number of airports: " + numberofAirports);
        var civilianAirports = 0;
        data.features.forEach(function (airport) {
            if (airport.properties.type === "civilian") {
                civilianAirports++;
            }
        });
    }

//Step 5: send the final answer to the console.log()
console.log("Number of civilian airports: " + civilianAirports);
};

// Question 7 - Dynamically creating a list
// This problem draws heavily from Chapter 2 of your workbook (the Roth et al.), so make sure to review there if you're stuck!
// I'm going to give you two arrays as variables. One will have city names, the other their populations.
// You need to create a FUNCTION that takes in the two arrays (so the data is not created within them, this is different from the example in Chapter 2)
// The function should take in the arrays, combine them into an HTML FORMATTED TABLE
// The table should be added to an imaginary div with the id "mydiv"

var cities = ['Corvallis', 'Portland', 'Eugene', 'Albany']
var pops = ['59920', '652500', '176650', '56470']

//Create your function
function cities(cities, pop){
    //from textbook chapter 3
    var table = document.createElement("table");

    var headerRow = document.createElement("tr");

    var cityHeader = document.createElement("th");

    cityHeader.innerHTML = "City";

    headerRow.appendChild(cityHeader);

    var cityHeader = document.createElement("th");

    cityHeader.innerHTML = "City";

    headerRow.appendChild(cityHeader);

    var popHeader = document.createElement("th");

    popHeader.innerHTML = "Population";

    headerRow.appendChild(popHeader);

    table.appendChild(headerRow);



    for (var i = 0; i < cities.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cities[i];
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = population[i];
        tr.appendChild(pop);

        table.appendChild(tr);
    };

    var myDiv =  document.getElementById("mydiv");
    myDiv.appendChild(table);
};


// There are many ways to get this added to the <div id="mydiv"></div> of the associated (imaginary) website.
// This can happen in the function, it can happen as a return of the function, etc.
// The general structure should look something like:
var haha.HTML = document.getElementById("mydiv")
haha.HTML.appendChild([table])

// one way I like is to have the function return the contents of the table and call the function as I create a new variable that's directly fed into the element...
// this relies on 'method chaining' and is NOT NECESSARY
// if you're not sure what I mean, don't worry. It's definitely not the only way. 
// Review Chapter 2 of your work book for SEVERAL other ways.


//P5 code:
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(200);
    square (100,100, 200);
    textSize(16);
    textStyle(BOLD);
    describeElement("Text", "The text 'Hello world!' in the upper left corner of a pink canvas.'");
    text('Portland, OR',150, 150);
  }