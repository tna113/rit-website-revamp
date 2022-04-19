// TEVOX Notifire - Plugin - Works on Jquery
(function($){
    jQuery.fn.viewitle = function(parameters){
        var parameters = $.extend({
            defaultClass: 'teskly-viewitle',
            defaultAttribute: 'data-teskly-viewitle'
        },parameters);
        
        jQuery('body').append('<div class="'+ parameters.defaultClass +'"></div>');
        jQuery('.'+ parameters.defaultClass).append('<span></span>');
        
        var initialize = function(){
            
            jQuery(document).mousemove(function(e){
        
                // Declare variables for cursor's coordinates.
                var X = e.pageX;
                var Y = e.pageY;

                // Redeclaring of helper CSS-parameters.
                jQuery('.'+ parameters.defaultClass).css({
                    top: e.pageY + 30,
                    left: e.pageX + 30,
                });

                jQuery('['+ parameters.defaultAttribute +']').hover(
                    function(){
                        var plg_help_text = jQuery(this).attr(parameters.defaultAttribute);
                        jQuery('.'+ parameters.defaultClass).addClass('focus').find('span').text(plg_help_text);
                    },
                    function(){
                        jQuery('.'+ parameters.defaultClass).removeClass('focus');
                    }
                );

            });
            
        };
        return this.each(initialize);
    };
})(jQuery);

