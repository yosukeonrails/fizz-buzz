

	$(document).ready(function(){


var clickCount=0

    $(".submit-button").click(function(){

		var inputed_number = parseInt($(".fizzbuzz-input").val()) 

		if(Number.isInteger(inputed_number)){
			
			fizzBuzzCounter(inputed_number);

		} else {alert('Not a number')}

			clickCount=clickCount+1

			console.log(clickCount)

			// if(clickCount==2){

			
			// }


});


   
      

	// $(".submit-button").click(function(){

	// 	if(inputed_number % 1 != 0){
	// 		alert('not a whole number! please input whole number')
	// 	} else {


	// 		console.log('yep it went well'+inputed_number)
	// 	}
		

	// })
		
		


	})



	function fizzBuzzCounter(numberInputed){

    var i=0
    var i=numberInputed

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