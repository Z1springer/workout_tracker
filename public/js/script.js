function renderWorkout() {
  $("#workouts").empty();
  $.ajax({
    url: "/populatedworkouts",
    method: "GET",
  }).then((dataHome) => {
    console.log(dataHome);
    dataHome.forEach((plan) => {});
  });
}
