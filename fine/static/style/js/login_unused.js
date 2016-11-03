$(document).ready(function(){
    $(".index-tab-navs a").click(function(){
      var loc_id = $(this).attr("href");
      $(this).addClass("active").siblings().removeClass("active");
      var is_sign_in = loc_id === "#signin";
      if(is_sign_in){
        $(".view-signin").addClass("selected");
        $(".view-signup").removeClass("selected");
      }else{
        $(".view-signin").removeClass("selected");
        $(".view-signup").addClass("selected");
      }
    })
})
