


$('.enter').on('click', function(){
  //control landing page slides
  $('.up, .down').addClass('animate');
  $('.up, .down').one('transitionend', function(){
  $('.up, .down').addClass('removed');
})
  //remove enter button
  $(this).addClass('hidden');
  $('.enter').one('transitionend', function(){
  $('.enter').addClass('removed')
})
//show nav bar and logo
  $('.nav, .logo, .magic-line').removeClass('removed');
  setTimeout(function(){
  $('.nav, .logo, .magic-line').removeClass('hidden')},2000);
})


//slider
$('.nav').on('click', 'li', function(){
    $(".slider").css("transform","translateX("+$(this).index() * -25+"%)");
    $(".nav li").removeClass("selected");
    $(this).addClass("selected");
  });


//logo click
$('.logo').on('click', function(){
//slide landing page
  $('.up, .down').removeClass('removed');
  setTimeout(function(){
  $('.up, .down').removeClass('animate')
}, 500);
//hide logo and nav
  $('.logo, .nav, .magic-line').addClass('hidden');
  $('.logo, .nav, .magic-line').one('transitionend', function(){
  $('.logo, .nav, .magic-line').addClass('removed')
})
//show enter button
  $('.enter').removeClass('removed');
  setTimeout(function(){
  $('.enter').removeClass('hidden')}, 3000);
})


//nav underline animation
//variables
let nav = document.querySelector('.nav'),
    navItems = nav.children,
    magicLine = document.querySelector('.magic-line'),
    defaultSelectedNav = document.querySelector('.nav li.selected');

//animate the magicline
[].forEach.call(navItems, function(navItem) {
  navItem.addEventListener('click', function(ev) {
    ev.preventDefault();
    [].forEach.call(navItems, function(nv) {
      nv.classList.remove('selected');
    });
    this.classList.add('selected');
    magicLine.style.left = this.offsetLeft + 'px';
    magicLine.style.width = this.offsetWidth + 'px';
  });
});

//default starting postion (not working! due to page load while nav and magic-line are display:none, need to reset values when nav and magic line .hidden is removed)
magicLine.style.left = defaultSelectedNav.offsetLeft + 'px';
magicLine.style.width = defaultSelectedNav.offsetWidth + 'px';
