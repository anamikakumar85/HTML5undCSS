        $(document).ready(function(){
        $('#topnav ul a').click(function(){
        var link = $(this).attr('href');
        $('html,body').animate({scrollTop:($(link).offset().top -40)},1000);
        if($(window).width() < 600){
        $('#topnav').css({top:'-200px'});
        }
        $('#topnav p a').css({top:'0px'});
        return false;
    }); 
    $('#topnav p a').click(function(){
        $('#topnav').css({top:'0px'});
        $('#topnav p a').css({top:'-40px'});
        return false;
    });
    });// JavaScript Document