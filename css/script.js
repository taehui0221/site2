/* swiper */
var main_view = new Swiper("#main_view",{
    wrapperClass:"slider",       //슬라이드를 감싸는 영역의 클래스명
    slideClass:"view",           //슬라이드 영역의 클래스명
    slideActiveClass:"active",   //활성화된 슬라이드에 추가되는 클래스명
    effect:"fade",               //슬라이드 전환 효과
    loop:true,                   //반복순환
    autoplay: {                  //슬라이드
        delay:5000,              //자동슬라이드 시각 간격
    },
});