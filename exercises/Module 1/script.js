var svg = d3.select("body")
	.append("svg")
	.attr("height","100%")
	.attr("width","100%");

svg.append("rect")
	.attr("x","100")
	.attr("y","100")
	.attr("width","200")
	.attr("height","200")
	.attr("fill","red");