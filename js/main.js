var $btn = $('.btn-show-hide');
var $move= $('.btn-move');
var $bounce= $('.btn-bounce');
var $collapse= $('.btn-collapse-expand');

$btn.on('click', function (e) {
  $('.box').toggleClass('box-show');
});

$move.on('click', function (e) {
  $('.diamond').toggleClass('diamond-move');
});

$collapse.on('click', function (e) {
  $('.panel').toggleClass('expand');
});

$bounce.on('click', function (e) {
  $('.circle').toggleClass('bounce');
});
