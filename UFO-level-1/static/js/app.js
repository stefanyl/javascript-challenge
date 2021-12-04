// from data.js
var tableData = data;

// YOUR CODE HERE! LEVEL 1
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
// button.on("click", runEnter);
// form.on("submit",runEnter);

/* Using the UFO dataset provided in the form of an array of JavaScript objects, 
write code that appends a table to your web page and 
then adds new rows of data for each UFO sighting */

// Get a reference to the table body
var tbody = d3.select("tbody");

//Cosole.log the ufo data
//console.log(data);

//Build table
//function buildTable(data)
function buildTable(data) {
    //remove prior info wthin table
    tbody.html("");

    //loop through the data
    data.forEach(dataRow => {
        console.log(dataRow);
        // Adding rows 
        var row = tbody.append("tr"); 
        Object.values(dataRow).forEach((val) => {
            var cell = row.append("td");
            cell.text(val);
        });
    });
}
/* Have a column for date/time, city, state, country, shape, and comment */

// No need to list individual columns because the data section already includes them
// Click function
function handleClick() {
    console.log("A button was clicked")
    // Prevent page from refressing
    d3.event.preventDefault();
    // Datetime
    var date = d3.select("#datetime").property("value");
    let filteredData = tableData;

/* Use a date form in your HTML document and write JavaScript code that will 
listen for events and search through the date/time column to find rows that match user input */  
    // Filter
    if (date) {
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
    buildTable(filteredData);
  }
  
  // Filter using filter table button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build Table
  buildTable(tableData);
        

  




