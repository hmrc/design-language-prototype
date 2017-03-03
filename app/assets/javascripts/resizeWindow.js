function resizeWindow(el, size){

  var iframeExample = $(el).parent().find('.hack_example')

  $(iframeExample).removeClass();
  $(iframeExample).addClass('hack_example ' + size);
}
