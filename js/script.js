let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
$(document).ready(function () {
  //phone size menu onclick
  if ($(window).width() <= 991) {
    $("#menu-id").click(function(e) {
      e.preventDefault();
      $('.menu-bars .bar').toggleClass('hide-icon');
      $('.menu-bars .times').toggleClass('hide-icon');
      $(".navgition").toggleClass("reset-left");
     
      $("body").toggleClass("overflow");
      $("html").toggleClass("overflow");

  });
  $(".nav-head .close-btn").click(function() {
      $(".navgition").removeClass("reset-left");
      $(".menu-bars .bars").toggleClass("open-bars");
      $(".menu-bars .bars").toggleClass("close-bars");
      $("body").removeClass("overflow");
      $("html").removeClass("overflow");
  });
};
//////////////////////////////////////// password verefication  /////////////////////////////
$(".inputs").keyup(function () {
  if (this.value.length == this.maxLength) {
    $(this).next('.inputs').focus();
  }
});


 
  

  
   

 
   //slide down menu
   $(".menu-item-has-children a").click(function(e) {

         
    $(this).siblings(".sub-menu ").slideToggle(400);

  
     
        $(this).toggleClass("active");
        $(".menu-item-has-children a").not(this).removeClass("active");
    
});


  //fixed nav
  // $stickyNav = $(".top-header");
  // $(window).on("scroll load", function () {
  //   var scroll = $(window).scrollTop();
  //   if (scroll >= 200) {
  //     $stickyNav.addClass("fixed-nav", 500);
  //   } else {
  //     $stickyNav.removeClass("fixed-nav", 500);
  //   }
  //   if (scroll == 0) {
  //     $stickyNav.removeClass("fixed-nav", 500);
  //   }
  // });
  // var $stickyheader = $("header");
  // lastScroll = 0;
  // $(window).on("scroll load", function () {
  //   var scroll = $(window).scrollTop();
  //   if (lastScroll - scroll > 0) {
  //     $stickyheader.addClass("fixed-header", { duration: 1000 });
  //   } else if (lastScroll - scroll >= 0 && $(window).width() <= 991) {
  //     $stickyheader.addClass("fixed-header", { duration: 1000 });
  //   } else {
  //     $stickyheader.removeClass("fixed-header", { duration: 500 });
  //   }
  //   lastScroll = scroll;
  //   if (scroll == 0) {
  //     $stickyheader.removeClass("fixed-header", { duration: 500 });
  //   }
  // });

  ///////// ** upload images ** /////////



  ImgUpload();


  function ImgUpload() {
      var imgWrap = "";
      var imgArray = [];

      $('.upload__inputfile').each(function() {
          $(this).on('change', function(e) {
              imgWrap = $(this).closest('.upload__box').find('.upload__img-wrap');
              var maxLength = $(this).attr('data-max_length');

              var files = e.target.files;
              var filesArr = Array.prototype.slice.call(files);
              var iterator = 0;
              filesArr.forEach(function(f, index) {

                  if (!f.type.match('image.*')) {
                      return;
                  }

                  if (imgArray.length > maxLength) {
                      return false
                  } else {
                      var len = 0;
                      for (var i = 0; i < imgArray.length; i++) {
                          if (imgArray[i] !== undefined) {
                              len++;
                          }
                      }
                      if (len > maxLength) {
                          return false;
                      } else {
                          imgArray.push(f);

                          var reader = new FileReader();
                          reader.onload = function(e) {
                              var html = "<div class='upload__img-box'><div style='background-image: url(" + e.target.result + ")' data-number='" + $(".upload__img-close").length + "' data-file='" + f.name + "' class='img-bg'><div class='upload__img-close'></div></div></div>";
                              imgWrap.append(html);
                              iterator++;
                          }
                          reader.readAsDataURL(f);
                      }
                  }
              });
          });
      });

      $('body').on('click', ".upload__img-close", function(e) {
          var file = $(this).parent().data("file");
          for (var i = 0; i < imgArray.length; i++) {
              if (imgArray[i].name === file) {
                  imgArray.splice(i, 1);
                  break;
              }
          }
          $(this).parent().parent().remove();
      });
  }




  
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });



//////////////////////////// delete product from cart ////////////////////////////////
$('.delete-product').on('click', function(){
  $(this).closest(".cart-block").remove();
});

$('.delete-btn').on('click', function(){
    $(this).closest(".table-record").remove();
  });
//////////////////////////////// add to cart counter  /////////////////////////////////////////

$('.minus').click(function () {
  var $input = $(this).parent().find('input');
  var count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
  $input.change();
  return false;
});
$('.plus').click(function () {
  var $input = $(this).parent().find('input');
  $input.val(parseInt($input.val()) + 1);
  $input.change();
  return false;
});






});

