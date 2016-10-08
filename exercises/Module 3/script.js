//SVG Graphics
// d3.select('#chart')
//   .append('svg')
//     .attr('width', 600)
//     .attr('height', 400)
//     .style('background', "#93A1A1")
//   .append("rect")
//     .attr('x', 200)
//     .attr('y', 100)
//     .attr('height', 200)
//     .attr('width', 200)
//     .style('fill', '#CB4B19')
//   d3.select('svg')
//     .append('circle')
//     .attr('cx','300')
//     .attr('cy','200')
//     .attr('r','50')
//     .style('fill', '#840043')

//Drawing a Simple BarChart
var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

//Width and height
var w = 500;
var h = 100;
var barPadding = 1;

//Create SVG element
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

//Create Rect
// svg.selectAll("rect")
//     .data(dataset)
//     .enter()
//     .append("rect")
//     .attr("x", 0)
//     .attr("y", 0)
//     .attr("width", 20)
//     .attr("height", 100);

//Fix Overlap
// svg.selectAll("rect")
//     .data(dataset)
//     .enter()
//     .append("rect")
//     .attr("x", function(d, i) {
//     return i * 21;  })
//     .attr("y", 0)
//     .attr("width", 20)
//     .attr("height", 100);

//Auto Spacing
// svg.selectAll("rect")
//     .data(dataset)
//     .enter()
//     .append("rect")
//     .attr("x", function(d, i) {
//     return i * (w / dataset.length);
//     })
//     .attr("y", 0)
//     .attr("width", 20)
//     .attr("height", 100);

// Auto Bar Width
// svg.selectAll("rect")
//     .data(dataset)
//     .enter()
//     .append("rect")
//     .attr("x", function(d, i) {
//     return i * (w / dataset.length);
//     })
//     .attr("y", 0)
//     .attr("width", w / dataset.length - barPadding)
//     .attr("height", 100)

// Fix Height
// svg.selectAll("rect")
//     .data(dataset)
//     .enter()
//     .append("rect")
//     .attr("x", function(d, i) {
//     return i * (w / dataset.length);
//     })
//     .attr("y", 0)
//     .attr("width", w / dataset.length - barPadding)
//     .attr("height", function(d) {
//     return d;
// });

// Reverse height
// svg.selectAll("rect")
//     .data(dataset)
//     .enter()
//     .append("rect")
//     .attr("x", function(d, i) {
//     return i * (w / dataset.length);
//     })
//     .attr("y", function(d) {
//     return h - d;  
//     })
//     .attr("width", w / dataset.length - barPadding)
//     .attr("height", function(d) {
//     return d;
// });

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function(d, i) {
    return i * (w / dataset.length);
    })
    .attr("y", function(d) {
    return h - d;  
    })
    .attr("width", w / dataset.length - barPadding)
    .attr("height", function(d) {
    return d;
    })
    .attr("fill", "teal")

//Tranistion
d3.select("svg").transition()
        .style("background-color", "black");


//Drawing a BarChart
// var bardata = [20, 30, 105, 15, 85];
// var height = 400,
//     width = 600,
//     barWidth = 50,
//     barOffset = 5;

// d3.select('#chart').append('svg')
//     .attr('width', width)
//     .attr('height', height)
//     .style('background', '#C9D7D6')
//     .selectAll('rect').data(bardata)
//     .enter().append('rect')
//         .style('fill', '#C61C6F')
//         .attr('width', barWidth)
//         .attr('height', function(d) {
//             return d;
//         })
//         .attr('x', function(d,i) {
//             return i * (barWidth + barOffset);
//         })
//         .attr('y', function(d) {
//             return height - d;
//         })