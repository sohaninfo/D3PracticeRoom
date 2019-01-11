function instance(msg) {
	d3.select("body").append('p').text(msg)
}

function drawCircle() {

	var svg = d3.select("#id1").append("svg").attr("height", 400).attr("width", 400)
	var circle = svg.append("circle").attr("cx", 100).attr("cy", 100).attr("r", 50)


}

function drawCircles(data) {
	var svg = d3.select("#id2").append("svg").attr("height", 400).attr("width", 800)

	svg.selectAll("circle").data(data).enter()
	.append("circle")
	.attr("cx", function(d){return d.cx})
	.attr("cy", function(d){return d.cy})
	.attr("r", function(d){return d.r})
}

function drawCirclesWithLabels(data) {

	var svg = d3.select('#id3').append('svg').attr('height', 1000).attr('width', 1000)
	var   elem = svg.selectAll('g').data(data.nodes).enter().append('g').attr("transform", function(d){return "translate("+d.x+", 80)"})

	var circles = elem.append("circle")
	   .attr("r", function(d){return d.r})
	   .attr("stroke", 'black')
	   .attr("fill", 'white')


	elem.append("text")
        .attr("dx", function(d){return -20})
        .text(function(d){return d.label})
}

function circle2(data) {
	var svg = d3.select('#id4').append('svg').attr('height', 200).attr('width', 1000)
	var elems = svg.selectAll('g').data(data.nodes).enter().append('g').attr('transform', function(d){return 'translate('+d.x+', 80)'})

	elems.append('circle')
		.attr('r', function(d){return d.r})
		.attr('stroke', 'blue')
		.attr('fill', 'red')

	elems.append('text')
		.attr('dx', function(d){return -20})
		.text(function(d){return d.label})
}

function drawRect(elem) {
	svg = d3.select(elem).append('svg').attr('height', 400).attr('width', 800)
	svg.append('rect').attr('y', 200).attr('x', 100).attr('height', 100).attr('width', 100).attr('fill', 'blue')
	svg.append('rect').attr('y', 200).attr('x', 250).attr('height', 100).attr('width', 100).attr('fill', 'red')
		.attr('rx', 25)
		.attr('ry', 55)
	svg.append('rect').attr('y', 200).attr('x', 360).attr('height', 100).attr('width', 100)
		.attr('fill', 'green')
		.attr('rx', 15)
		.attr('stroke', 'red')
		.attr('stroke-width', 5)
		

}
