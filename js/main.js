$(function(){
  
if ($(window).width() > 768 ) {
    $('.sub_web').on('click',function(e){
        e.preventDefault();
        $('.content_web').fadeToggle();
    });   
    
    $('.sub_design').on('click',function(e){
        e.preventDefault();
        $('.content_design').fadeToggle();
    });  
    
    $('.sub_about').on('click',function(e){
        e.preventDefault();
        $('.content_about').fadeToggle();
    });  
    
    $('.sub_skill').on('click',function(e){
        e.preventDefault();
        $('.content_skill').fadeToggle();
    });  
}

if ($(window).width() < 768) {
    $('.btn_allmenu_open').on('click focusin',function(){
        $('.content_hide').hide();
        $('nav').show();
    });
    
    $('.btn_allmenu_close').on('click focusout',function(){
        $('nav').hide();
    });
    
    $('.sub_web').on('click focusin',function(){
        $('.content_web').show();
        $('nav').hide();
    });
    $('.sub_design').on('click focusin',function(){
        $('.content_design').show();
        $('nav').hide();
    });
    $('.sub_about').on('click focusin',function(){
        $('.content_about').show();
        $('nav').hide();
    });
    $('.sub_skill').on('click focusin',function(){
        $('.content_skill').show();
        $('nav').hide();
    });
}   

    

});