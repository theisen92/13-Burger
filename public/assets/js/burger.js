$(function () {
  $(".eat-burger").on("click", function (event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var newDevouredState = {
      devoured: newDevoured,
    };

    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevouredState,
    }).then(function () {
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val(),
      devoured: 0,
    };

    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      location.reload();
    });
  });
});
