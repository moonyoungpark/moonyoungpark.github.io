$(function(){
    
    $('.big_mv > li').css({"height":"100vh"});
    $('.small_mv > li.active .smv_left').css({"background-position":"-125px 0"});
    
    $('.owl-carousel').owlCarousel({
        
    items:1,
    loop:true,
    center:true,
    autoplay:true,
    autoplayTimeout:3000,
    dots:true,
    dotsContainer:'ul.owl-dot',
    
    });
    
    var owl = $('.big_mv');
    owl.owlCarousel();
    $('.small_mv > li').click(function(){
        owl.trigger('to.owl.carousel',[$(this).index()]);
        $('.small_mv > li').removeClass('active');
        $(this).addClass('active');
    });
    
    /*iframe*/
    $('.vod_top_right > li').click(function(){
        $('.vod_top_right > li').removeClass('on');
        $('.vod_bottom_list > li').removeClass('on');
        $(this).addClass('on');
        
        if ($(this).index() == 0 ) {
            $('iframe').attr('src','https://www.youtube.com/embed/InQOpa5AhEE');
        }else if ($(this).index() == 1 ) {
            $('iframe').attr('src','https://www.youtube.com/embed/7R68HY6pIhw');
        }else if ($(this).index() == 2 ) {
            $('iframe').attr('src','https://www.youtube.com/embed/91ve4IwMECo');
        }else if ($(this).index() == 3 ) {
            $('iframe').attr('src','https://www.youtube.com/embed/75ISzLuCQdQ');
        }else if ($(this).index() == 4 ) {
            $('iframe').attr('src','https://www.youtube.com/embed/p_bSjbapLs0');
        }
    });
    
    $('.vod_bottom_list > li').click(function(){
        $('.vod_bottom_list > li').removeClass('on');
        $('.vod_top_right > li').removeClass('on');
        $(this).addClass('on');
        
        if ($(this).index() == 0 ) {
            $('iframe').attr('src','https://www.youtube.com/embed/59qxAoHP0YE');
        }else if ($(this).index() == 1 ) {
            $('iframe').attr('src','https://www.youtube.com/embed/75ISzLuCQdQ');
        }else if ($(this).index() == 2 ) {
            $('iframe').attr('src','https://www.youtube.com/embed/jE6OrQgGLeQ');
        }else if ($(this).index() == 3 ) {
            $('iframe').attr('src','https://www.youtube.com/embed/vp0kQeDUyWA');
        }else if ($(this).index() == 4 ) {
            $('iframe').attr('src','https://www.youtube.com/embed/UFGcbC3m_fg');
        }     
        
    });
    
    

});