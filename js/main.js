var $btn = $('.btn-show-hide');
var $move = $('.btn-move');
var $collapse = $('.btn-collapse-expand');
var $bounce = $('.btn-bounce');
var $append = $('.btn-append');
var $list = $('.list');

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
  $('.circle').addClass('bounce');
  $('.circle').removeClass('bounce');
});

$append.on('click', function (e) {
  var $li = $('<li>');

  $list.append($li);
  $li.addClass('words');
});
