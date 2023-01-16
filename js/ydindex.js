$(".img1").mousemove(function (e) {
  // values: e.clientX, e.clientY, e.pageX, e.pageY
  console.log(e.clientX);
});

$(".correctdemo-tooth-demo").click(function () {
  clear();
  $(this).addClass("active");
});

$(".demo2").click(function () {
  $(this).addClass("correctdemo-tooth-demo2");
});
$(".smiletest-humamimg-box").click(function () {
  window.location.href = "./ydpages/test.html";
});

window.onscroll = function () {
  var t = document.documentElement.scrollTop || document.body.scrollTop;
  var top_div = document.getElementById("top_div");
  var show_semicircle = document.getElementsByClassName("show-semicircle");
  console.log(t);
  if (t >= 300 && t < 400) {
    var cur = 0;
    var timer = setInterval(function () {
      if (cur > 4) {
        clearInterval(timer);
      } else {
        cur++;
        document.getElementById("div" + cur).style.display = "block";
      }
    }, 200);
  }
  if (t >= 500 && t < 600) {
    var cur2 = 0;
    var timer2 = setInterval(function () {
      if (cur2 > 3) {
        clearInterval(timer2);
      } else {
        cur2++;
        document.getElementById("box" + cur2).style.display = "block";
      }
    }, 200);
  }
  if (t >= 1085 && t < 1150) {
    var cur3 = 0;
    var timer3 = setInterval(function () {
      if (cur3 > 8) {
        clearInterval(timer3);
      } else {
        cur3++;
        document.getElementById("divbox" + cur3).style.display = "block";
      }
    }, 200);
  }
};
// 轮播图
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let changedata = "demo1";
function checkxq() {
  console.log(
    "check",
    $(".tooth" + changedata.slice(4, 6)).attr("style", "display:block;")
  );
  $(".tooth" + changedata.slice(4, 6)).attr("style", "display:block;");
}
// + changedata.slice(4, 5)
function change(e) {
  console.log("#" + e);
  changedata = e;
  console.log("check", changedata.slice(4, 6));

  console.log("change", $("#" + e).data("img1"));
  console.log("change", $("#" + e).data("img2"));

  $(".correctdemo-demo").attr("style", "display:flex;");
  $(".correctdemo-demo-ri").attr("style", "display:none;");
  // $(".correctdemo-demo2").attr("style", "display:none;");
  // $(".correctdemo-demo3").attr("style", "display:none;");
  // $(".correctdemo-demo4").attr("style", "display:none;");
  // $(".correctdemo-demo5").attr("style", "display:none;");
  // $(".correctdemo-demo6").attr("style", "display:none;");
  // $(".correctdemo-demo7").attr("style", "display:none;");
  // $(".correctdemo-demo8").attr("style", "display:none;");
  // $(".correctdemo-demo9").attr("style", "display:none;");
  // $(".correctdemo-demo10").attr("style", "display:none;");
  // $(".correctdemo-demo11").attr("style", "display:none;");
  // $(".correctdemo-demo12").attr("style", "display:none;");
  document.getElementById("slider-img1").src = $("#" + e).data("img1");
  document.getElementById("slider-img2").src = $("#" + e).data("img2");

  // if (e == "demo1") {
  // } else if (e == "demo2") {
  // $(".correctdemo-demo").attr("style", "display:none;");
  // $(".correctdemo-demo2").attr("style", "display:flex;");
  // $(".correctdemo-demo3").attr("style", "display:none;");
  // $(".correctdemo-demo4").attr("style", "display:none;");
  // $(".correctdemo-demo5").attr("style", "display:none;");
  // $(".correctdemo-demo6").attr("style", "display:none;");
  // $(".correctdemo-demo7").attr("style", "display:none;");
  // $(".correctdemo-demo8").attr("style", "display:none;");
  // $(".correctdemo-demo9").attr("style", "display:none;");
  // $(".correctdemo-demo10").attr("style", "display:none;");
  // $(".correctdemo-demo11").attr("style", "display:none;");
  // $(".correctdemo-demo12").attr("style", "display:none;");
  // } else if (e == "demo3") {
  //   $(".correctdemo-demo").attr("style", "display:none;");
  //   $(".correctdemo-demo2").attr("style", "display:none;");
  //   $(".correctdemo-demo3").attr("style", "display:flex;");
  //   $(".correctdemo-demo4").attr("style", "display:none;");
  //   $(".correctdemo-demo5").attr("style", "display:none;");
  //   $(".correctdemo-demo6").attr("style", "display:none;");
  //   $(".correctdemo-demo7").attr("style", "display:none;");
  //   $(".correctdemo-demo8").attr("style", "display:none;");
  //   $(".correctdemo-demo9").attr("style", "display:none;");
  //   $(".correctdemo-demo10").attr("style", "display:none;");
  //   $(".correctdemo-demo11").attr("style", "display:none;");
  //   $(".correctdemo-demo12").attr("style", "display:none;");
  // } else if (e == 4) {
  //   $(".correctdemo-demo").attr("style", "display:none;");
  //   $(".correctdemo-demo2").attr("style", "display:none;");
  //   $(".correctdemo-demo3").attr("style", "display:none;");
  //   $(".correctdemo-demo4").attr("style", "display:flex;");
  //   $(".correctdemo-demo5").attr("style", "display:none;");
  //   $(".correctdemo-demo6").attr("style", "display:none;");
  //   $(".correctdemo-demo7").attr("style", "display:none;");
  //   $(".correctdemo-demo8").attr("style", "display:none;");
  //   $(".correctdemo-demo9").attr("style", "display:none;");
  //   $(".correctdemo-demo10").attr("style", "display:none;");
  //   $(".correctdemo-demo11").attr("style", "display:none;");
  //   $(".correctdemo-demo12").attr("style", "display:none;");
  // } else if (e == 5) {
  //   $(".correctdemo-demo").attr("style", "display:none;");
  //   $(".correctdemo-demo2").attr("style", "display:none;");
  //   $(".correctdemo-demo3").attr("style", "display:none;");
  //   $(".correctdemo-demo4").attr("style", "display:none;");
  //   $(".correctdemo-demo5").attr("style", "display:flex;");
  //   $(".correctdemo-demo6").attr("style", "display:none;");
  //   $(".correctdemo-demo7").attr("style", "display:none;");
  //   $(".correctdemo-demo8").attr("style", "display:none;");
  //   $(".correctdemo-demo9").attr("style", "display:none;");
  //   $(".correctdemo-demo10").attr("style", "display:none;");
  //   $(".correctdemo-demo11").attr("style", "display:none;");
  //   $(".correctdemo-demo12").attr("style", "display:none;");
  // } else if (e == 6) {
  //   $(".correctdemo-demo").attr("style", "display:none;");
  //   $(".correctdemo-demo2").attr("style", "display:none;");
  //   $(".correctdemo-demo3").attr("style", "display:none;");
  //   $(".correctdemo-demo4").attr("style", "display:none;");
  //   $(".correctdemo-demo5").attr("style", "display:none;");
  //   $(".correctdemo-demo6").attr("style", "display:flex;");
  //   $(".correctdemo-demo7").attr("style", "display:none;");
  //   $(".correctdemo-demo8").attr("style", "display:none;");
  //   $(".correctdemo-demo9").attr("style", "display:none;");
  //   $(".correctdemo-demo10").attr("style", "display:none;");
  //   $(".correctdemo-demo11").attr("style", "display:none;");
  //   $(".correctdemo-demo12").attr("style", "display:none;");
  // } else if (e == 7) {
  //   $(".correctdemo-demo").attr("style", "display:none;");
  //   $(".correctdemo-demo2").attr("style", "display:none;");
  //   $(".correctdemo-demo3").attr("style", "display:none;");
  //   $(".correctdemo-demo4").attr("style", "display:none;");
  //   $(".correctdemo-demo5").attr("style", "display:none;");
  //   $(".correctdemo-demo6").attr("style", "display:none;");
  //   $(".correctdemo-demo7").attr("style", "display:flex;");
  //   $(".correctdemo-demo8").attr("style", "display:none;");
  //   $(".correctdemo-demo9").attr("style", "display:none;");
  //   $(".correctdemo-demo10").attr("style", "display:none;");
  //   $(".correctdemo-demo11").attr("style", "display:none;");
  //   $(".correctdemo-demo12").attr("style", "display:none;");
  // } else if (e == 8) {
  //   $(".correctdemo-demo").attr("style", "display:none;");
  //   $(".correctdemo-demo2").attr("style", "display:none;");
  //   $(".correctdemo-demo3").attr("style", "display:none;");
  //   $(".correctdemo-demo4").attr("style", "display:none;");
  //   $(".correctdemo-demo5").attr("style", "display:none;");
  //   $(".correctdemo-demo6").attr("style", "display:none;");
  //   $(".correctdemo-demo7").attr("style", "display:none;");
  //   $(".correctdemo-demo8").attr("style", "display:flex;");
  //   $(".correctdemo-demo9").attr("style", "display:none;");
  //   $(".correctdemo-demo10").attr("style", "display:none;");
  //   $(".correctdemo-demo11").attr("style", "display:none;");
  //   $(".correctdemo-demo12").attr("style", "display:none;");
  // } else if (e == 9) {
  //   $(".correctdemo-demo").attr("style", "display:none;");
  //   $(".correctdemo-demo2").attr("style", "display:none;");
  //   $(".correctdemo-demo3").attr("style", "display:none;");
  //   $(".correctdemo-demo4").attr("style", "display:none;");
  //   $(".correctdemo-demo5").attr("style", "display:none;");
  //   $(".correctdemo-demo6").attr("style", "display:none;");
  //   $(".correctdemo-demo7").attr("style", "display:none;");
  //   $(".correctdemo-demo8").attr("style", "display:none;");
  //   $(".correctdemo-demo9").attr("style", "display:flex;");
  //   $(".correctdemo-demo10").attr("style", "display:none;");
  //   $(".correctdemo-demo11").attr("style", "display:none;");
  //   $(".correctdemo-demo12").attr("style", "display:none;");
  // } else if (e == 10) {
  //   $(".correctdemo-demo").attr("style", "display:none;");
  //   $(".correctdemo-demo2").attr("style", "display:none;");
  //   $(".correctdemo-demo3").attr("style", "display:none;");
  //   $(".correctdemo-demo4").attr("style", "display:none;");
  //   $(".correctdemo-demo5").attr("style", "display:none;");
  //   $(".correctdemo-demo6").attr("style", "display:none;");
  //   $(".correctdemo-demo7").attr("style", "display:none;");
  //   $(".correctdemo-demo8").attr("style", "display:none;");
  //   $(".correctdemo-demo9").attr("style", "display:none;");
  //   $(".correctdemo-demo10").attr("style", "display:flex;");
  //   $(".correctdemo-demo11").attr("style", "display:none;");
  //   $(".correctdemo-demo12").attr("style", "display:none;");
  // } else if (e == 11) {
  //   $(".correctdemo-demo").attr("style", "display:none;");
  //   $(".correctdemo-demo2").attr("style", "display:none;");
  //   $(".correctdemo-demo3").attr("style", "display:none;");
  //   $(".correctdemo-demo4").attr("style", "display:none;");
  //   $(".correctdemo-demo5").attr("style", "display:none;");
  //   $(".correctdemo-demo6").attr("style", "display:none;");
  //   $(".correctdemo-demo7").attr("style", "display:none;");
  //   $(".correctdemo-demo8").attr("style", "display:none;");
  //   $(".correctdemo-demo9").attr("style", "display:none;");
  //   $(".correctdemo-demo10").attr("style", "display:none;");
  //   $(".correctdemo-demo11").attr("style", "display:flex;");
  //   $(".correctdemo-demo12").attr("style", "display:none;");
  // } else if (e == 12) {
  //   $(".correctdemo-demo").attr("style", "display:none;");
  //   $(".correctdemo-demo2").attr("style", "display:none;");
  //   $(".correctdemo-demo3").attr("style", "display:none;");
  //   $(".correctdemo-demo4").attr("style", "display:none;");
  //   $(".correctdemo-demo5").attr("style", "display:none;");
  //   $(".correctdemo-demo6").attr("style", "display:none;");
  //   $(".correctdemo-demo7").attr("style", "display:none;");
  //   $(".correctdemo-demo8").attr("style", "display:none;");
  //   $(".correctdemo-demo9").attr("style", "display:none;");
  //   $(".correctdemo-demo10").attr("style", "display:none;");
  //   $(".correctdemo-demo11").attr("style", "display:none;");
  //   $(".correctdemo-demo12").attr("style", "display:flex;");
  // }
}

//div单选样式
function clear() {
  $(".correctdemo-tooth-demo").each(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    }
  });
}

function changeTooth() {
  let dom = $(".l-img.active");
  // 删除 active class
  dom.removeClass("active");
  //
  dom.siblings().addClass("active");
}
