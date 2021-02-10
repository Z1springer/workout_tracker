$("#submitbtn").on("click", function (event) {
  event.preventDefault();
  alert("you cannot see me i am only an illusion");
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
  alert("you cannot see me i am not an illusion");
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
      isCardio: $("#isCardio").val(),
      id: $("#id").val(),
    },
  }).then((data) => {
    console.log(data);
  });
});
