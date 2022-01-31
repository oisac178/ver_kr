$(".section-project__tooltip-1").hover(
  function(){
    $(this).parent().addClass("hover1")
  },
  function(){
    $(this).parent().removeClass("hover1")
  }
);

$('.section-project__tooltip-1').on({
  focus: function() {
    $(this).parent().addClass('focused1');
  },

  blur: function() {
    $(this).parent().removeClass('focused1');
  }
});

$(".section-project__tooltip-2").hover(
  function(){
    $(this).parent().addClass("hover2")
  },
  function(){
    $(this).parent().removeClass("hover2")
  }
);

$('.section-project__tooltip-2').on({
  focus: function() {
    $(this).parent().addClass('focused2');
  },

  blur: function() {
    $(this).parent().removeClass('focused2');
  }
});

$(".section-project__tooltip-3").hover(
  function(){
    $(this).parent().addClass("hover3")
  },
  function(){
    $(this).parent().removeClass("hover3")
  }
);

$('.section-project__tooltip-3').on({
  focus: function() {
    $(this).parent().addClass('focused3');
  },

  blur: function() {
    $(this).parent().removeClass('focused3');
  }
});

