var students = [
		"Alex",
		"Allie",
		"Alphonse",
		"Andrew",
		"Angie",
		"Ashley",
		"Brian",
		"Colleen",
		"Emily",
		"Jaron",
		"Jaysen",
		"Jordan",
		"Kiel",
		"Marissa",
		"Mary",
		"Meg",
		"Tori",
		"Tricia"
	];

function generateStudents(){

	for(var i = 0; i < students.length; i++){

		$('.students').append("<div class=\"profile\"><img src=\"img/p/" + students[i] + "_Wall.png\"></div>");
	}
}

$(document).ready(function(){
	generateStudents();
});