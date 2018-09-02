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
    


    // $('.path-user .button-group').each(function() {
    //     var text = $(this).text();
    //     $(this).text(text.replace('Create new Observer Account', 'Be an Observer'));
    //     $(this).text(text.replace('Create new Supporter Account', 'Be an Supporter'));
    //     $(this).text(text.replace('Create new Team Member Account', 'Be a Team Member'));
    //     $(this).text(text.replace('Create new Place Leader Account', 'Be a Place Leader'));
    // });


// $('.path-user .button-group a :not(:has(*))').text(function(i, v) {
//   return v.replace(/'Create new Observer Account'/g, 'Be an Observer');    
// });

// Replace all instances of "this" or "that" with "the other".
//$(".path-user .button-group a").replaceText( /'Create new Observer Account'/gi, 'Be an Observer' );





    }
  };

})(jQuery, Drupal);