var svg = d3.select("body")
			.append("svg")
			.attr("width","100%")
			.attr("height","100%");


// var width = 400;
// var height = 200;

// var pts = [{x:0,y:0},{x:2,y:4},{x:3,y:6},{x:4,y:8},{x:5,y:10}];

// var xS = d3.scaleLinear()
// 			.domain([0,5])
// 			.range([0,width]);

// var yS = d3.scaleLinear()
// 			.domain([0,10])
// 			.range([height,0]);

// console.log(xS(5));
// console.log(yS(0));

// var l = d3.line()
// 		.x(function(d,i){return xS(d.x);})
// 		.y(function(d,i){return yS(d.y);});

// svg.append("path")
// 	.attr("fill","none")
// 	.attr("stroke","black")
// 	.attr("d",l(pts));

// svg.selectAll("circle")
// 	.data(pts)
// 	.enter().append("circle")
// 	.attr("cx",function(d,i){return xS(d.x);})
// 	.attr("cy",function(d,i){return yS(d.y);})
// 	.attr("r","3");

// Axis
// var yAxis = d3.axisLeft(yS)
// 				.ticks(10)
// 				.tickPadding(10)
// 				.tickSize(10);

// var chart = svg.append("g")
// 			.attr("transform","translate(50,50)");

// chart.append("g")
//  	.call(yAxis);

// var l = d3.line()
// 		.x(function(d,i){return xS(d.x);})
// 		.y(function(d,i){return yS(d.y);});

// chart.append("path")
// 	.attr("fill","none")
// 	.attr("stroke","black")
// 	.attr("d",l(pts));

// chart.selectAll("circle")
// 	.data(pts)
// 	.enter().append("circle")
// 	.attr("cx",function(d,i){return xS(d.x);})
// 	.attr("cy",function(d,i){return yS(d.y);})
// 	.attr("r","3");


// Axis Exercise
// var xAxis = d3.axisBottom(xS)
// 				.tickPadding(10)
// 				.tickSize(10)
// 				.ticks(10);

// chart.append("g")
// 	.attr("transform","translate(0,200)")
// 	.call(xAxis);

// Time Scale
// var dataArray = [25,26,28,32,37,45,55,70,90,120,135,150,160,168,172,177,180];
// var dataYears = ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016'];

// var parseDate = d3.timeParse("%Y");

// var height = 200;
// var width = 500;

// var y = d3.scaleLinear()
// 		.domain([0,d3.max(dataArray)])
// 		.range([height,0]);

// var x = d3.scaleTime()
// 		.domain([parseDate('2000'),parseDate('2016')])
// 		.range([0,width]);

// var yAxis = d3.axisLeft(y)
// 		.ticks(3)
// 		.tickPadding(10)
// 		.tickSize(10);

// var xAxis = d3.axisBottom(x);

// var area = d3.area()
// 	.x(function(d,i){ return x(parseDate(dataYears[i])); })
// 	.y0(height)
// 	.y1(function(d){ return y(d); });

// var Group = svg.append("g")
// 	.attr("transform","translate(50,50)");

// Group.append("path")
// 	.attr("d",area(dataArray));
// Group.append("g")
//       .call(yAxis);
// Group.append("g")
//       .attr("transform","translate(0,200)")
//       .call(xAxis);

// Ordinal Scale
?