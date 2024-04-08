//메인메뉴의 움직이는 바
$('.gnb li a').mouseenter(function () {
    let bar = $(this).position().left;
    //.position():jquery메서드 중 하나로, 요소의 위치정보(top,left)를 반환함
    console.log(bar)
    let widnum = $(this).width();
    //$('.bar').animate({실행문},시간)
    $('.bar').animate({
        'left': bar + "px",
        'width': widnum + "px",
        'opacity': 1,
    }, 300)

})

//this => a태그
//JavaScript에서 동적으로 메뉴 아이템의 너비를 가져와서 .bar에 적용하고,
//CSS에서는 불필요한 너비를 없애주어 동적으로 변하는 디자인에 더 적응적으로 대응할 수 있도록 조정해줌 */


// 전체 애니메이션
//jQuery Scrolla--Custom settings 부분 긁어오기
$('.animate').scrolla({
    // default
    mobile: false, // 모바일 버전에서(도 돌아가게 할건지) 활성화
    once: false, // 스크롤시 한번만 실행할때는 true
    animateCssVersion: 4 // animate.css 버전//몇버전인지 (3 or 4)
});


//path의 총길이(px단위)를 알아내기
let pathH = document.querySelector('.st0')
let pathHeight = pathH.getTotalLength();
console.log(pathHeight)


//menuOpen

//같은 표현
//$('.menuOpen .open').on("click",function(){})
$('.menuOpen .open').click(function (e) {
    e.preventDefault();
    $('.menuOpen .menuWrap').addClass('on')
})

$('.menuOpen .close').click(function (e) {
    e.preventDefault();
    $('.menuOpen .menuWrap').removeClass('on')
})

//service 영역시 배경색 바꾸기
$(window).scroll(function () {
    //$(this)--> window
    let scrollTop = $(this).scrollTop();
    console.log(scrollTop);
    let offset = $('.service').offset().top; //service영역의 top 이 viewport의 top에 위치하는 지점
    //==> 전체문서에서 .service영역 전까지의 높이값 추출

    if (scrollTop > offset) {
        $('body').addClass('on')
    } else {
        $('body').removeClass('on')
    }
})
