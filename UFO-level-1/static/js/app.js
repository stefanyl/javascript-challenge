// from data.js
var tableData = data;

// YOUR CODE HERE! LEVEL 1

/* Using the UFO dataset provided in the form of an array of JavaScript objects, 
write code that appends a table to your web page and 
then adds new rows of data for each UFO sighting */

// Get a reference to the table body
var tbody = d3.select("tbody");

//Cosole.log the ufo data
console.log(data);

//Build table
//function buildTable(data)
function buildTable(x) {
    x.forEach(ufoReport => {

        // Adding rows 
        var row = tbody.append("tr"); 
/* Have a column for date/time, city, state, country, shape, and comment */
// Building table function 
    d3.event.preventDefault();

    var dateField = d3.select("#datetime");
    var cityField = d3.select("#city");
    var stateField = d3.select("#state");

    var dateValue = dateField.property("value");
    var cityValue = cityField.property("value");
    var stateValue = stateField.property("value");
  
}


/* Use a date form in your HTML document and write JavaScript code that will 
listen for events and search through the date/time column to find rows that match user input */
