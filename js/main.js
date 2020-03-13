'use strict';
jQuery(function($){

var lightbox;
  
$(document).ready(function(){
  
  var galleries = $('.wp-block-gallery');
  
  
  if (galleries.length) {
    $('body').append('<div class="simple_gallery_ligthbox_wrapper"></div>');
    lightbox = $('.simple_gallery_ligthbox_wrapper');
  }
  
  
  
  galleries.each(function(){
    
    setupGallery($(this));
    
  });
  
  
  
  $('.simple_gallery_ligthbox_wrapper').on('click', function(e){
    e.preventDefault();
    lightbox.hide();
    lightbox.empty();
    
    $('html, body').css({
      overflow: 'auto'
    });
    
  });
  
});  

  
function setupGallery(gallery) {
  
  var items = gallery.find('.blocks-gallery-item a');
  
  items.on('click', function(e){
    
    
    $('html, body').css({
      overflow: 'hidden'
    });
    
    e.preventDefault();
    
    var thisItem = $(this);
    var image = thisItem.find('img').clone();
    
    lightbox.append(image);
    lightbox.show();
    
    
  });
  
  
}
  
  
  
  
  
  
});
  
  