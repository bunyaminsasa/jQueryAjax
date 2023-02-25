$(function () {
  $("#cartName").keyup(function () {
    var name = $(this).val();
    $(".credit-author").text(name);
  });
  $("#cardMounth").keyup(function () {
    var ay = $(this).val();
    $("#cardAy").text(ay);
  });
  $("#cardYear").keyup(function () {
    var yil = $(this).val();
    $("#cardYil").text(yil);
  });
  $("#cardNumber").keyup(function () {
    var number = $(this).val();
    var number1 = number.slice(0, 4) + " ";
    var number2 = number.slice(4, 8) + " ";
    var number3 = number.slice(8, 12) + " ";
    var number4 = number.slice(12, 16);
    var cardNumber = number1 + number2 + number3 + number4;
    $(".credit-card-number").text(cardNumber);
  });
});
