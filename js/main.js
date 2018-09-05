$(function(){
	
    function init_work_list(){
		// 작품 목록 불러오기
		$work_list = $('#works .work_list');
		$work_list.load('templates/work_list.html', function(){
			// 6번 목록까지만 표시
			$work_list.find('li:gt(5)').slideUp(); 
			$('.btn_close').hide(); // 축소버튼 비표시
		});		
	}	
	init_work_list();
	
	// 전체보기 토글 버튼
	$('#works .btn_all').click(function(){
		$(this).toggleClass('all');	
		
		// 버튼 상태에 따라 목록 열고 닫기
		if($(this).hasClass('all')){
			$work_list.find('li').slideDown();	
			$('.btn_close').show();
		}
		return false;
	});
	
	$('#works .btn_close').click(function(){
		$work_list.find('li').slideUp();
		init_work_list();
		$('#works .btn_all').toggleClass('all');
		$('.btn_close').hide();
		return false;
	});
    
    
	// 능력치 그래프 
	var yoffset = 200;	// 스크롤 보정값
	var about_top = $('#skill').offset().top - yoffset;
    var works_top = $('#works').offset().top;
    

	$(window).on('scroll', function(){
		var win_scroll_top = $(window).scrollTop();
		var point = [90, 90, 75, 60, 60, 90];
		
		// #skill 섹션에 도달하면 그래프 애니메이션 시작
		if(win_scroll_top >= about_top){
			for(var i = 0; i < 6; i++){
				$('#skill .skill_list span')
					.eq(i)
					.animate({width: point[i]+'%'});
			}	
            $('#to_top').addClass('on');
		}else{
            $('#to_top').removeClass('on');
        }
        
//        if(win_scroll_top >= works_top){
//            $('#to_top')
//                .addClass('on');
//        }else{
//            $('#to_top')
//                .removeClass('on');
//        }
        
	});
	
	// 페이지 스크롤 효과
	$('#menu a, #to_top a, .btn, .btn_all').on('click', function(){
		// 이동한 내부 링크의 위치값(hash)
		var target = $(this.hash);
		console.log(target);
		$('html, body').animate({
			scrollTop: target.offset().top
		});
		return false; // 앵커태그 무효화
	});
    
    
});