/* 모바일 사이드 메뉴 */

const mobileSide = {					// 222
	
	/* 사이드 메뉴 열기 */
	open : function() {
		if (!$('aside').hasClass('on')) {		//aside에 on 클래스가 없으면 
			$('aside').addClass('on');			//추가한다
		}
		$('#layer_dim').removeClass('dn');	
	},

	/* 사이드 메뉴 닫기 */
	close : function() {
		$('aside').removeClass('on');
		if (!$('#layer_dim').hasClass('dn')) {	// layer_dim에 dn 클래서가 없으면
			$('#layer_dim').addClass('dn');		// 추가한다
		}
	},
};

$(function() {					// 111
	/* 메뉴 열기 */
	$('.side_open').click(function() {
		mobileSide.open();
	});
	
	/* 메뉴 닫기 */
	$('.side_close, #layer_dim').click(function() {
		mobileSide.close();
	});
});