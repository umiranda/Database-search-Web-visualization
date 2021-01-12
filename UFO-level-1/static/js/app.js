// from data.js
var tableData = data;

// YOUR CODE HERE!
//filtering to gegt the data
var button = d3.select("#button");

var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter () {
    d3.event.preventDefault();

    var inpuElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(date => date.datetime === inputValue);

    console.log(filteredData);

}



//----------------------
//looping through to create the table
var tbody = d3.select("tbody");
console.log(data);

data.forEach( function(ufoReport){
        var row = tbody.append("tr")
        Object.entries(ufoReport).forEach( function ([key,value]){
            row.append("td").text(value)
}
)
})

