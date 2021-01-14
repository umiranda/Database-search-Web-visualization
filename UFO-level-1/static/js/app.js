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


var button = d3.select("#filter-btn");

//var form = d3.select("#form");

button.on("click", runEnter);
//form.on("submit", runEnter);

//d3.select("tbody").html("");

function runEnter () {
    d3.event.preventDefault();

    var dateTime = d3.select("#datetime").property("value");
    console.log(dateTime);

    var filteredData = tableData.filter(record => record.datetime === dateTime);
    console.log(filteredData);

    filteredData.forEach((ufoReport) => {
        var row = tbody.append('tr');
    
        Object.entries(ufoReport).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
        });
    });
    

};
