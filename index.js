// Miguh's Site v5 JS File

// Variables
var proyect1 = document.getElementById("proyect1");
var proyect2 = document.getElementById("proyect2");
var proyect3 = document.getElementById("proyect3");
var proyect_square = document.getElementsByClassName("proyect_info");
var square1 = proyect_square[0];
var square2 = proyect_square[1];
var square3 = proyect_square[2];

// Functions
function see1(){
	$( square1 ).removeClass( "disabled" );
}

function dontsee1 () {
	$( square1 ).addClass( "disabled" );
}

function see2(){
	$( square2 ).removeClass( "disabled" );
}

function dontsee2 () {
	$( square2 ).addClass( "disabled" );
}

function see3(){
	$( square3 ).removeClass( "disabled" );
}

function dontsee3 () {
	$( square3 ).addClass( "disabled" );
}

// Instructions
$( proyect1 ).mouseenter( see1 ).mouseleave( dontsee1 );
$( proyect2 ).mouseenter( see2 ).mouseleave( dontsee2 );
$( proyect3 ).mouseenter( see3 ).mouseleave( dontsee3 );