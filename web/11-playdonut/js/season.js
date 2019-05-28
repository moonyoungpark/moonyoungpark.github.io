$(function(){
    
    $('.big_mv > li').css({"height":"100vh"});
    
    /*
    $('.owl-dots > li').click(function(){
        $('.owl-dots > li').removeClass('active');
        $(this).addClass('active');
    });
    */
    
    $('.owl-carousel').owlCarousel({
        
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    dots:true,
    dotsContainer:'.owl-dots',
    
    });
    
    var owl = $('.owl-carousel');
    owl.owlCarousel();
    
    $('.owl-dot').click(function(){
        owl.trigger('to.owl.carousel',[$(this).index()]);
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
    
    /*season tab*/
    $('.content_season2').hide();
    $('.btn_season_tab li').click(function(){
        $('.btn_season_tab li').removeClass('on');
        $(this).addClass('on');
        
        if ($('.btn_season_tab li').first().hasClass('on') == 1) {
            $('.content_season2').hide();
            $('.content_season1').show();
        } else if ($('.btn_season_tab li').last().hasClass('on') == 1) {
            $('.content_season1').hide();
            $('.content_season2').show();
        }
        
        
    });
    
    

});