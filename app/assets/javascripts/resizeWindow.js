function resizeWindow(el, size){

  var iframeExample = $(el).parent().parent().find('.hack_example')

  $(iframeExample).removeClass();
  $(iframeExample).addClass('hack_example ' + size);
}
