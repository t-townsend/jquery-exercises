$('nav li').hover(
    function() {
      $('ul', this).stop().slideDown(200);
    },
    function() {
      $('ul', this).stop().slideUp(200);
    }
  );






// $(document).ready(function(){
//     $("#menu li").hover(function(){
//       $(".dropdown-menu", this).slideDown(100);
//     }, function(){
//       $(".dropdown-menu", this).stop().slideUp(100);
//     });
//   })