$(function() {
    $('.btn__detail').on('click', function() {
        
        var $targetDetail = $(this).closest('li').find('.voice__detail');
        $targetDetail.slideToggle(300); 

        // ボタンのテキストとクラスを切り替え
        $(this).toggleClass('is-open'); 
        
        if ($(this).hasClass('is-open')) {
             $(this).text('閉じる');
        } else {
             $(this).text('詳しく見る');
        }
    });
});