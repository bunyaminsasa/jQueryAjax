//! AJAX

$(function () {
  $.ajax({
    type: "Get", //! GET, POST, DELETE, PUT
    url: "https://jsonplaceholder.typicode.com/users",
    success: function (data) {
      $.each(data, function (index, satir) {
        $("#musteriler").append(
          "<option value='" + satir.email + "'>" + satir.username + "</option>"
        );
      });
    },
    error: function (e) {
      alert(e.responseText);
    },
  });
});

function veriGetir() {
  $.ajax({
    type: "Get", //! GET, POST, DELETE, PUT
    url: "https://jsonplaceholder.typicode.com/posts",
    success: function (data) {
      // $(".bilgiler").html(data[3].title); //! 3. Data'nın title'sini getirdik "body" deseydik body'si gelecekti.
      $.each(data, function (index, satir) {
        $(".bilgiler").append(
          //! Burada bütün dataları almak için "each" ile bir döngü kurduk, yukarıda ise sadece 3. data geldi
          "<div><h1>" +
            satir.title +
            "</h1><span>" +
            satir.body +
            "</span><hr/></div>"
        );
      });
    },
    error: function (e) {
      alert(e.responseText);
    },
  });
}
