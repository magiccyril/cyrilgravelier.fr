$(document).ready(function() {

  /**
   * Email obfuscation.
   */
  $('.spam').each(function(i) {
    var $email = $(this);

    var user = $email.find('.u');
    var domain = $email.find('.d');

    $email.empty();
    $email
      .append(user)
      .append('@')
      .append(domain);
  });

  /**
   * If there's "print" in hash then print.
   */
  var print = function() {
    if (-1 !== window.location.hash.indexOf('print')) {
      window.location.hash = window.location.hash.replace('print', '');
      window.print();
    }
  }
  $(window).bind('hashchange', function() {
    print();
  });
  print();

  /**
   * Twipsy
   */
  $('.tooltip').twipsy({
    html: true
  });

  /**
   * Homepage cards.
   */
  var cards = $('.card');
  cards
    .each(function(i) {
      var card = $(this);

      var shadow = card.next('.card-shadow');
      shadow.hide();
      var reflexion = shadow.next('.reflexion');
      reflexion.hide();

      // get all childs.
      var childs = card.find('*');
      childs.hide();
      card.data('childs', childs);

      // hide the card.
      card.hide();
      // and wait to display it with fading.
      card.delay(i * 800).fadeIn();
      reflexion.delay(i * 800).fadeIn();
      shadow.delay(i * 800).fadeIn();
    })
    // on mouse enter fadeIn all childs.
    .bind('mouseenter', function(e) {
      var childs = $(this).data('childs');
      childs.fadeIn();
    })
    // on mouse enter fadeOut all childs.
    .bind('mouseleave', function(e) {
      var childs = $(this).data('childs');
      childs.fadeOut();
    });

  /**
   * Top bar fade on homepage.
   */
  if ('/' == window.location.pathname) {
    $('.topbar')
      .fadeTo(0, 0.05)
      .bind('mouseenter', function() {
        $(this).fadeTo(500, 1)
      })
      .bind('mouseleave', function() {
        $(this).fadeTo(500, 0.05)
      });
  }

  /**
   * Contact.
   */
  $('#contact section')
    .each(function() {
      var $section = $(this);

      $section
        .data('contact-details', $section.find('.contact-details'))
        .data('contact-logo', $section.find('.contact-logo'))
        .data('contact-logo-reflect', $section.find('.contact-logo-reflect'));

      $section.data('contact-logo').animate({
        top: -20
      }, 500);
      $section.data('contact-details').hide();
    })
    .bind('mouseenter', function(e) {
      var $section = $(this);

      $section.data('contact-details').fadeIn();

      var up = false;
      var animate = function() {
        up = !up;
        var top = -25;
        if (!up) {
          top = 0;
        }
        $section.data('contact-logo').animate({
          top: top
        }, 500, animate);
      }
      animate();

    })
    .bind('mouseleave', function(e) {
      var $section = $(this);

      $section.data('contact-logo').animate({
        top: 0
      }, 500, function() {
        $section.data('contact-logo').clearQueue();
      });
      $section.data('contact-details').fadeOut();
    })
    .trigger('mouseleave');
});
