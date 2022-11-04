$(document).ready(function () {
  $(".black").hide();

  $(".header").hover(
    function () {
      $(".black").show();
      $(".color").hide();
      $(".pic_bw").hide();
      $(".pic_color").show();
    },
    function () {
      $(".color").show();
      $(".black").hide();
      $(".pic_bw").show();
      $(".pic_color").hide();
    }
  );
});
