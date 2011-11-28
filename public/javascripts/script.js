$(document).ready(function() {
    var cards = $('.card');
    cards
        .each(function(i) {
            var card = $(this);

            var reflexion = $('<div />');
            reflexion
                .attr({
                    class: 'reflexion'
                    , id: 'reflexion-'+ card.attr('id')
                })
                .css({
                    left: card.width() * i + 20 * (i + 1)
                })
                .hide()
                .insertAfter(card);

            // get all childs.
            var childs = card.find('*');
            childs.hide();
            card.data('childs', childs);

            // hide the card.
            card.hide();
            // and wait to display it with fading.
            card.delay(i * 800).fadeIn();
            reflexion.delay(i * 800).fadeIn();
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

    $('.topbar')
        .fadeTo(0, 0.05)
        .bind('mouseenter', function() {
            $(this).fadeTo(500, 1)
        })
        .bind('mouseleave', function() {
            $(this).fadeTo(500, 0.05)
        });

});