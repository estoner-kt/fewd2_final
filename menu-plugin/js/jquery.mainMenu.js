/*global $, jQuery*/
/*MENU*/
//(function($){
//    $.fn.highlightMenu = function(options) {
//        var settings = $.extend({
//            bgColor : "#000000",
//            color : "#ffffff",
//            hoverBgColor : "#cccccc",
//            hoverColor : "#000000"
//        }, options);
//        
//        return this.each(function() {
//            var items = $("li a");
//            
//            items.css("font-family", "arial, helvetica, sans-serif")
//                .css("font-weight", "bold")
//                .css("text-decoration", "none")
//                .css("background-color", settings.bgColor)
//                .css("color", settings.color)
//                .css("width", "125px")
//                .css("display", "block")
//                .css("margin-bottom", "15px")
//                .css("padding", "5px");
//            items.mouseover(function() {
//                $(this).css("background-color", settings.hoverBgColor)
//                    .css("color", settings.hoverColor);
//            });
//            items.mouseout(function() {
//                $(this).css("background-color", settings.bgColor)
//                    .css("color", settings.color);
//            });
//        });
//    }
//})(jQuery);


(function ($) {
    "use strict";
    $.fn.mainMenu = function (options) {
        var defaults, settings, menuItem = 0;
        defaults = {

            "backgroundColor": "#4b5f9b",
            "highlightColor":  "aqua",
            "submenuColor":    "#5c688a",
            "toggleSpeed":     "1000",
            "brand":           "false",
            "logo":            "false",
            "fontColor":       "white",
            "menuNumber":       "5"
        };
        settings = $.extend({}, defaults, options);
        return this.each(function () {
//            SETTING SETUP
            $(".menu").css("background-color", settings.backgroundColor);
            $(".main-menu li:not('.subMenu')").css("background-color", settings.backgroundColor);
            
            if ($(".menu").outerWidth() >= 900) {
                $(".subMenu, .subMenu li").css("background-color", settings.backgroundColor);
            } else {$(".subMenu, .subMenu li").css("background-color",                      settings.submenuColor);
                   }
//            Branding or logo will add one space each to the menuNumber
            if (settings.brand) {
                menuItem = settings.menuNumber + menuItem + 1;
            } else if (settings.logo) {
                menuItem = settings.menuNumber + menuItem + 1;
            }
            
            $(".subMenu ul").hide();
            var state = "up", slide;


            $(".menu-header").click(function () {

                $(".main-menu").slideToggle(settings.toggleSpeed);

            });


            $("li.subMenu > a").click(function (event) {
                event.preventDefault();
                var slide = event.target;
                $(slide).next().slideToggle(settings.toggleSpeed);

            });

        //    Hover Menu

            if ($(".menu").outerWidth() >= 1380) {
                $(".main-menu a").hover(function () {
                    $(this).css("background-color", settings.highlightColor);
                }, function () {
                    $(this).css("background-color",  settings.backgroundColor);
                });

                $("li.subMenu > a").hover(function (event) {

                    slide = event.target;
                    if (state === "up") {
                        $(this).next().slideDown(settings.toggleSpeed);
                        state = "down";
                    }
                }, function (event) {

                    slide = event.target;
                    if (state === "down") {
                        $(this).next().mouseleave(function () {
                            $("li.subMenu ul").slideUp(settings.toggleSpeed);
                        });
                        state = "up";
                    }
                });

                $(".main-menu li[data-trigger != 'submenu']").mouseenter(function () {
                    $("li.subMenu ul").slideUp(settings.toggleSpeed);
                });
            }
        });
    };
    
})(jQuery);
