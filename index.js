$(function () {
  $("#btn-box").click(function () {
    $.ajax({
      url: "index.json",
      dataType: "json",
      success: function (data) {
        var items = [];

        $.each(data, function (key, val) {
          items.push('<option id="' + key + '">' + val + "</option>");
        });

        $("<select>", {
          class: "numbers",
          html: items.join(""),
        }).appendTo("body");
        $("#btn-box").prop("disabled", true);
      },
      statusCode: {
        404: function () {
          alert(
            "Erro 404, a página não foi encontrada. Tente novamente mais tarde."
          );
        },
      },
    });
  });
});
