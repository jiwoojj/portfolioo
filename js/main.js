jQuery(document).ready(function () {




  var sidebarClose = $(".sidebar_inner .close");
  var sidebarGnb = $("#sidebar_gnb > li > a");
  var gnbA = $('header #gnb>li>a');
  var gnbScroll = $('#gnb_scroll li a');
  var imgMobile = $('.portfolio_group .inner .mobile_box');
  var imgDesk = $('.portfolio_group .inner .desktop_box');




  //sidebar
  $("#sidebar_bg").css("display", "none");


  $("#sidebar_btn").on('click', function () {
    $("#sidebar_bg").css("display", "block");
    $("#sidebar").addClass("on");
  });

  sidebarClose.on('click', function () {
    $("#sidebar_bg").css("display", "none");
    $("#sidebar_btn").css("display", "none");
    $("#sidebar").removeClass("on");
  });





  //sidebar_submenu
  sidebarGnb.on('click', function () {
    $("#sidebar_bg").css("display", "none");
    $("#sidebar").removeClass("on");
  });







  // imgmobile
  imgMobile.hover(function () {
    $(this).find('.img_box').css('background-position', '0 100%');
  }, function () {
    $(this).find('.img_box').css('background-position', '0 0');
  });

  imgDesk.hover(function () {
    $(this).find('.img_box').css('background-position', '0 100%');
  }, function () {
    $(this).find('.img_box').css('background-position', '0 0');
  });







  // gnb Click
  $('#gnb_scroll a, #gnb > li > a, .scroll_down > a, .logo > a').on('click', function () {
    var $this = $(this);
    var href = $this.attr('href');

    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 450);
    return false;
  });






  //vh 계산
  function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
  }



  // gnb
  $(window).on("scroll", function () {

    var scroll = $(window).scrollTop();


    if (scroll > 0) {
      $('header').css('background', '#fff');
    } else {
      $('header').css('background', 'none');
    }

    if ($(window).scrollTop() < vh(81)) {
      gnbA.css('background', 'none');
      bgColor('home');
    } else {
      bgBack('home');
    }

    if ($(window).scrollTop() > vh(80)) {
      gnbA.css('background', 'none');
      bgColor('ability');
    } else {
      bgBack('ability');
    }

    if ($(window).scrollTop() > vh(160)) {
      gnbA.css('background', 'none');
      bgColor('portfolio');
    } else {
      bgBack('portfolio');
    }

    if ($(window).scrollTop() > vh(240)) {
      bgColor('portfolio2');
    } else {
      bgBack('portfolio2');
    }

    if ($(window).scrollTop() > vh(320)) {
      bgColor('portfolio3');
    } else {
      bgBack('portfolio3');
    }

    if ($(window).scrollTop() > vh(480)) {
      gnbA.css('background', 'none');
      bgColor('about');
    } else {
      bgBack('about');
    }

    if ($(window).scrollTop() > vh(580)) {
      gnbA.css('background', 'none');
      bgColor('contact');
    } else {
      bgBack('contact');
    }


  });




  // gnb_scroll
  function bgColor(name) {
    gnbScroll.css({
      'background': '#ccc',
      'width': '8px',
      'height': '8px'
    });

    $('#gnb_' + name).css('background', '#badaff');

    $('#gnb_scroll_' + name).css({
      'background': '#badaff',
      'width': '12px',
      'height': '12px'
    });
  }

  function bgBack(name) {
    $('#gnb_' + name).css('background', 'none');
    $('#gnb_scroll_' + name).css({
      'background': '#ccc',
      'width': '8px',
      'height': '8px'
    });
  }



  //vh ios 버그 방지
  function setVh() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
  }
  window.addEventListener('resize', setVh);
  setVh();




  // each scroll event (ability)
  const ability = $('.ability_box');
  const win = $(window);
  const winH = win.height();
  let abilityInfo = [];

  ability.each(function (e) {
    const $this = $(this);
    const $top = $this.offset().top;
    const $h = $this.height();
    abilityInfo.push({
      s: $top,
      e: $top + $h
    });
  });

  win.on('load scroll', function () {
    const winT = $(window).scrollTop();
    for (var i = 0; i < abilityInfo.length; i++) {
      if (abilityInfo[i].s - winH / 2 <= winT && abilityInfo[i].e > winT) {
        // ability.eq(i).siblings().removeClass('active');
        ability.eq(i).addClass('active');
      }
    }
  });









  // portfolio1
  $(window).scroll(function () {

    let winH = $(window).height();
    let winT = $(window).scrollTop();
    let obj2 = $('.text_action1');
    let obj2Top = obj2.offset().top;
    let obj2H = obj2.height();


    if (obj2Top - winH / 1.5 <= winT && obj2Top + obj2H > winT) {
      obj2.addClass('active');
    } else {
      obj2.removeClass('active');
    }


  });


  // portfolio2
  $(window).scroll(function () {

    let winH = $(window).height();
    let winT = $(window).scrollTop();
    let obj2 = $('.mockup_action');
    let obj2Top = obj2.offset().top;
    let obj2H = obj2.height();


    if (obj2Top - winH / 1.5 <= winT && obj2Top + obj2H > winT) {
      obj2.addClass('active');
    } else {
      obj2.removeClass('active');
    }


  });



  // portfolio3
  $(window).scroll(function () {

    let winH = $(window).height();
    let winT = $(window).scrollTop();
    let obj2 = $('.text_action3');
    let obj2Top = obj2.offset().top;
    let obj2H = obj2.height();


    if (obj2Top - winH / 1.5 <= winT && obj2Top + obj2H > winT) {
      obj2.addClass('active');
    } else {
      obj2.removeClass('active');
    }


  });





  // about
  $(window).scroll(function () {

    let winH = $(window).height();
    let winT = $(window).scrollTop();
    let obj3 = $('.right_action');
    let obj3Top = obj3.offset().top;
    let obj3H = obj3.height();


    if (obj3Top - winH / 1.5 <= winT && obj3Top + obj3H > winT) {
      obj3.addClass('active');
    } else {
      obj3.removeClass('active');
    }


  });





















});