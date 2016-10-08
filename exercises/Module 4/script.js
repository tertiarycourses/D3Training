// Scales
// var scale = d3.scale.linear()
//                 .domain([100, 500])
//                 .range([10, 50]);

// d3.select('#chart')
//     .append('svg')
//         .attr('width',scale(100))
//         .attr('height',scale(200))
//         .style('background', 'red')


//var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

//Width and height
// var w = 600;
// var h = 500;
// var barPadding = 1;

// //Create SVG element
// var svg = d3.select("body")
//             .append("svg")
//             .attr("width", w)
//             .attr("height", h);

// var scale = d3.scale.linear()
//         .domain([0, d3.max(dataset)])
//         .range([0, h])

// var colors = d3.scale.linear()
//         .domain([0, d3.max(dataset)])
//         .range(['#B58929','#85992C'])

// var xScale = d3.scale.ordinal()
//         .domain(d3.range(0, dataset.length))
//         .rangeBands([0, w])

//Drawing Bar Chart
// svg.selectAll("rect")
//     .data(dataset)
//     .enter()
//     .append("rect")
//         // .attr("x", function(d, i) {
//         // return i * (w / dataset.length);
//         // })
//         .attr("x",function(d,i) {
//             return xScale(i);
//         })
//         .attr("y", function(d) {
//         return h - scale(d);  
//         })
//         //.attr("width", w / dataset.length - barPadding)
//         .attr("width",xScale.rangeBand())
//         .attr("height", function(d) {
//         return scale(d);
        //})
        //.attr("fill", "teal")
        // .attr("fill",colors)
        // .on('mouseover', function(d) {
        // tempColor = this.style.fill;
        // d3.select(this)
        //     .style('opacity', .5)
        //     .style('fill', 'yellow')
        // })

        // .on('mouseout', function(d) {
        // d3.select(this)
        //     .style('opacity', 1)
        //     .style('fill', tempColor)
        // })

// var xAxis = d3.svg.axis();
// xAxis.scale(xScale);
// xAxis.orient("bottom");
// svg.append("g")
//     .attr("class", "axis")
//     .call(xAxis);


// var bardata = [20, 30, 105, 15, 85];

// var height = 400,
//     width = 600,
//     barWidth = 50,
//     barOffset = 5;

// var tempColor;

// Without Scaling
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

// With Y Scaling
// var yScale = d3.scale.linear()
//         .domain([0, d3.max(bardata)])
//         .range([0, height])

// d3.select('#chart').append('svg')
//     .attr('width', width)
//     .attr('height', height)
//     .style('background', '#C9D7D6')
//     .selectAll('rect').data(bardata)
//     .enter().append('rect')
//         .style('fill', '#C61C6F')
//         .attr('width', barWidth)
//         .attr('height', function(d) {
//             return yScale(d);
//         })
//         .attr('x', function(d,i) {
//             return i * (barWidth + barOffset);
//         })
//         .attr('y', function(d) {
//             return height - yScale(d);
//         })

// X Scaling
// var xScale = d3.scale.ordinal()
//         .domain(d3.range(0, bardata.length))
//         .rangeBands([0, width])

// d3.select('#chart').append('svg')
//     .attr('width', width)
//     .attr('height', height)
//     .style('background', '#C9D7D6')
//     .selectAll('rect').data(bardata)
//     .enter().append('rect')
//         .style('fill', '#C61C6F')
//         .attr('width', xScale.rangeBand())
//         .attr('height', function(d) {
//             return yScale(d);
//         })
//         .attr('x', function(d,i) {
//             return xScale(i);
//         })
//         .attr('y', function(d) {
//             return height - yScale(d);
//         })

//Color Scaling
// var colors = d3.scale.linear()
// .domain([0, bardata.length])
// .range(['#B58929','#85992C'])

// d3.select('#chart').append('svg')
//     .attr('width', width)
//     .attr('height', height)
//     .style('background', '#C9D7D6')
//     .selectAll('rect').data(bardata)
//     .enter().append('rect')
//         .style('fill', colors)
//         .attr('width', xScale.rangeBand())
//         .attr('height', function(d) {
//             return yScale(d);
//         })
//         .attr('x', function(d,i) {
//             return xScale(i);
//         })
//         .attr('y', function(d) {
//             return height - yScale(d);
//         })

// Event 
	// .on('mouseover', function(d) {
 //    	d3.select(this)
 //        	.style('opacity', .5)
 //    })
	// .on('mouseout', function(d) {
 //    	d3.select(this)
 //        	.style('opacity', 1)
 //    })

	// .on('mouseover', function(d) {
 //        tempColor = this.style.fill;
 //        d3.select(this)
 //            .style('opacity', .5)
 //            .style('fill', 'yellow')
 //    })

 //    .on('mouseout', function(d) {
 //        d3.select(this)
 //            .style('opacity', 1)
 //            .style('fill', tempColor)
 //    })


// Transitions

// d3.select("body")
//     .style("background-color", "green") 
//     .transition()
//     .style("background-color", "red")

// Delay and Duration
d3.select("body")
    .style("background-color", "green") 
    .transition()
    .delay(500)
    .duration(1000)
    .style("background-color", "red");

// d3.select("body").transition()
//     .styleTween("background-color", function() { return d3.interpolate("green", "red"); })

