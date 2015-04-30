var work = [{
	'name' 	: "Alex Ordway",
	'num' 	: 5,
	'ext'	: "Alex_Ordway",
	'link' : ""	
},{
	'name' : "Alexandra Goveia",
	'num' 	: 4,
	'ext'	: "Alexandra_Goveia",
	'link' : ""	
},{
	'name' : "Alphonse Riang",
	'num' 	: 4,
	'ext'	: "Alphonse_Riang",
	'link' : ""	
},{
	'name' : "Andrew Ahern",
	'num' 	: 3,
	'ext'	: "Andrew_Ahern",
	'link' : "http://andrewaherndesign.wix.com/andrewaherndesign"		
},{
	'name' : "Angie Belcolfine",
	'num' 	: 4,
	'ext'	: "Angie_Belcolfine",
	'link' : ""		
},{
	'name' : "Ashley Armstrong",
	'num' 	: 3,
	'ext'	: "Ashley_Armstrong",
	'link' : "http://aarmstrongdesign.com"		
},{
	'name' : "Colleen D'Alessandro",
	'num' 	: 4,
	'ext'	: "Colleen_D'Alessandro",
	'link' : ""	
},{
	'name' : "Jaron Cote",
	'num' 	: 3,
	'ext'	: "Jaron_Cote",
	'link' : ""		
},{
	'name' : "Jaysen Odom",
	'num' 	: 4,
	'ext'	: "Jaysen_Odom",
	'link' : ""		
},{
	'name' : "Jordan Harris",
	'num' 	: 5,
	'ext'	: "Jordan_Harris",
	'link' : ""		
},{
	'name' : "Kiel Anderson",
	'num' 	: 0,
	'ext'	: "Kiel_Anderson",
	'link' : ""		
},{
	'name' : "Marissa Maccioli",
	'num' 	: 5,
	'ext'	: "Marissa_Maccioli",
	'link'	: "http://marissamac.com"	
},{
	'name' : "Mary Heelan",
	'num' 	: 5,
	'ext'	: "Mary_Heelan",
	'link' : "http://www.marycatherineheelan.com​"	
},{
	'name' : "Megan Knapp",
	'num' 	: 2,
	'ext'	: "Megan_Knapp",
	'link' : "http://meganknapponscreen.com"		
},{
	'name' : "Tori Faieta",
	'num' 	: 4,
	'ext'	: "Tori_Faieta",
	'link' : ""		
},{
	'name' : "Tricia Belden",
	'num' 	: 4,
	'ext'	: "Tricia_Belden",
	'link' : ""		
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

	 var val = t.attr('value');


	$('.overlay .pane .paneContent .colorSquare').css('background',colors[val]);

	$('.overlay .pane .paneContent .title').html(work[val].name);

	if(work[val].link.length > 0){
		$('.overlay .pane .paneContent .title').html("<a href=\"" + work[val].link + "\">" + work[val].name + "</a>");
	}

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