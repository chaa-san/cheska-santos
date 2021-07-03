document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.nav-items').classList.toggle('show');
  document.querySelectorAll('.nav-items').forEach(item => item.classList.toggle('fade'));
});

$( '.menu-bar li a' ).on("click", function(){
  $('#toggle').hide();
});


// $( '.menu-bar li a' ).on("click", function(){
//   $('#toggle').click();
// });
