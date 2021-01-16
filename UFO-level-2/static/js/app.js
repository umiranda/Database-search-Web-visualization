// from data.js
var tableData = data;

// YOUR CODE HERE!

//looping through to create the table
    var tbody = d3.select("tbody");
    console.log(data);

    data.forEach( function(ufoReport){
        var row = tbody.append("tr")
        Object.entries(ufoReport).forEach( function ([key,value]){
            row.append("td").text(value)
});
});

var clickHandler = d3.select("#filter-btn");
clickHandler.on("click", function() {

d3.select("tbody").html("");
d3.event.preventDefault();

// value property of the input elements 
var dateTime = d3.select("#datetime").property("value");
var selectedCountry = d3.select("#country").property("value").toLowerCase();
var selectedState = d3.select("#state").property("value").toLowerCase();
var selectedCity = d3.select("#city").property("value").toLowerCase();
var selectedShape = d3.select("#shape").property("value").toLowerCase();

filteredData = tableData;
if (dateTime) {
    filteredData = filteredData.filter(record => record.datetime === dateTime);
}
if (selectedCountry) {
    filteredData = filteredData.filter(record => record.country === selectedCountry);
}
if (selectedState) {
    filteredData = filteredData.filter(record => record.state === selectedState);
}
if (selectedCity) {
    filteredData = filteredData.filter(record => record.city === selectedCity);
}
if (selectedShape) {
    filteredData = filteredData.filter(record => record.shape === selectedShape);
}

// Showing the filter data

filteredData.forEach((report) => {
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});
});
