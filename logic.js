var num = 200; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.topnav').addClass('fixed');
    } else {
        $('.topnav').removeClass('fixed');
    }
});
setTimeout(function(){$('.text-anim').toggleClass('animate');
},300);

function myFunction() {
  var x =  document.getElementById("myTopnav");

  
  if (!x.classList.contains("responsive")){
    x.classList.add('responsive');
  }
  else{
      x.classList.remove('responsive');
    }
  

}
