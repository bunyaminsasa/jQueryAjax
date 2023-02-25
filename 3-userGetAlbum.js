$(function () {
  $("#btnGetAlbums").click(function () {
    fillAlbums(); //! Albumler getirildi
  });

  $("#btnGetPhotos").click(function () {
    fillPhotos(); //! Fotolar getirildi
  });
});
function fillAlbums() {
  if ($("#txtUserID").val() == "") {
    alert("Lütfen bir kullanici ID giriniz...");
    return;
  }

  var userID = $("#txtUserID").val();
  var adress = "?userId=" + userID;

  $("#cmbAlbums").html(""); //! Her seferinde gelen datayı boşaltmak için kullanılır.

  $.ajax({
    type: "Get",
    url: "https://jsonplaceholder.typicode.com/albums" + adress,

    success: function (result) {
      //! Albumler Geldi
      $.each(result, function (i, elm) {
        var item = '<option value="' + elm.id + '">';
        item += elm.title;
        item += "</option>";

        $("#cmbAlbums").append(item);
        // fillPhotos();
      });
    },

    error: function (e) {
      alert(e.responseText);
    },
  });
}

function fillPhotos() {
  //! Fotolar getirdik"
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/photos",
    success: function (result) {
      $.each(result, function (i, elm) {
        var photoItem =
          '<div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter ' +
          elm.albumId +
          '">' +
          '<img src="' +
          elm.thumbnailUrl +
          '" class="img-responsive">' +
          "</div>";
        $("#pnlPhotos").append(photoItem);
      });
    },
    error: function (e) {
      alert(e.responseText);
    },
  });
}
