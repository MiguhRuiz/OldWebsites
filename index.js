var proyect = document.getElementsByClassName("proyect");
var proyect_square = document.getElementsByClassName("proyect_info");

function see(){
	$( proyect_square ).removeClass( "disabled" );
}

function dontsee () {
	$( proyect_square ).addClass( "disabled" );
}

$( proyect ).mouseenter( see ).mouseleave( dontsee );