/* var slideindex=0;
showslide();

function showslide(){
	var i;
	var slide= document.getElementsByClassName("slide");
	var dots= document.getElementsByClassName("dot");
	for(i=0; i< slide.length; i++){
		slide[i].style.display = "none";
	}
	slideindex++;
	if(slideindex > slide.length){slideindex = 1}
	for (i=0; i<dots.length; i++){
		dots[i].className=dots[i].className.replace("active","");
	}
	slide[slideindex-1].style.display='block';
	dots[slideindex-1].className += 'active';
	setTimeout(showslide, 2000); // change image 
} */

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}