var svg = d3.select("body")
            .append("svg")
            .attr("width","100%")
            .attr("height","100%");

// Mouseover and Mouseout
svg.append("rect")
    .attr("x","100")
    .attr("y","100")
    .attr("height","100")
    .attr("width","100")
    .attr("fill","red")
    .on("mouseover", function() { 
            d3.select(this)
            // .style("opacity","0.5")
            .attr("fill", "blue");

    })
   .on("mouseout", function() {
        d3.select(this)
        // .style("opacity","1")
        .attr("fill", "red");
    })
  
//Mouseover and mouseout exercise
// dataset = [100,200,300]; 
// svg.selectAll('circle')
//     .data(dataset)
//     .enter()
//     .append('circle')
//     .attr('cx',function(d) {return d})
//     .attr('cy',100)
//     .attr('r',10)
//     .attr('fill','red')
//     .on("mouseover", function(){
//             d3.select(this)
//             .attr("fill", "blue");
//         })
//     .on("mouseout", function(){
//             d3.select(this)
//             .attr("fill", "red");
//         });

// Onclick
// svg.append("rect")
//     .attr("x","100")
//     .attr("y","100")
//     .attr("height","100")
//     .attr("width","100")
//     .attr("fill","red")
//     .on("click", function() { 
//             d3.select(this)
//             .style("opacity","0.5")
//             .attr("fill", "blue");
//     })

// Transition
// svg.append("rect")
//     .attr("x","100")
//     .attr("y","100")
//     .attr("height","100")
//     .attr("width","100")
//     .style("fill","red")
//     .transition().duration(2000).delay(1000)
//     .style("fill","blue");

// Exercise: Tranistion
// svg.append("rect")
//     .attr("x","100")
//     .attr("y","100")
//     .attr("height","100")
//     .attr("width","100")
//     .attr("fill","red")
//     .transition().duration(2000).delay(1000)
//     .attr("transform","translate(300,0)");


// svg.append("circle")
//     .attr("cx","100")
//     .attr("cy",100)
//     .attr("r",10)
//     .attr("fill","red")
//     .on("mousedown", animate);

// function animate(){
//     d3.select(this)
//         .transition()
//         .duration(1000)
//         .attr("r", 50)
// };

// var bardata = [];

// for (var i=0; i < 50; i++) {
//     bardata.push(Math.round(Math.random()*100)+10)
// }

// bardata.sort(function compareNumbers(a,b) {
//     return a -b;
// });

// var height = 400,
//     width = 600,
//     barWidth = 50,
//     barOffset = 5;

// var tempColor;

// var colors = d3.scale.linear()
// .domain([0, bardata.length*.33, bardata.length*.66, bardata.length])
// .range(['#B58929','#C61C6F', '#268BD2', '#85992C'])

// var yScale = d3.scale.linear()
//         .domain([0, d3.max(bardata)])
//         .range([0, height]);

// var xScale = d3.scale.ordinal()
//         .domain(d3.range(0, bardata.length))
//         .rangeBands([0, width])

// var tooltip = d3.select('body').append('div')
//         .style('position', 'absolute')
//         .style('padding', '0 10px')
//         .style('background', 'white')
//         .style('opacity', 0)

// var myChart = d3.select('#chart').append('svg')
//     .attr('width', width)
//     .attr('height', height)
//     .append('g')
//     .selectAll('rect').data(bardata)
//     .enter().append('rect')
//         .style('fill', function(d,i) {
//             return colors(i);
//         })
//         .attr('width', xScale.rangeBand())
//         .attr('x', function(d,i) {
//             return xScale(i);
//         })
//         .attr('height', 0)
//         .attr('y', height)

//     .on('mouseover', function(d) {

//         tooltip.transition()
//             .style('opacity', .9)

//         tooltip.html(d)
//             .style('left', (d3.event.pageX - 35) + 'px')
//             .style('top',  (d3.event.pageY - 30) + 'px')


//         tempColor = this.style.fill;
//         d3.select(this)
//             .style('opacity', .5)
//             .style('fill', 'yellow')
//     })

//     .on('mouseout', function(d) {
//         d3.select(this)
//             .style('opacity', 1)
//             .style('fill', tempColor)
//     })

// myChart.transition()
//     .attr('height', function(d) {
//         return yScale(d);
//     })
//     .attr('y', function(d) {
//         return height - yScale(d);
//     })
//     .delay(function(d, i) {
//         return i * 20;
//     })
//     .duration(1000)
//     .ease('elastic')

// var vGuideScale = d3.scale.linear()
//     .domain([0, d3.max(bardata)])
//     .range([height, 0])

// var vAxis = d3.svg.axis()
//     .scale(vGuideScale)
//     .orient('left')
//     .ticks(10)

// var vGuide = d3.select('svg').append('g')
//     vAxis(vGuide)
//     vGuide.attr('transform', 'translate(35, 0)')
//     vGuide.selectAll('path')
//         .style({ fill: 'none', stroke: "#000"})
//     vGuide.selectAll('line')
//         .style({ stroke: "#000"})


