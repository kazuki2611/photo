function lodingStop() {
  $('#loadingWrap').addClass('loadingNone');
}
$(window).on('load',function(){
  lodingStop();
});


Resources