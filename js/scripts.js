jQuery(document).ready(function() {

  $(".showme").click(function() {
    $(this).next(".hideme").show();
    $(this).hide();
  });


  $(".hideme").click(function() {
    $(this).hide();
    $(this).prev(".showme").show();
  });
});
