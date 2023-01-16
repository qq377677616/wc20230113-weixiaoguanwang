var question = [];
$('.demo1').click(function(e) {
    clear1();

    $(this).addClass('activedemo');

    $('.next1').click(function goTwo() {
        $('.face').attr('style', 'display:none;');
        $('.linner').attr('style', 'display:block;');
        clear1();
    });

    $('.next').click(function() {
        var arrquestion = [];
        arrquestion.push(e.currentTarget.dataset.num);
        var question = Array.from(new Set(arrquestion));
        console.log(question);
    });
});
$('.demo2').click(function(e) {
    clear2();

    $(this).addClass('activedemo');

    $('.next2').click(function goThree() {
        $('.linner').attr('style', 'display:none;');
        $('.smilelinner').attr('style', 'display:block;');
        clear2();
    });

    $('.next').click(function() {
        var arrquestion = [];
        arrquestion.push(e.currentTarget.dataset.num);
        var question = Array.from(new Set(arrquestion));
        console.log(question);
    });
});
$('.demo3').click(function(e) {
    clear3();

    $(this).addClass('activedemo');

    $('.next3').click(function goFour() {
        $('.smilelinner').attr('style', 'display:none;');
        $('.facequestion').attr('style', 'display:block;');
        clear3();
    });
    $('.next').click(function() {
        var arrquestion = [];
        arrquestion.push(e.currentTarget.dataset.num);
        var question = Array.from(new Set(arrquestion));
        console.log(question);
    });
});
$('.demo4').click(function(e) {
    clear4();

    $(this).addClass('activedemo');

    $('.next4').click(function goFive() {
        $('.facequestion').attr('style', 'display:none;');
        $('.like').attr('style', 'display:block;');
        clear4();
    });
    $('.next').click(function() {
        var arrquestion = [];
        arrquestion.push(e.currentTarget.dataset.num);
        var question = Array.from(new Set(arrquestion));
        console.log(question);
    });
});
$('.demo5').click(function(e) {
    clear5();

    $(this).addClass('activedemo');

    $('.next5').click(function goSix() {
        $('.like').attr('style', 'display:none;');

        $('.manyi').attr('style', 'display:block;');
        clear5();
    });
    $('.next').click(function() {
        var arrquestion = [];
        arrquestion.push(e.currentTarget.dataset.num);
        var question = Array.from(new Set(arrquestion));
        console.log(question);
    });
});
$('.demo6').click(function(e) {
    clear6();

    $(this).addClass('activedemo');

    $('.next6').click(function goSeven() {
        $('.manyi').attr('style', 'display:none;');
        $('.jieguo').attr('style', 'display:block;');

        clear6();
    });
    $('.next').click(function() {
        var arrquestion = [];
        arrquestion.push(e.currentTarget.dataset.num);
        var question = Array.from(new Set(arrquestion));
        console.log(question);
    });
});
$('.demo7').click(function(e) {
    clear7();

    $(this).addClass('activedemo');

    $('.next7').click(function goEight() {
        $('.jieguo').attr('style', 'display:none;');
        $('.userinfo').attr('style', 'display:block;');

        clear7();
    });
    $('.next').click(function() {
        var arrquestion = [];
        arrquestion.push(e.currentTarget.dataset.num);
        var question = Array.from(new Set(arrquestion));
        console.log(question);
    });
});

//div单选样式
function clear1() {
    $('.demo1').each(function() {
        if ($(this).hasClass('activedemo')) {
            $(this).removeClass('activedemo');
        }
    });
}

function clear2() {
    $('.demo2').each(function() {
        if ($(this).hasClass('activedemo')) {
            $(this).removeClass('activedemo');
        }
    });
}

function clear3() {
    $('.demo3').each(function() {
        if ($(this).hasClass('activedemo')) {
            $(this).removeClass('activedemo');
        }
    });
}

function clear4() {
    $('.demo4').each(function() {
        if ($(this).hasClass('activedemo')) {
            $(this).removeClass('activedemo');
        }
    });
}

function clear5() {
    $('.demo5').each(function() {
        if ($(this).hasClass('activedemo')) {
            $(this).removeClass('activedemo');
        }
    });
}

function clear6() {
    $('.demo6').each(function() {
        if ($(this).hasClass('activedemo')) {
            $(this).removeClass('activedemo');
        }
    });
}

function clear7() {
    $('.demo7').each(function() {
        if ($(this).hasClass('activedemo')) {
            $(this).removeClass('activedemo');
        }
    });
}
window.onscroll = function() {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var top_div = document.getElementById('top_div');
    var show_semicircle = document.getElementsByClassName('show-semicircle');
    if (t >= -10) {
        var speed = 10;
        var cur = document.getElementById('smilesure-humam-le').offsetLeft;
        var timer = setInterval(function() {
            if (cur > -15) {
                clearInterval(timer);
            } else {
                cur += speed;
                document.getElementById('smilesure-humam-le').style.left = speed + cur + 'px';
            }
        }, 5);
    }
};

function go() {
    console.log(1);
    $('.smilesure').attr('style', 'display:none;');
    $('.face').attr('style', 'display:block;');
}

// function goTwo() {
//     console.log(2)

//     $('.face').attr("style", "display:none;")
//     $('.linner').attr("style", "display:block;")

//     $('.demo').removeClass('activedemo');

// }

// function goThree() {
//     console.log(3)
//     $('.linner').attr("style", "display:none;")
//     $('.smilelinner').attr("style", "display:block;")

// }

// function goFour() {
//     console.log(3)
//     $('.smilelinner').attr("style", "display:none;")
//     $('.facequestion').attr("style", "display:block;")

// }

// function goFive() {
//     console.log(3)
//     $('.facequestion').attr("style", "display:none;")
//     $('.manyi').attr("style", "display:block;")

// }

// function goSix() {
//     console.log(3)
//     $('.manyi').attr("style", "display:none;")
//     $('.like').attr("style", "display:block;")

// }

// function goSeven() {
//     console.log(3)
//     $('.like').attr("style", "display:none;")
//     $('.jieguo').attr("style", "display:block;")

// }

// function goEight() {
//     console.log(3)
//     $('.jieguo').attr("style", "display:none;")
//     $('.userinfo').attr("style", "display:block;")
//     console.log(question)
// }
var userinfo = {
    name: '',
    password: ''
};

function goNine() {
    userinfo['name'] = document.getElementById('inp1').value;
    userinfo['password'] = document.getElementById('inp2').value;

    if (userinfo.name != '' && userinfo.password != '') {
        $('.q').attr('style', 'display:block;');
    }
}