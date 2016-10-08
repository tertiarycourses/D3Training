//Select elements
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
  
//Binding data

 var myStyles = [
  { width: 200,
    color: '#A57706'},
  { width: 230,
    color: '#BD3613'},
  { width: 220,
    color: '#D11C24'},
  { width: 290,
    color: '#C61C6F'},
  { width: 236,
    color: '#595AB7'},
  { width: 230,
    color: '#2176C7'}
];

// d3.selectAll('.item')
//   .data(myStyles)
//   .style({
//     'color': 'white',
//     'background' : function(d) {
//       return d.color;
//     },
//     width : function(d) {
//       return d.width + 'px';
//     } 
//   })


// var myStyles = [
//   { width: 200,
//     name: 'Barot Bellingham',
//     color: '#A57706'},
//   { width: 230,
//     name: 'Hassum Harrod',
//     color: '#BD3613'},
//   { width: 220,
//     name: 'Jennifer Jerome',
//     color: '#D11C24'},
//   { width: 290,
//     name: 'Richard Tweed',
//     color: '#C61C6F'},
//   { width: 236,
//     name: 'Lorenzo Garcia',
//     color: '#595AB7'},
//   { width: 230,
//     name: 'Xhou Ta',
//     color: '#2176C7'}
// ];

// d3.selectAll('#chart').selectAll('div')
//   .data(myStyles)
//   .enter().append('div')
//   .classed('item', true)
//   .text(function(d) {
//     return d.name;
//   })
//   .style({
//     'color': 'white',
//     'background' : function(d) {
//       return d.color;
//     },
//     width : function(d) {
//       return d.width + 'px';
//     } 
//   })
// Update existing paragraphs
// var distances = [2.23, 2.39, 2.59, 2.77];

// var p = d3.select('body').selectAll('p')
//          .data(distances)
//          .text(String);
 
// // Add any new paragraphs needed
// p.enter() 
//   .append('p')
//   .text(String);
 
// // Remove any paragraphs no longer needed
// p.exit()
//   .remove();


//Styling selecte elements
// d3.selectAll('.item').on("click", function() {
//   d3.select(this).style("color", "red");
// });

//Filter
// var even = d3.selectAll(".item").filter(":nth-child(even)");
// even.text('select')


