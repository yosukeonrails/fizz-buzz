

	$(document).ready(function(){


		
		fizzBuzzCounter();


	})

	function fizzBuzzCounter(){

    var i=0

		while(i<100){

			var i=i+1
 		 if(i%3==0 && i%5==0){
 		 	$('ul').append('<li>fizz Buzz</li><br>')
 		 }
		else if (i%3==0){

			$('ul').append('<li>fizz</li><br>')
			} else if (i%5==0){
				$('ul').append('<li>buzz</li><br>')
			}

			else {
				$('ul').append('<li>'+i+'</li><br>')
			}

		}	
}