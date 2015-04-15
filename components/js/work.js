var work = [{
	'name' 	: "Alex Ordway",
	'num' 	: 5,
	'ext'	: "Alex_Ordway"
},{
	'name' : "Alexandra Goveia",
	'num' 	: 4,
	'ext'	: "Alexandra_Goveia"
},{
	'name' : "Alphonse Riang",
	'num' 	: 4,
	'ext'	: "Alphonse_Riang"
},{
	'name' : "Andrew Ahern",
	'num' 	: 3,
	'ext'	: "Andrew_Ahern"	
},{
	'name' : "Angie Belcolfine",
	'num' 	: 4,
	'ext'	: "Angie_Belcolfine"	
},{
	'name' : "Ashley Armstrong",
	'num' 	: 3,
	'ext'	: "Ashley_Armstrong"	
},{
	'name' : "Colleen D'Alessandro",
	'num' 	: 4,
	'ext'	: "Colleen_D'Alessandro"
},{
	'name' : "Jaron Cote",
	'num' 	: 3,
	'ext'	: "Jaron_Cote"	
},{
	'name' : "Jaysen Odom",
	'num' 	: 4,
	'ext'	: "Jaysen_Odom"	
},{
	'name' : "Jordan Harris",
	'num' 	: 5,
	'ext'	: "Jordan_Harris"	
},{
	'name' : "Kiel Anderson",
	'num' 	: 0,
	'ext'	: "Kiel_Anderson"	
},{
	'name' : "Marissa Maccioli",
	'num' 	: 5,
	'ext'	: "Marissa_Maccioli"	
},{
	'name' : "Mary Heelan",
	'num' 	: 5,
	'ext'	: "Mary_Heelan"	
},{
	'name' : "Megan Knapp",
	'num' 	: 2,
	'ext'	: "Megan_Knapp"	
},{
	'name' : "Tori Faieta",
	'num' 	: 4,
	'ext'	: "Tori_Faieta"	
},{
	'name' : "Tricia Belden",
	'num' 	: 4,
	'ext'	: "Tricia_Belden"	
}];

$(document).ready(function(){
	for(var i = 0; i < 16; i++){
		// console.log(work[i]);
	}

	generateWork(15);

	$('.gallery .image').click(function(){
		showWork($(this));
	})
});

function generateWork(j){//adds all of the pieces from the gallery to the gallery section

	var gallery = [];
	var x = 0;
	for(var i = 0; i < j; i++){
		for(var k = 1; k < work[i].num; k++){
			gallery[x] = "<div class=\"image\" value=\"" + i + "\"><img src=\"img/i/" + work[i].ext + "/" +work[i].ext + "_0" + k + "_s.png\"></div> \n";
			x++;
		}
	}
	shuffle(gallery);
	$('.gallery').append(gallery);

	// console.log(gallery);
}

function showWork(t){
	var piece = t.find('img');


	
	var src = piece.attr('src').substring(0, piece.attr('src').length - 5) + "l.png";

	$('.overlay .pane .image').empty();

	$('.overlay .pane .image').append("<img src=\"" + src + "\">");

	showOverlay();
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}