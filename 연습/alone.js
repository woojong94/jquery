/**
* 모바일 사이드 메뉴
*
*/
const asidetest = {
	/* 사이드 메뉴 열기 */
	open : function() {
		if (!$('aside').hasClass('asideon')) {
			$('aside').addClass('asideon');
		}
		$('#layer_dim').removeClass('dn');	
	},
	/* 사이드 메뉴 닫기 */
	close : function() {
		$('aside').removeClass('asideon');
		if (!$('#layer_dim').hasClass('dn')) {
			$('#layer_dim').addClass('dn');
		}
	},
};



$(function() {
	/* 메뉴 열기 */
	$('.side_open').click(function() {
		asidetest.open();
	});
	/* 메뉴 닫기 */
	$('.side_close, #layer_dim').click(function() {
		asidetest.close();
	});
	
});