var slideIndex = 0;

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  console.log(x);
  for (i = 0; i < x.length; i++) 
  {
    x[i].style.display = "none";
  }
  x[slideIndex].style.display = "block";
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 0
  }
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


carousel();
