$(document).ready(function(){var t=$(document).width()/2,o=$(document).height()/2;$(".rotate-page").mousemove(function(a){$(window).width()>768&&(rotateY=(o/2-a.pageX)/30,rotateX=(t/2-a.pageY)/15,$(".box").css({transform:"rotateX("+rotateX+"deg) rotateY("+rotateY+"deg) translate(-50%,-50%) "}))});var a=$("body"),r=0,e=0,i=function(){r=a.width(),e=a.height()};a.resize(i).mousemove(function(t){rgb1=[100,Math.round(t.pageY/r*255),Math.round(t.pageX/e*255)],rgb2=[Math.round(t.pageX/r*255),150,Math.round(t.pageY/e*255)],rgb3=[Math.round(t.pageX/r*255),Math.round(t.pageY/e*255),150],rgb4=[125,Math.round(t.pageY/e*255),Math.round(t.pageX/r*255)],rgb5=[0,Math.round(t.pageY/e*255),Math.round(t.pageX/r*255)],$(".front").css("border-bottom-color","rgb("+rgb1.join(",")+")"),$(".back").css("border-bottom-color","rgb("+rgb2.join(",")+")"),$(".left").css("border-bottom-color","rgb("+rgb3.join(",")+")"),$(".right").css("border-bottom-color","rgb("+rgb4.join(",")+")"),$(".bottom").css("background","rgb("+rgb5.join(",")+")")}).resize(),$(".navigation-bar li").hover(function(){$(this).addClass("navigation-hover")},function(){$(this).removeClass("navigation-hover")}),$(".navigation-bar li:contains(About)").click(function(){$(".box").addClass("navigation-reveal"),$(".projects-list li").fadeOut(200),$(".pyramid-gyro").addClass("pyramid-flip"),$(".pyramid-gyro").fadeIn(200)}),$(".navigation-bar li:contains(Projects)").click(function(){$(".box").removeClass("navigation-reveal"),$(".projects-list li").fadeIn(200),$(".pyramid-axis-change").addClass("pyramid-axis").removeClass("pyramid-axis-change"),$(".pyramid-gyro").removeClass("pyramid-flip",500),$(".pyramid-gyro").fadeIn(200)}),$(".skills").click(function(){$(this).text("HTML/Jade, CSS/Sass/Less, Javascript, jQuery, Gulp, Git ").addClass("skills-bold")}),$(".masterTooltip").hover(function(){if($(window).width()>768){var t=$(this).attr("title");$(this).data("tipText",t).removeAttr("title"),$('<p class="tooltip"></p>').text(t).appendTo("body").fadeIn("slow")}},function(){$(this).attr("title",$(this).data("tipText")),$(".tooltip").remove()}).mousemove(function(t){var o=t.pageX+20,a=t.pageY+10;$(".tooltip").css({top:a,left:o})})});