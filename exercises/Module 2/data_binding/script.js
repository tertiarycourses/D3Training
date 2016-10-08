// Simple Data Binding
// d3.selectAll("p")
// 	.data([1,4,9,16,25,36])
// 	.text(function(d) { return d})

// Data Binding with index
// d3.selectAll("p")
// 	.data([1,4,9,16,25,36])
// 	.text(function(d,i) { return "The square of "+ (i+1) + " is " + d})

// Data Binding with JSON
var person = [{name:"Allly",height:160},
			  {name:"Belinda",height:155},
			  {name:"Jane",height:170},
			  {name:"Alfred",height:170},
			  {name:"Kevin",height:175},
			  {name:"John",height:140}]

d3.selectAll("p")
	.data(person,name)
	.text(function(d) { return d.name+"'s height is "+d.height+"cm"})

// Enter
// d3.select("body")
// 	.selectAll("p")
// 	.data([1,4,9,16,25,36,49,64])
// 	.text(function(d) { return d})
// 	.enter().append("p")
// 	.text(function(d) { return d})

//Exit
// d3.select("body")
// 	.selectAll("p")
// 	.data([1,4,9,16])
// 	.text(function(d) { return d})
// 	.exit().remove();