var svg = d3.select("body")
	.append("svg")
	.attr("height","100%")
	.attr("width","100%");

// Line Path

// svg.append("path")
// 	.attr("d","M 10 25,L 10 75,L 60 75,L 10 25")
// 	.attr("fill","none")
// 	.attr("stroke","red");

//Close the path
// svg.append("path")
// 	.attr("d","M 10 25,L 10 75,L 60 75,L 30 60 Z")
// 	.attr("fill","none")
// 	.attr("stroke","red");


// var b = [{x:10,y:25},{x:10,y:75},{x:60,y:75},{x:10,y:25}];

// var line = d3.line()
//        .x(function(d,i){ return d.x; })
//        .y(function(d,i){ return d.y; });

// svg.append("path")
//       .attr("fill","none")
//       .attr("stroke","blue")
//       .attr("d",line(b));

// Line Generator Exercise
// var b = [{x:5,y:5},{x:10,y:15},{x:20,y:7},{x:30,y:18},{x:40,y:10}];
// var line = d3.line()
// 		.x(function(d){ return d.x*4; })
// 		.y(function(d){ return d.y*6; });

// svg.append("path")
//       .attr("fill","none")
//       .attr("stroke","black")
//       .attr("d",line(b));

// Curve Generator
// var a =[{x:5,y:5},{x:10,y:15},{x:20,y:7},{x:30,y:18},{x:40,y:10}];

// var line = d3.line()
//        .x(function(d,i){ return d.x; })
//        .y(function(d,i){ return d.y; })
//        .curve(d3.curveCardinal);

// svg.append("path")
//       .attr("fill","none")
//       .attr("stroke","blue")
//       .attr("d",line(a))

// Area Path
// var a = [25,26,28,32,37,45,55,70,90,120,135,150,160,168,172,177,180];

// var height = 200;
// var area = d3.area()
// 		.x(function(d,i){ return i*20; })
// 		.y0(height)
// 		.y1(function(d){ return height-d; });

// svg.append("path")
// 	.attr("d",area(a));

// var a = [0,25,50,75];

// var height = 200;

// var area = d3.area()
// 		.x(function(d,i){ return i*20; })
// 		.y0(height)
// 		.y1(function(d){ return height-d; });

// svg.append("path")
// 	.attr("d",area(a));

//Grouping
// var group = svg.append("g")

// group.append("rect")
// 	.attr("x","100")
// 	.attr("y","100")
// 	.attr("height","200")
// 	.attr("width","200")

// group.append("circle")
// 	.attr("cx","100")
// 	.attr("cy","100")
// 	.attr("r","50")

// group.append("circle")
// 	.attr("cx","300")
// 	.attr("cy","100")
// 	.attr("r","50")

//Transform
// group.attr("transform","translate(300,0)")
// group.attr("transform","rotate(10)")
// group.attr("transform","scale(0.5)")
//group.attr("transform","translate(300,0) rotate(10) scale(0.5)")

// Grouping and Transform Exercise

// var group= svg.append("g")
// 	.attr("transform","translate(300,0)");

// var a = [5,11,18];
// group.selectAll("circle")
//   .data(a)
//   .enter().append("circle")
//   .attr("cx",function(d,i){return 50+i*50;})
//   .attr("cy","50")
//   .attr("r",function(d,i){return d;})
//   .attr("fill","black");

