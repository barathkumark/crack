// Navbar JS

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 300){
        $('.fixed-top').css('background', 'transparent');
    } else{
        $('.fixed-top').css('background', 'rgba(0, 0, 0, 0.6)');
    }
});


// Multiply

function multiply(){
	num1 = document.getElementById("p1").value;
	num2 = document.getElementById("q1").value;
	result = num1 * num2;
	document.getElementById("result").value = result;
}

// When the user clicks on the button, scroll to the top of the document

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

