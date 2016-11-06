//Create SVG Canvas
var svg = d3.select("body")
  .append("svg")
  .attr("height","100%")
  .attr("width","100%");

// Create Line
// svg.append("line")
// 	.attr("x1","100")
// 	.attr("y1","100")
// 	.attr("x2","200")
// 	.attr("y2","200")
// 	.attr("stroke","black")
// 	.attr("stroke-width","2");

// Line Exercise

// svg.append("line")
// 	.attr("x1","100")
// 	.attr("y1","100")
// 	.attr("x2","200")
// 	.attr("y2","200")
// 	.attr("stroke","black")
// 	.attr("stroke-width","5");

// svg.append("line")
// 	.attr("x1","200")
// 	.attr("y1","00")
// 	.attr("x2","300")
// 	.attr("y2","100")
// 	.attr("stroke","black")
// 	.attr("stroke-width","5");

// svg.selectAll("line")
//   .data(a)
//   .enter().append("line")
//   .attr("x1",function(d,i){return 600+i*50;})
//   .attr("y1","50")
//   .attr("x2",function(d,i){return 700+i*50;})
//   .attr("y2","200")
//   .attr("stroke","red")
//   .attr("stroke-width","5");

// var newX = 900;
// svg.selectAll("line")
//       .data(a)
//       .enter().append("line")
//       .attr("x1",newX)
//       .attr("stroke-width","2")
//       .attr("stroke","red")
//       .attr("y1",function(d,i){ return 80+(i*20); })
//       .attr("x2",function(d){ return newX+(d*15); })
//       .attr("y2",function(d,i){ return 80+(i*20); });

// Creact Rect
// svg.append("rect")
// 	.attr("x","100")
// 	.attr("y","100")
// 	.attr("height","100")
// 	.attr("width","50")
// 	.attr("fill","red");


// Rectangle Exercise

// var a = [50,110,180];
// var width = 30;
// var height = 200;

// svg.selectAll("rect")
// 	.data(a)
// 	.enter().append("rect")
// 	.attr("x",function(d,i){return 100+i*50;})
// 	.attr("y",function(d){return height-d})
// 	.attr("height",function(d){return d;})
// 	.attr("width","30")
// 	.attr("fill","red");
// var a = [5,11,18];

// svg.selectAll("rect")
//   .data(a)
//   .enter().append("rect")
//   .attr("x",function(d,i){return 30+i*50;})
//   .attr("y",function(d,i){return 50-d})
//   .attr("width","30")
//   .attr("height",function(d,i){return d;})
//   .attr("fill","black");

//Create Circle
// svg.append("circle")
// .attr("cx","100")
// .attr("cy","100")
// .attr("r","20")
// .attr("fill","black");

// var a = [5,11,18];
// svg.selectAll("circle")
// 	.data(a)
// 	.enter().append("circle")
// 	.attr("cx",function(d,i){return 100+i*50;})
// 	.attr("cy","100")
// 	.attr("r",function(d){return d;})
// 	.attr("fill","black");

// Circle Exercise 
// var a = [5,11,18];
// svg.selectAll("circle")
//   .data(a)
//   .enter().append("circle")
//   .attr("cx",function(d,i){return 50+i*50;})
//   .attr("cy","50")
//   .attr("r",function(d,i){return d;})
//   .attr("fill","black");

// var newX = 300;
// svg.selectAll("circle")
//       .data(a)
//       .enter().append("circle")
//       .attr("cx",function(d,i){ newX+=d*3+(i*20); return newX;})
//       .attr("cy","100")
//       .attr("r",function(d){ return d*3; });

//Create Ellipse
// svg.append("ellipse")
// 	.attr("cx","100")
// 	.attr("cy","100")
// 	.attr("rx","80")
// 	.attr("ry","50")
// 	.attr("fill","black");

// Ellipse Exercise
// var a = [5,11,18];
// svg.selectAll("ellipse")
//   .data(a)
//   .enter().append("ellipse")
//   .attr("cx",function(d,i){return 50+i*100;})
//   .attr("cy","50")
//   .attr("rx",function(d,i){return d;})
//   .attr("ry",5)
//   .attr("fill","black");

// var newX = 600;
// svg.selectAll("ellipse")
//       .data(a)
//       .enter().append("ellipse")
//       .attr("class","second")
//       .attr("cx",function(d,i){ newX+=(d*3)+(i*20); return newX; })
//       .attr("cy","100")
//       .attr("rx",function(d){ return d*3; })
//       .attr("ry","30");

//Create text
// svg.append("text")
// 	.attr("x","100")
// 	.attr("y","100")
// 	.attr("font-size","20")
// 	.attr("color","red")
// 	.text("Hello World");


// Path
// svg.append("path")
// 	// .attr("d","M 10 25,L 10 75,L 60 75,L 10 25")
// 	.attr("d","M 10 25,L 10 75,L 60 75,Z")
// 	.attr("fill","none")
// 	.attr("stroke","red");

//Drawing a Simple BarChart
// var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

//Width and height
// var w = 500;
// var h = 100;
// var barPadding = 1;

// //Create SVG element
// var svg = d3.select("body")
//             .append("svg")
//             .attr("width", w)
//             .attr("height", h);

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
//     })
//     .attr("fill", "teal")

//Tranistion
// d3.select("svg").transition()
//         .style("background-color", "black");


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