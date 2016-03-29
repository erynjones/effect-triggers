var $btn = $('.btn-show-hide');
var $move= $('.btn-move');
var $bounce= $('.btn-bounce');

$btn.on('click', function (e) {
  $('.box').toggleClass('box-show');
});

$move.on('click', function (e) {
  $('.diamond').toggleClass('diamond-move');
});

$bounce.on('click', function (e) {
  $('.circle').toggleClass('bounce');
});
