$(document).ready(function() {
  var color = 'white';
  var colors = 'red blue green white yellow'
  var boxes = $('.box');

  boxes.on('click', function() {
    $(this).addClass('white')
  })

  boxes.on('dblclick', function() {
    $(this).removeClass('white')
  })

  $('#reset').on('click', function() {
    boxes.removeClass('White')
  })

  $('#red').on('click', function() {
    color = 'red';
    $(this).addClass(color);
  })
  boxes.on('dblclick', function() {

  })

})

$(document).ready(function() {
  var boxes = $('.box');

  boxes.on('click', function() {
    $(this).addClass('white');
  })

  boxes.on('dblclick', function() {
    $(this).removeClass();
  })

  $('#reset').on('click', function() {
    boxes.removeClass();
  })

  $(document).on('click', function() {
    if(this === color)
  })

  $(this).on('click', )

})

// figure out how to make dragging the mouse work :: on mousedown, on mouseup
//figure out how to change the above to have only one and to KNOW when a user is clicking on a certain button.
