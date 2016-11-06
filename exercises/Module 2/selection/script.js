//Select elements
// d3.select("p")
//   .style("color","red");

// d3.selectAll("p")
//   .style("color","red");

// Selection Exercise
// d3.select("ul")
//   .style("color","green");

// d3.selectAll("li:nth-child(even)")
//   .style("color","red");

// d3.selectAll("li:nth-child(2n+1)")
//   .style("color","green");

// d3.select("#orange")
//   .attr("height","300px")
//   .attr("width","400px")
//   .attr("class","highlight");

// d3.select("p")
//   .text("Today is Sunday")
//   .style("color","blue");

// d3.select("li:nth-child(4n)")
//   .append("li")
//   .html("Obama");

// d3.selectAll("li:nth-child(n+1)")
//   .insert("li")
//   .html("Hello");


// d3.selectAll("li:nth-child(2n+1)")
//   .style("color","green");

//d3.select('.item').text('select')
//d3.selectAll('.item').text('select')

//Select Descendent elements
//d3.select("#chart").select(".item").text("descent");

//Select nth-childelements
// d3.selectAll('.item:nth-child(even)').text('even')
// d3.selectAll('.item:nth-child(odd)').text('odd')
// d3.selectAll('.item:nth-child(2n)').text('even')
// d3.selectAll('.item:nth-child(2n+1)').text('odd')
//d3.selectAll('.item:nth-child(2n+3)').text('even')

//Add HTML Exercise
//d3.selectAll('.item:nth-child(2n').html('<strong>hello</strong>')

//Append
//d3.selectAll('.item:nth-child(2n').append("div").html('<strong>hello</strong>')
//d3.selectAll('.item:nth-child(2n').append("span").html('<strong> hello</strong>')

//Append Exercise 1
// d3.select("body")
//   .append ("p")
//   .html("I am learning <strong>D3</strong> today")
  
//Insert
//d3.selectAll('.item').insert("div",":nth-child(2n)").html('<strong>hello</strong>')

//Remove 
//d3.selectAll('.item:nth-child(2n)').remove()

//Add Attribute
//d3.selectAll('.item').attr('class','highlight')

//Attribute exericse
// d3.select('body')
//   .select('.container')
//   .insert('div')
//   .attr('width','200px')
//   .attr('height','300px')
//   .style('background-color','blue')

//Add CSS
//d3.selectAll('.item').classed('highlight',true)
// d3.selectAll('.item').classed({
// 	'highlight': true,
// 	'item': false,
// 	'bigger':true})

//Add CSS using style
//d3.selectAll('.item').style('color','green')
// d3.selectAll('.item:nth-child(2n)')
//   .style({
//     'background': '#268BD2',
//     'padding': '10px',
//     'margin' : '5px',
//     'color' : '#EEE8D5'
//   })

//CSS Exercise
// d3.select('body')
//   .insert('ul')
//   .html('<li>Apple</li><li>Orange</li><li>Pineapple</li><li>Durian</li><li>Mango</li><li>Peach</li><li>Grape</li>')

// d3.select('body')
//   .selectAll('li:nth-child(2n+1)')
//   .style('color','green')

// d3.select('body')
//   .selectAll('li:nth-child(2n+1)')
//   .style('color','red')
  
//Styling selecte elements
// d3.selectAll('.item').on("click", function() {
//   d3.select(this).style("color", "red");
// });

//Filter
// var even = d3.selectAll(".item").filter(":nth-child(even)");
// even.text('select')




