/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */

/* jshint undef: false, unused: false */

(function ($, Drupal) {
  /**
   * Use this behavior as a template for custom Javascript.
  */
  Drupal.behaviors.semantique = {
    attach: function (context, settings) {
      // Get form id selector.
      function auth_modal_route_back(element) {
        var modal = element.parent();
        var accessDeniedPage =  $('body').hasClass('page-403');
        var loginUser        =  $('body').hasClass('user-logged-in');    
   
        if (modal.closest('.ggb-modal-login') && accessDeniedPage && !loginUser) {      
          var referrer =  document.referrer;
          
          if (referrer === '') {
            referrer = location.protocol + "//" + location.host;
          }
        
          window.location.href = referrer;        
        }

        e.preventdefault();
      }
    


    }
  };

})(jQuery, Drupal);