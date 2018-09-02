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
    
      // to differentiate between ajax package and login on home
      $('.ggb-modal-login-login-wrapper').closest('.reveal').addClass('modal-login');
      $('.home .views-element-container').closest('.reveal').addClass('pkgs-grid');

      $('.reveal .close-button').on('click', function(e) {
        var element = $(this);
        auth_modal_route_back(element);
      });    
    
      $('.reveal-overlay').on('click', function(e) {
        if (e.target !== this) {
          return;      
        }
    
        var element = $(this);
        auth_modal_route_back(element);
      });
  
      // CAROUSELS
      // ///////////////////////////////////////////////

      // CHOOSER CAROUSEL  - RADIO BUTTON ASPECT RATIO CLAMPER
      // Maintains aspect ratio of radio btn while orbit slides move

      // Set aspect ratio of .box
      var aspect_ratio = 1;

      // Store the jQuery object for future reference
      var $box = jQuery(".carousel-chooser-en .radio-wrapx");

      // Initial resize of .box
      jQuery(document).ready(function($) {
        $box.height( $box.width() * aspect_ratio );
      });

      // Resize .box on browser resize
      jQuery(window).resize(function() {
        $box.height( $box.width() * aspect_ratio );
      });

      // VIEWER CAROUSEL  - FIELDSET WIDTH CHILD CONTAINMENT
      // Contains child widths for chrome, to work around a chrome-specific issue with fieldsets

      $('.carousel-viewer-en .fieldset-wrapper').css({
        'width': ($('.carousel-viewer-en .fieldgroup').width() + 'px')
      });

      // Let viewer and chooser carousels know when they're at home  - and not 
      $('.form-wrapper .orbit li.is-active:first-of-type').closest('.carousel-viewer-en').addClass('at-home');
      $('.form-wrapper .orbit li.is-active:first-of-type').closest('.carousel-chooser-en').addClass('at-home');
      $('.form-wrapper .orbit').on('slidechange.zf.orbit', function(event, orbit) {
        $(this).closest('.carousel-viewer-en').removeClass('at-home');
        $(this).closest('.carousel-chooser-en').removeClass('at-home');  
        var slide_number = orbit[0].dataset.slide;
        if (slide_number == 0) {
          $(this).closest('.carousel-viewer-en').addClass('at-home');
          $(this).closest('.carousel-chooser-en').addClass('at-home');
        }
      });

      // FIT TEXT - HERO TYPE SCALING
      // for home page

      //$('.cta-txt').fitText(1.9/*, { minFontSize: '3rem', maxFontSize: '12rem' }*/);
      //$('.cta-subtitle').fitText(4.5/*, { minFontSize: '1rem', maxFontSize: '4rem' }*/);

      // PACKAGE FULL INFO PAGES - ADDONS
      // add add on classes to pkg master nodes to match pkg form displays

      $('.funeral-package-family-led').find('.field--name-field-pln-embalming').addClass('ggb-list-addon');

      $('.funeral-package-going-out-green.field--name-field-pln-catering').addClass('ggb-list-addon');
      $('.funeral-package-going-out-green .field--name-field-pln-flowers').addClass('ggb-list-addon');

      $('.funeral-package-youve-got .field--name-field-pln-embalming').addClass('ggb-list-addon');

      $('.funeral-package-keeping-faith .field--name-field-pln-embalming').addClass('ggb-list-addon');
      $('.funeral-package-keeping-faith .field--name-field-pln-catering').addClass('ggb-list-addon');

      $('.funeral-package-traditional .field--name-field-pln-embalming').addClass('ggb-list-addon')
      $('.funeral-package-traditional .field--name-field-pln-media-tributes').addClass('ggb-list-addon');
      $('.funeral-package-traditional .field--name-field-pln-video-funeral').addClass('ggb-list-addon');
    }
  };

})(jQuery, Drupal);