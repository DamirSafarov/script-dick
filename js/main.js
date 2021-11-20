

$(function(){

    $("a[href^='#header']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    $('.mobile-burger').on('click',function(){
      $('.header-list').slideToggle(500,'linear');
    })
    
     
  
  });
  
  
  
  
  