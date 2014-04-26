var colours = ['orangered', 'gold', 'dodgerblue', 'indigo', 'red', 'lime'];

/* Add ability to peek at random index to arrays. */
Array.prototype.random = function() {
    var index = Math.floor(Math.random() * this.length);
    return this[index];
};

var bubbles = function($bubble) {

    if($bubble.parents().length > 18) {
        $bubble.removeClass('bubble');
        $bubble.addClass('old-bubble');
        $bubble.css('background-color', '#f2f2f2');
        return;
    }

    var newBubbles = '<div class="full-container"><div class="bubbles-row"><div class="bubble"></div><div class="bubble"></div></div><div class="bubbles-row"><div class="bubble"></div><div class="bubble"></div></div></div>';

//    $tile.append(newTiles).fadeIn(300);
    var $newBubbles = $(newBubbles);

    $newBubbles.find('.bubble').each(function() {
        $(this).css('background-color', colours.random())
    });

    $newBubbles.appendTo($bubble);

    $bubble.removeClass('bubble');
    $bubble.addClass('old-bubble');
};

$(document).ready(function() {

    var bubblesBoard = $('#bubbles-board');

    /* Give initial colours. */
    $('.bubble').each(function() {
        $(this).css('background-color', colours.random());
    });

    bubblesBoard.on('mouseenter', '.bubble', function() {
        bubbles($(this));
    });

    bubblesBoard.on('click', '.bubble', function() {
        bubbles($(this));
    })
});
