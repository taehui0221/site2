/* swiper호출*/
var main_view = new Swiper("#main_view",{
	wrapperClass:"slider",		//슬라이드를 감싸는 영역의 클래스명	
	slideClass:"view",				//슬라이드 영역의 클래스명
	slideActiveClass:"active",//활성화된 슬라이드에 추가되는 클래스명
	effect:"fade",						//슬라이드 전환 효과
	loop:true,								//반복순환
	autoplay: {								//자동슬라이드
		delay: 5000,						//자동슬라이드 시간 간격
	},
	pagination: {							//페이지버튼
    el: '.pager',						//페이지버튼 대상
		clickable:true,					//클릭시 슬라이드 이동 활성화
		bulletActiveClass:"active",	
		//활성화된 슬라이드에 따라 페이지버튼에 추가되는 클래스명
  },
  navigation: {
	nextEl: ".next",
	prevEl: ".prev",
  },	
});