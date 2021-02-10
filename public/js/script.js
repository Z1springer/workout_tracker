$("#submitbtn").on("click", function (event) {
  event.preventDefault();
  $("#woContainer").hide();
  $("#exContainer").show();
  $.ajax({
    url: "/api/workout",
    method: "POST",
    data: { name: $("#name").val() },
  }).then((data) => {
    console.log(data);
    $("#id").val(data._id);
  });
});

$("#exsubmitbtn").on("click", function (event) {
  event.preventDefault();
  $.ajax({
    url: "/submit",
    method: "POST",
    data: {
      name: $("#exname").val(),
      type: $("#type").val(),
      weight: $("#weight").val(),
      sets: $("#sets").val(),
      reps: $("#reps").val(),
      duration: $("#duration").val(),
      distance: $("#distance").val(),
      id: $("#id").val(),
    },
  }).then((data) => {
    console.log(data);
  });
});
