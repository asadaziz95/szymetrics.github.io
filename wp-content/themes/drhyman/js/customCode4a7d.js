(function($){"use strict";$(function(){$('.essb_links_list').each(function(){$(this).find('.essb_item').addClass('essb-sidebar-closed-item');});$('.essb_links_list').each(function(){$(this).find('.essb_link_sidebar-close').removeClass('essb-sidebar-closed-item');});});$(function(){if(($(".header-bg").length>0)||($(".header-slider").length>0)){$(document).scroll(function(){var y=$(this).scrollTop();if(y>400){$('.jumpto_menu').css("opacity","1");$('.essb_links').css("opacity","1");}else{$('.jumpto_menu').css("opacity","0");$('.essb_links').css("opacity","0");}});}else{$('.jumpto_menu').css("opacity","1");$('.essb_links').css("opacity","1");}});if($(".related-posts").length){$.fn.isInViewport=function(){var elementTop=$(".related-posts").offset().top;var elementBottom=elementTop+$(".related-posts").outerHeight();var viewportTop=$(window).scrollTop();var viewportBottom=viewportTop+$(window).height();return elementBottom>viewportTop&&elementTop<viewportBottom;};$(window).on('resize scroll',function(){if($(".related-posts").isInViewport()){$('.jumpto_menu').css("opacity","0");$('.essb_links').css("opacity","0");}});}else{$.fn.isInViewport=function(){var elementTop=$(".site-footer").offset().top;var elementBottom=elementTop+$(".site-footer").outerHeight();var viewportTop=$(window).scrollTop();var viewportBottom=viewportTop+$(window).height();return elementBottom>viewportTop&&elementTop<viewportBottom;};$(window).on('resize scroll',function(){if($(".site-footer").isInViewport()){$('.jumpto_menu').css("opacity","0");$('.essb_links').css("opacity","0");}});}})(jQuery);