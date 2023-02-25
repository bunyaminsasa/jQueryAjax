$(function () {
  $("#btnGetTodoData").click(function () {
    $("#todoBody").html("");

    var filteredUserId = null;
    if ($("#txtUserID").val() != "") {  
      filteredUserId = $("#txtUserID").val();
    }

    var QSparam = "";
    if (filteredUserId != null) {
      if (filteredUserId > 0) {
        QSparam = "?userId=" + filteredUserId;
      }
    }

    $.ajax({
      type: "Get",
      url: "https://jsonplaceholder.typicode.com/todos" + QSparam,

      success: function (data) {
        // var filteredId = parseInt($("#txtUserID").val()); //! Bunu yorum satırına almamın nedeni
        // var data = data.filter(function (elm, i) {        //! Burada data geldikten sonra filtreleme yaptık
        //   return elm.userId === filteredId;               //! Halbuki filtrelemeyi data gelmeden yapmalıyız.
        // });                                               //? Yukarıda ise data gelmeden filteleme yaptık.

        $.each(data, function (index, row) {
          var table = "<tr>";
          table += "<td>" + row.id + "</td>";
          table += "<td>" + row.userId + "</td>";
          table += "<td>" + row.title + "</td>";
          table +=
            '<td style="text-align: center;"><input class="form-check-input" type="checkbox"></td>';
          table += "</tr>";

          $("#todoBody").append(table);
        });
      },

      error: function (e) {
        alert(e.responseText);
      },
    });
  });
});
