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
console.log(data);

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

// Building table function 
// d3.event.preventDefault();

    // var dateField = d3.select("#datetime");
    // var cityField = d3.select("#city");
    // var stateField = d3.select("#state");

    // var dateValue = dateField.property("value");
    // var cityValue = cityField.property("value");
    // var stateValue = stateField.property("value");
// Click function
function handleClick() {
    console.log("A button was clicked")
    // Prevent page from refressing
    d3.event.preventDefault();
    // Datetime
    var date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
    // Filter
    if (date) {
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
    buildTable(filteredData);
  }
  
  // Filter using button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build Table
  buildTable(tableData);
        

  



/* Use a date form in your HTML document and write JavaScript code that will 
listen for events and search through the date/time column to find rows that match user input */
