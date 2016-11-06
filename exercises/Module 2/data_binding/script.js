// Simple Data Binding - Enter

// var a = [1,4,9,16,25,36];

// d3.selectAll("p")
// 	.data(a)
// 	.enter().append("p")
// 	.text(function(d) {return d;});

// Data Binding - Enter Exercise
// var a = ["Ally","Belinda","Jane","Alfred","Kevin"];

// d3.select("body")
// 	.append("ul")

// d3.selectAll("li")
// 	.data(a)
// 	.enter().append("li")
// 	.text(function(d) {return d;});

// Exit
// var a = [1,4,9];

// d3.selectAll("p")
// 	.data(a)
// 	.text(function(d) {return d;})
// 	.exit().remove("p");

// Exit Exercise
// var a = ["Ally","Belinda","Jane","Alfred","Kevin"];

// d3.selectAll("li")
// 	.data(a)
// 	.text(function(d) {return d;})
// 	.exit().remove("li");

// Function Exercise
// var a = [1,2,3,4,5];
// d3.selectAll("p")
// 	.data(a)
// 	.enter().append("p")
// 	.text(function(d) {
// 		return "The square of "+d+" is "+(d*d);}
// 		);

// Index input to the function
// d3.selectAll("li")
// 	.text(function(d,i) {
// 		return "The square of "+i+" is "+(i*i);}
// 		);

// Exercise: Data Binding with index
// var a = [1,4,9,16,25,36];
// d3.selectAll("p")
// 	.data(a)
// 	.enter().append("p")
// 	.text(function(d,i) { 
// 	return "The square of "+ (i+1) + " is " + d;}
// 	)

// Data Binding with JSON
// var person = [
// 	{name:"Allly",height:160},
// 	{name:"Belinda",height:155},
// 	{name:"Jane",height:170},
// 	{name:"Alfred",height:170},
// 	{name:"Kevin",height:175},
// 	{name:"John",height:140}
// 	];

// d3.selectAll("p")
// 	.data(person)
// 	.enter().append("p")
// 	.text(function(d) {
// 		return d.name + " height is " + d.height;}
// 		);

// Exercise: JSON data binding 
// var person = [
// 	{name:"Allly",height:160,weight:55},
// 	{name:"Belinda",height:155,weight:45},
// 	{name:"Jane",height:170,weight:58},
// 	{name:"Alfred",height:170,weight:45},
// 	{name:"Kevin",height:175,weight:58},
// 	{name:"John",height:140,weight:45}
// 	];

// d3.selectAll("p")
// 	.data(person)
// 	.enter().append("p")
// 	.text(function(d) {
// 		return d.name + " height is " + d.height +
//  			" weight is "+ d.weight;}
// 		);

// Push data
// var a = [];
// var b = [1,2,3,4,5];
// for (i in b) {
// 	a.push(b[i]*b[i]);
// }
// console.log(b);
// console.log(a);

var myStyles = [
  { width: 200, color: '#A57706'},
  { width: 230, color: '#BD3613'},
  { width: 220, color: '#D11C24'},
  { width: 290, color: '#C61C6F'}
];

d3.selectAll("div")
	.data(myStyles)
	.style("color", "white")
	.style("background", function(d) {
      return d.color;
    	})
    .style("width", function(d) {
      return d.width + "px";
    	})



