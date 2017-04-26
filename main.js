$(document).ready(function(){

  function init(){
    var href = location.href;
    if(href.indexOf("\?")>0){
      var param = href.split("\?")[1];
      if(param!='undefined'&&null!=param){
        var page = param.split("=")[1];
        if(page!='undefined'&&null!=page){
          if('websitNavBar'==page){
            $('#websitNavBar').click();
          }
        }
      }
    }
  }

  $('#websitNavBar').bind('click',function(){
    removeNavBarActiveClass();
    $(this).parent().addClass('active');
    $('#skill-tree').slideUp('slow','linear');
    $('#websit-nav').slideDown('slow','linear');
  });

  $('#skillTreeBar').bind('click',function(){
    removeNavBarActiveClass();
    $(this).parent().addClass('active');
    $('#websit-nav').slideUp('slow','linear');
    $('#skill-tree').slideDown('slow','linear');
  });

  function removeNavBarActiveClass(){
    $('.navbar-collapse li').each(function(){
      $(this).removeClass('active');
    });
  }
  init();
});
