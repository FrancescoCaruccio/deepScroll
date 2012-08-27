/*
 * jQuery Deep Scroll Plugin
 * Examples and documentation at: www.caruccioweb.net/deep-scroll # coming soon
 * Copyright (c) 2012 Francesco Caruccio
 * Version: 1.0 (27-AUG-2012)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.7.1 or later
 */

(function(jQuery) {

    jQuery.fn.deepScroll = function(options) {

        jQuery.extend(jQuery.fn.deepScroll.defaults , options);

        jQuery(this).on('click', function(e){
            var $this = jQuery(this);
            var nomeElementoDaRaggiungere = $this.attr('rel');
            if($this.hasClass('deepScroll')){
                if($this.attr('rel') && jQuery('[name='+nomeElementoDaRaggiungere+']') != null){
                    var offsetElementoDaRaggiungere = jQuery('[name='+nomeElementoDaRaggiungere+']').offset().top;
                    jQuery('html').animate({
                        scrollTop:  offsetElementoDaRaggiungere
                    }, jQuery.fn.deepScroll.defaults.animSpeed);
                    if($this.is('a')){
                        e.preventDefault();
                    }
                }
            }
        });
    }

    jQuery.fn.deepScroll.defaults = {
        animSpeed:      'slow'
    }

})(jQuery);