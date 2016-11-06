//Importing CSV data
// d3.csv("prices.csv")
//     .get(function(data){
// 		console.log(data);
// 	});

// d3.csv("prices.csv", function(data) {
// 		console.log(data);
// 	});

//Importing TSV data
// d3.tsv("prices.tsv")
// 	.get(function(data) {
//   		console.log(data);
// 	});

//Importing JSON data
// d3.json("prices.json")
// 	.get(function(data) {
//   		console.log(data);
// 	});

var bardata = [];
// d3.csv("data.csv", function(data) {
// 	console.log(data);
// }) 
d3.csv("data.csv")
	.get(function(data) {
		for (i in data) {
			bardata.push(data[i].value);
		}
	// console.log(bardata);
    var svg = d3.select("body")
        	.append("svg")
        	.attr("height","100%")
        	.attr("width","100%");

    svg.selectAll("rect")
        	.data(bardata)
        	.enter().append("rect")
        	.attr("x",function(d,i){return 100+i*10;})
        	.attr("y",function(d){return 200-d;})
        	.attr("height",function(d){return d;})
        	.attr("width","5");
});

