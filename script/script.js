
//Set up the drawing environment here
var margin = {t:20,r:20,b:20,l:20};
var width = document.getElementById('plot').clientWidth-margin.l-margin.r,
	height = document.getElementById('plot').clientHeight-margin.t-margin.b;

var plot = d3.select('.canvas')
	.append('svg')
	.attr('width',width+margin.l+margin.r)
	.attr('height',height+margin.t+margin.b)
	.append('g')
	.attr('class','plot')
	.attr('transform','translate('+margin.l+','+margin.r+')')

	//.attr('transform','translate()') --> complete this line here


//Start with 100 symbols
var numOfSymbols = 100;



//Create an array, generate objects to push into the array
//Attributes of these symbols are
// --> x position: between 0 and width
// --> y position: betewen 0 and height
// --> size: between 0 and 100x100
// --> type: circle or square
// --> color
var symbols =[], sum = 0;



for(var i=0;i<numOfSymbols;i++){
	var newSymbols = Math.random();

	symbols.push(Math.random() )
	sum = sum + newSymbols;
	console.log("sum", sum);


}
console.log(symbols);


//With the array you've created and populated, draw circles to represent these symbols
symbols.forEach(function(trial,index){
		console.log("newSy", newSymbols,"trial: ", trial,"i", index);
	onrandom1 = Math.random();
	onrandom2 = Math.random();
	onrandom3 = Math.random();
	onrandom4 = Math.random();

	if(trial <.60) {
		plot
			.append('circle')
			.attr('cx', onrandom1 * width)
			.attr('cy', onrandom3 * height)
			.attr('r', 50 * onrandom2)
			.style('fill', 'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')')
	}
	else {
		plot
		.append('rect')
		.attr('x',onrandom4 * (width-onrandom3*height))
		.attr('y',onrandom2 * (onrandom1*height))
		.attr('width',onrandom1*width/6)
		.attr('height',onrandom4*height/2)
		.style('fill','rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')')

}})


