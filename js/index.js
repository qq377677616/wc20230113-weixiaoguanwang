$(".correctdemo-tooth-demo").click(function () {
  clear();
  $(this).addClass("active");
});
$(function () {
  $(".img").mousedown(function (e) {
    $(".correctdemo-demo-le-top").mousemove(function (e) {
      // values: e.clientX, e.clientY, e.pageX, e.pageY
      console.log("tuo", e.pageX);
      var pax = e.pageX;
      $(".img1").attr("style", "left:pax");
    });
    $(".correctdemo-demo-le-top").mouseup(function (e) {
      // values: e.clientX, e.clientY, e.pageX, e.pageY
      $(".correctdemo-demo-le-top").off("mousemove");
    });
  });
});

$(".demo2").click(function () {
  $(this).addClass("correctdemo-tooth-demo2");
});

function index() {
  console.log(2);
  var ii = document.getElementById("headif");
}
index();

$(".index2").click(function () {
  window.location.href = "../pages/about.html";
});
window.onscroll = function () {
  var t = document.documentElement.scrollTop || document.body.scrollTop;
  var top_div = document.getElementById("top_div");
  var show_semicircle = document.getElementsByClassName("show-semicircle");

  if (t >= 900) {
    var tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 750,
    });

    // 增加子项
    tl.add({
      targets: "#div1",
      opacity: 1,
    })
      .add({
        targets: "#div2",
        opacity: 1,
      })
      .add({
        targets: "#div3",
        opacity: 1,
      })
      .add({
        targets: "#div4",
        opacity: 1,
      });

    // var cur = 0;
    // var timer = setInterval(function() {
    //     if (cur > 4) {
    //         clearInterval(timer);
    //     } else {
    //         cur++;
    //         document.getElementById('div' + cur).style.display = 'block';
    //     }
    // }, 1000);
  }

  if (t >= 1500 && t < 1750) {
    var t2 = anime.timeline({
      easing: "easeOutExpo",
      duration: 750,
    });

    // 增加子项
    t2.add({
      targets: ".correct-context-human-le",
      opacity: 1,
    }).add({
      targets: ".correct-context-human-ri",
      opacity: 1,
    });

    // var cur2 = 0;
    // var timer2 = setInterval(function() {
    //     if (cur2 > 2) {
    //         clearInterval(timer2);
    //     } else {
    //         cur2++;
    //         document.getElementById('box' + cur2).style.display = 'block';
    //     }
    // }, 1000);
  }
  if (t >= 4500 && t < 4850) {
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

function change1() {
  $(".correctdemo-demo-ri").attr({
    style: "display:none",
  });
  $(".correctdemo-demo").attr("style", "display:flex;");
  $(".correctdemo-demo2").attr("style", "display:none;");
  $(".correctdemo-demo3").attr("style", "display:none;");
  $(".correctdemo-demo4").attr("style", "display:none;");
  $(".correctdemo-demo5").attr("style", "display:none;");
  $(".correctdemo-demo6").attr("style", "display:none;");
  $(".correctdemo-demo7").attr("style", "display:none;");
  $(".correctdemo-demo8").attr("style", "display:none;");
  $(".correctdemo-demo9").attr("style", "display:none;");
  $(".correctdemo-demo10").attr("style", "display:none;");
  $(".correctdemo-demo11").attr("style", "display:none;");
  $(".correctdemo-demo12").attr("style", "display:none;");
}

function change2() {
  $(".correctdemo-demo-ri").attr({
    style: "display:none",
  });
  $(".correctdemo-demo").attr("style", "display:none;");
  $(".correctdemo-demo2").attr("style", "display:flex;");
  $(".correctdemo-demo3").attr("style", "display:none;");
  $(".correctdemo-demo4").attr("style", "display:none;");
  $(".correctdemo-demo5").attr("style", "display:none;");
  $(".correctdemo-demo6").attr("style", "display:none;");
  $(".correctdemo-demo7").attr("style", "display:none;");
  $(".correctdemo-demo8").attr("style", "display:none;");
  $(".correctdemo-demo9").attr("style", "display:none;");
  $(".correctdemo-demo10").attr("style", "display:none;");
  $(".correctdemo-demo11").attr("style", "display:none;");
  $(".correctdemo-demo12").attr("style", "display:none;");
}

function change3() {
  $(".correctdemo-demo-ri").attr({
    style: "display:none",
  });
  $(".correctdemo-demo").attr("style", "display:none;");
  $(".correctdemo-demo2").attr("style", "display:none;");
  $(".correctdemo-demo3").attr("style", "display:flex;");
  $(".correctdemo-demo4").attr("style", "display:none;");
  $(".correctdemo-demo5").attr("style", "display:none;");
  $(".correctdemo-demo6").attr("style", "display:none;");
  $(".correctdemo-demo7").attr("style", "display:none;");
  $(".correctdemo-demo8").attr("style", "display:none;");
  $(".correctdemo-demo9").attr("style", "display:none;");
  $(".correctdemo-demo10").attr("style", "display:none;");
  $(".correctdemo-demo11").attr("style", "display:none;");
  $(".correctdemo-demo12").attr("style", "display:none;");
}

function change4() {
  $(".correctdemo-demo-ri").attr({
    style: "display:none",
  });
  $(".correctdemo-demo").attr("style", "display:none;");
  $(".correctdemo-demo2").attr("style", "display:none;");
  $(".correctdemo-demo3").attr("style", "display:none;");
  $(".correctdemo-demo4").attr("style", "display:flex;");
  $(".correctdemo-demo5").attr("style", "display:none;");
  $(".correctdemo-demo6").attr("style", "display:none;");
  $(".correctdemo-demo7").attr("style", "display:none;");
  $(".correctdemo-demo8").attr("style", "display:none;");
  $(".correctdemo-demo9").attr("style", "display:none;");
  $(".correctdemo-demo10").attr("style", "display:none;");
  $(".correctdemo-demo11").attr("style", "display:none;");
  $(".correctdemo-demo12").attr("style", "display:none;");
}

function change5() {
  $(".correctdemo-demo-ri").attr({
    style: "display:none",
  });
  $(".correctdemo-demo").attr("style", "display:none;");
  $(".correctdemo-demo2").attr("style", "display:none;");
  $(".correctdemo-demo3").attr("style", "display:none;");
  $(".correctdemo-demo4").attr("style", "display:none;");
  $(".correctdemo-demo5").attr("style", "display:flex;");
  $(".correctdemo-demo6").attr("style", "display:none;");
  $(".correctdemo-demo7").attr("style", "display:none;");
  $(".correctdemo-demo8").attr("style", "display:none;");
  $(".correctdemo-demo9").attr("style", "display:none;");
  $(".correctdemo-demo10").attr("style", "display:none;");
  $(".correctdemo-demo11").attr("style", "display:none;");
  $(".correctdemo-demo12").attr("style", "display:none;");
}

function change6() {
  $(".correctdemo-demo-ri").attr({
    style: "display:none",
  });
  $(".correctdemo-demo").attr("style", "display:none;");
  $(".correctdemo-demo2").attr("style", "display:none;");
  $(".correctdemo-demo3").attr("style", "display:none;");
  $(".correctdemo-demo4").attr("style", "display:none;");
  $(".correctdemo-demo5").attr("style", "display:none;");
  $(".correctdemo-demo6").attr("style", "display:flex;");
  $(".correctdemo-demo7").attr("style", "display:none;");
  $(".correctdemo-demo8").attr("style", "display:none;");
  $(".correctdemo-demo9").attr("style", "display:none;");
  $(".correctdemo-demo10").attr("style", "display:none;");
  $(".correctdemo-demo11").attr("style", "display:none;");
  $(".correctdemo-demo12").attr("style", "display:none;");
}

function change7() {
  $(".correctdemo-demo-ri").attr({
    style: "display:none",
  });
  $(".correctdemo-demo").attr("style", "display:none;");
  $(".correctdemo-demo2").attr("style", "display:none;");
  $(".correctdemo-demo3").attr("style", "display:none;");
  $(".correctdemo-demo4").attr("style", "display:none;");
  $(".correctdemo-demo5").attr("style", "display:none;");
  $(".correctdemo-demo6").attr("style", "display:none;");
  $(".correctdemo-demo7").attr("style", "display:flex;");
  $(".correctdemo-demo8").attr("style", "display:none;");
  $(".correctdemo-demo9").attr("style", "display:none;");
  $(".correctdemo-demo10").attr("style", "display:none;");
  $(".correctdemo-demo11").attr("style", "display:none;");
  $(".correctdemo-demo12").attr("style", "display:none;");
}

function change8() {
  $(".correctdemo-demo-ri").attr({
    style: "display:none",
  });
  $(".correctdemo-demo").attr("style", "display:none;");
  $(".correctdemo-demo2").attr("style", "display:none;");
  $(".correctdemo-demo3").attr("style", "display:none;");
  $(".correctdemo-demo4").attr("style", "display:none;");
  $(".correctdemo-demo5").attr("style", "display:none;");
  $(".correctdemo-demo6").attr("style", "display:none;");
  $(".correctdemo-demo7").attr("style", "display:none;");
  $(".correctdemo-demo8").attr("style", "display:flex;");
  $(".correctdemo-demo9").attr("style", "display:none;");
  $(".correctdemo-demo10").attr("style", "display:none;");
  $(".correctdemo-demo11").attr("style", "display:none;");
  $(".correctdemo-demo12").attr("style", "display:none;");
}

function change9() {
  $(".correctdemo-demo-ri").attr({
    style: "display:none",
  });
  $(".correctdemo-demo").attr("style", "display:none;");
  $(".correctdemo-demo2").attr("style", "display:none;");
  $(".correctdemo-demo3").attr("style", "display:none;");
  $(".correctdemo-demo4").attr("style", "display:none;");
  $(".correctdemo-demo5").attr("style", "display:none;");
  $(".correctdemo-demo6").attr("style", "display:none;");
  $(".correctdemo-demo7").attr("style", "display:none;");
  $(".correctdemo-demo8").attr("style", "display:none;");
  $(".correctdemo-demo9").attr("style", "display:flex;");
  $(".correctdemo-demo10").attr("style", "display:none;");
  $(".correctdemo-demo11").attr("style", "display:none;");
  $(".correctdemo-demo12").attr("style", "display:none;");
}

function change10() {
  $(".correctdemo-demo-ri").attr({
    style: "display:none",
  });
  $(".correctdemo-demo").attr("style", "display:none;");
  $(".correctdemo-demo2").attr("style", "display:none;");
  $(".correctdemo-demo3").attr("style", "display:none;");
  $(".correctdemo-demo4").attr("style", "display:none;");
  $(".correctdemo-demo5").attr("style", "display:none;");
  $(".correctdemo-demo6").attr("style", "display:none;");
  $(".correctdemo-demo7").attr("style", "display:none;");
  $(".correctdemo-demo8").attr("style", "display:none;");
  $(".correctdemo-demo9").attr("style", "display:none;");
  $(".correctdemo-demo10").attr("style", "display:flex;");
  $(".correctdemo-demo11").attr("style", "display:none;");
  $(".correctdemo-demo12").attr("style", "display:none;");
}

function change11() {
  $(".correctdemo-demo-ri").attr({
    style: "display:none",
  });
  $(".correctdemo-demo").attr("style", "display:none;");
  $(".correctdemo-demo2").attr("style", "display:none;");
  $(".correctdemo-demo3").attr("style", "display:none;");
  $(".correctdemo-demo4").attr("style", "display:none;");
  $(".correctdemo-demo5").attr("style", "display:none;");
  $(".correctdemo-demo6").attr("style", "display:none;");
  $(".correctdemo-demo7").attr("style", "display:none;");
  $(".correctdemo-demo8").attr("style", "display:none;");
  $(".correctdemo-demo9").attr("style", "display:none;");
  $(".correctdemo-demo10").attr("style", "display:none;");
  $(".correctdemo-demo11").attr("style", "display:flex;");
  $(".correctdemo-demo12").attr("style", "display:none;");
}

function change12() {
  $(".correctdemo-demo-ri").attr({
    style: "display:none",
  });
  $(".correctdemo-demo").attr("style", "display:none;");
  $(".correctdemo-demo2").attr("style", "display:none;");
  $(".correctdemo-demo3").attr("style", "display:none;");
  $(".correctdemo-demo4").attr("style", "display:none;");
  $(".correctdemo-demo5").attr("style", "display:none;");
  $(".correctdemo-demo6").attr("style", "display:none;");
  $(".correctdemo-demo7").attr("style", "display:none;");
  $(".correctdemo-demo8").attr("style", "display:none;");
  $(".correctdemo-demo9").attr("style", "display:none;");
  $(".correctdemo-demo10").attr("style", "display:none;");
  $(".correctdemo-demo11").attr("style", "display:none;");
  $(".correctdemo-demo12").attr("style", "display:flex;");
}
//div单选样式
function clear() {
  $(".correctdemo-tooth-demo").each(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    }
  });
}
$(".correctdemo-demo-le-bottom").click(function () {
  console.log(111);
  $(".correctdemo-demo-ri").attr({
    style: "display:block",
  });
});
