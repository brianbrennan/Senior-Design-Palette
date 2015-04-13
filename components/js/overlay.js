$(document).ready(function(){
  $('#contactButton').click(function(){
    showOverlay();
  });
  $('.overlay form span').click(function(){
    hideOverlay();
  });
  $('.overlay').click(function(){
    hideOverlay();
  });
  $('.overlay form').click(function(){
    event.stopPropagation();
  });
  $('#submit').click(function(){
    formSubmit();
  });
  
});


function showOverlay(){
  $('.overlay').css('visibility','visible');
  $('.overlay').css('opacity','1');
}

function hideOverlay(){
  $('.overlay').css('opacity','0');
  $('.overlay').css('visibility','hidden');
}



function formSubmit(){
  $raw = $('contactForm').html();
  $('#submit').html('<p>Thank you for your message!</p>');
}