/*global $, jQuery*/
/*MENU*/
(function ($) {
    "use strict";
    $.fn.mainMenu = function (options) {
        var defaults, settings, menuItem, charItem;
        defaults = {

            "backgroundColor": "#4b5f9b",
            "highlightColor":  "aqua",
            "submenuColor":    "#5c688a",
            "toggleSpeed":     "1000",
            "fontColor":       "white",
            "menuNumber":       "5"
        };
        settings = $.extend({}, defaults, options);
        return this.each(function () {
//            SETTING SETUP
            $(".menu").css("background-color", settings.backgroundColor);
            $(".main-menu li:not('.subMenu')").css("background-color", settings.backgroundColor);
            
            if ($(".menu").outerWidth() >= 820) {
                menuItem = 100 / settings.menuNumber;
                charItem = menuItem.toString() + "%";
                window.console.log(charItem);
                $(".main-menu li:not('.subMenu li')").css("width", charItem);
            }
            
            
            if ($(".menu").outerWidth() >= 900) {
                $(".subMenu, .subMenu li").css("background-color", settings.backgroundColor);
                
            
            } else {$(".subMenu, .subMenu li").css("background-color", settings.submenuColor);
                   }
            
//            $(window).resize(function () {
//                location.reload();
//            });
            
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
                $(".subMenu span").hide();
                
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
