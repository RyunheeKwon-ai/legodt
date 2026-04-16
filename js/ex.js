$(function () {
  // header
  pov = false;
  $("header").hide();
  let wrap = $("#visual .wrap").offset().top;
  $(window).on("scroll", function () {
    sc = $(this).scrollTop();
    if (sc >= wrap && !pov) {
      pov = true;
      $("header").show();
      $("header").stop().animate({ width: "100%" }, 10);
    }
  });

  //   visual
  i = 0;
  let total = $(".slide>div").length;

  function btn() {
    $(".btn ul li").css({ width: "20px", opacity: "0.5" });
    $(".btn ul li").eq(i).stop().animate({ width: "180px", opacity: "1" }, 800);
  }

  function slide() {
    $(".slide>div").fadeOut(500);
    $(".slide>div").eq(i).fadeIn(500);
  }

  let auto = setInterval(function () {
    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }

    btn();
    slide();
  }, 4000);

  // 함수시작
  $(".btn ul li").css({ width: "20px", opacity: "0.5" });
  $(".btn ul li").eq(i).stop().animate({ width: "180px", opacity: "1" });

  slide();

  $(".btn ul li").on("click", function () {
    clearInterval(auto);

    let i = $(this).index();

    $(".btn ul li").css({ width: "20px", opacity: "0.5" });
    $(".btn ul li").eq(i).stop().animate({ width: "180px", opacity: "1" });

    $(".slide>div").fadeOut(500);
    $(".slide>div").eq(i).fadeIn(500);
  });

  // con2

  pre = -600;
  let con2Tbg = $(".con2 .top .bg").offset().top;
  let con2Bbg = $(".con2 .bottom .bg").offset().top;

  $(window).on("scroll", function () {
    sc = $(this).scrollTop();
    console.log(sc);
    if (sc >= con2Tbg + pre) {
      $(".con2 .top .bg").addClass("on");
      $(".con2 .top h2").addClass("on");
      $(".con2 .top .chat").addClass("on");
    }
    if (sc >= con2Bbg + pre) {
      $(".con2 .bottom .bg").addClass("on");
      $(".con2 .bottom .chat").addClass("on");
    }
  });

  // con3
  //컬러선택
  $(".con3 .top li").on("mouseenter", function () {
    num = $(this).index();
    $(".con3 .top li")
      .eq(num)
      .find(" .color>div")
      .on("click", function () {
        let i = $(this).index();

        $(".con3 .top li").eq(num).find(".color div").removeClass("on");
        $(this).addClass("on");

        $(".con3 .top li").eq(num).find(".image .option").removeClass("on");
        $(".con3 .top li").eq(num).find(".image .option").eq(i).addClass("on");
      });
  });
  $(".con3 .bottom li").on("mouseenter", function () {
    let num = $(this).index();
    $(".con3 .bottom li")
      .eq(num)
      .find(" .color>div")
      .on("click", function () {
        let i = $(this).index();

        $(".con3 .bottom li").eq(num).find(".color div").removeClass("on");
        $(this).addClass("on");

        $(".con3 .bottom li").eq(num).find(".image .option").removeClass("on");
        $(".con3 .bottom li")
          .eq(num)
          .find(".image .option")
          .eq(i)
          .addClass("on");
      });
  });

  // con3 scroll
  pre = -500;
  let con3 = $(".con3").offset().top;

  $(window).on("scroll", function () {
    sc = $(this).scrollTop();
    console.log(sc);
    if (sc >= con3 + pre) {
      $(".con3").addClass("on");
    }
  });

  // con4
  let stop;
  let width = $(".con4 .slide li").width() + 32;

  function next() {
    $(".con4 .slide")
      .stop()
      .animate({ "margin-left": `${-width}px` }, function () {
        $(".con4 .slide li:first-child").appendTo(".con4 .slide");
        $(".con4 .slide").css({ "margin-left": 0 });
      });
  }
  function prev() {
    $(".con4 .slide li:last-child").prependTo(".con4 .slide");
    $(".con4 .slide").css({ "margin-left": `${-width}px` });
    $(".con4 .slide").stop().animate({ "margin-left": 0 });
  }
  function con04() {
    stop = setInterval(function () {
      next();
    }, 3000);
  }
  // con4함수시작
  $(".con4 .arrow .prev").on("click", function () {
    clearInterval(stop);
    prev();
    con04();
  });

  $(".con4 .arrow .next").on("click", function () {
    clearInterval(stop);
    next();
    con04();
  });

  con04();
});
