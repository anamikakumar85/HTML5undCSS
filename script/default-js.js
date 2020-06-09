//magicLineNav----------
$(function() {

    var $el, leftPos, newWidth,
        $mainNav = $("#eg1");
    
    $mainNav.append("<li id='magic-line'></li>");
    var $magicLine = $("#magic-line");
    
    $magicLine
        .width($(".current_page_item").width())
        .css("left", $(".current_page_item a").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());
        
    $("#eg1 li a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });    
    });
});
//navi burger button---------------
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
});







//back-top-----------------------------

            $(document).ready(function(){
                //ein-/ausblenden scroll-Button------------
                
                
                $(window).scroll(function(){
                    if($(window).scrollTop() > 200){
                       $('#back-top').fadeIn();
                       }
                     else {
                         $('#back-top').fadeOut();
                     }
                });
                //langsam nach oben scrollen----------------
                $('#back-top a').click(function(){
                    $('html,body').animate({scrollTop:0},1000);
                    return false;
                });
            });
          





//newslist-------------------------
$(document).ready(function() {
    var divs = $('.mydivs>div');
    var now = 0; // currently shown div
    divs.hide().first().show(); // hide all divs except first
    $("button[name=next]").click(function() {
        divs.eq(now).hide();
        now = (now + 1 < divs.length) ? now + 1 : 0;
        divs.eq(now).show(); // show next
    });
    $("button[name=prev]").click(function() {
        divs.eq(now).hide();
        now = (now > 0) ? now - 1 : divs.length - 1;
        divs.eq(now).show(); // show previous
    });
});
//article-------------------
 $(document).ready(function(){

            //Aufruf der Funktionen, damit auch ohne scroll was angezeigt wird 
            WhatAnimation("fadescroll"); 
            WhatAnimation("moveleft");

            // Funktionsaufruf bei scrollerei 
            $(window).scroll(function() {
                WhatAnimation("fadescroll");
                WhatAnimation("moveleft");
            });

            // durchläuft Inhalt in Schleife um fadescroll/moveleft zu finden und function AddClass aufzurufen
            function WhatAnimation(name) {
                $("." + name).each(function() {
                    switch (name) {
                        case "fadescroll":
                            AddClass(this, "fade");
                            break;
                        case "moveleft":
                            AddClass(this, "left");
                            break;
                    }
                });
            }

     
            // Klassen zuweisen / entziehen -------------
            function AddClass(object, name) {
                if (IsVisible(object)) { //wenn das fadescroll/moveleft sichtbar ist ....
                    $(object).addClass(name);
                } 
                else { //else-zweig weg wenn nur beim ersten mal ausführen
                    $(object).removeClass(name);
                }
            }
            
            // wann ist fadescroll/moveleft sichtbar => return für function AddClass
            function IsVisible(object) {
                var viewport = $(window).scrollTop() + $(window).height(); //akt.scrollpos + fensterhöhe
                var rand = $(object).offset(); //Position top/left von fadescroll/moveleft
                rand.bottom = rand.top + $(object).outerHeight();
                         console.log ($(window).scrollTop() + ' / ' + viewport   + ' / ' +   rand.top);
               return !(
                    viewport < rand.top + 100 || $(window).scrollTop() > rand.bottom - 100
                ); //wenn (akt.scrollpos < fadescroll/moveleft-pos.top) oder (akt.scrollpos > fadescroll/moveleft-pos.bottom) => false
                //also: wenn außerhalb des Fensters

            }
        });


//lightbox----------------------------
$(document).ready(function(){
                    //Array erstellen---------------
                    var fotos = new Array();
                    //reinfolge:Bildname, data-title,     alt
                       fotos[0]= new Array('07.jpg','Football Spirit','Football match');
                       fotos[1]= new Array('18.jpg','Sports day','Grundschule');
                       fotos[2]= new Array('20.jpg','Zone Final','');
                       fotos[3]= new Array('08.jpg','Play Time','Frankreich...');
                       fotos[4]= new Array('19.jpg','BasketBall Court','');
                   

                    //Ausgabe in Form einer Schleife
                     var i,ausg =  "";
                     for(i = 0 ; i < fotos.length ; i++){
                         ausg += '<a href="img/gal1/big/'+fotos[i][0]+'" data-lightbox="set1" data-title="'+fotos[i][1]+'"><img src="img/gal1/'+fotos[i][0]+'" alt="'+fotos[i][2]+'"></a> ';
                     }
                    $ (' #galerie1').html(ausg);
    
    
                     var fotos = new Array();
                    //reinfolge:Bildname, data-title,     alt
                       fotos[0]= new Array('16.jpg','Bibliothek','');
                       fotos[1]= new Array('22.jpg','Science Experiment','');
                       fotos[2]= new Array('12.jpg','Young Scientist','');
                       fotos[3]= new Array('13.jpg','Classroom Learning ','');
                       fotos[4]= new Array('14.jpg','Interactive Learning','');


                    //Ausgabe in Form einer Schleife
                     var i,ausg =  "";
                     for(i = 0 ; i < fotos.length ; i++){
                         ausg += '<a href="img/gal1/big/'+fotos[i][0]+'" data-lightbox="set1" data-title="'+fotos[i][1]+'"><img src="img/gal1/'+fotos[i][0]+'" alt="'+fotos[i][2]+'"></a> ';
                     }
                    $ (' #galerie2').html(ausg);
    
                    
                     var fotos = new Array();
                    //reinfolge:Bildname, data-title,     alt
                       fotos[0]= new Array('11.jpg','Picnic','');
                       fotos[1]= new Array('22.jpg','Experiment','');
                       fotos[2]= new Array('21.jpg','Bio Lab','');
                       fotos[3]= new Array('17.jpg','Digital Class','');
                       fotos[4]= new Array('15.jpg','World Class collection','');


                    //Ausgabe in Form einer Schleife
                     var i,ausg =  "";
                     for(i = 0 ; i < fotos.length ; i++){
                         ausg += '<a href="img/gal1/big/'+fotos[i][0]+'" data-lightbox="set1" data-title="'+fotos[i][1]+'"><img src="img/gal1/'+fotos[i][0]+'" alt="'+fotos[i][2]+'"></a> ';
                     }
                    $ (' #galerie3').html(ausg);

            });

//jassorSlider---baner-rotator---------------------------------
jssor_1_slider_init = function() {

            var jssor_1_SlideshowTransitions = [
              {$Duration:500,$Delay:30,$Cols:8,$Rows:4,$Clip:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2049,$Easing:$Jease$.$OutQuad},
              {$Duration:500,$Delay:80,$Cols:8,$Rows:4,$Clip:15,$SlideOut:true,$Easing:$Jease$.$OutQuad},
              {$Duration:1000,x:-0.2,$Delay:40,$Cols:12,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Assembly:260,$Easing:{$Left:$Jease$.$InOutExpo,$Opacity:$Jease$.$InOutQuad},$Opacity:2,$Outside:true,$Round:{$Top:0.5}},
              {$Duration:2000,y:-1,$Delay:60,$Cols:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Easing:$Jease$.$OutJump,$Round:{$Top:1.5}},
              {$Duration:1200,x:0.2,y:-0.1,$Delay:20,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$Jease$.$InWave,$Top:$Jease$.$InWave,$Clip:$Jease$.$OutQuad},$Round:{$Left:1.3,$Top:2.5}}
            ];

            var jssor_1_options = {
              $AutoPlay: 1,
              $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            /*#region responsive code begin*/

            var MAX_WIDTH = 980;

            function ScaleSlider() {
                var containerElement = jssor_1_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {

                    var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                    jssor_1_slider.$ScaleWidth(expectedWidth);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }

            ScaleSlider();

            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            /*#endregion responsive code end*/
        };

