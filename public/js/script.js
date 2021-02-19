function renderWO() {
  //TODO: Print it all on the front page
  $("#workouts").empty();
  $.ajax({
    url: "/workouts",
    method: "GET",
  }).then((dbData) => {
    console.log(dbData);
    dbData.forEach((workout) => {
      const newDiv = $("<div>");
      const title = $("<h3>", {
        text: workout.name,
      });
      const editBtn = $("<button>", {
        text: "Edit",
        id: "editorial",
      });
      const dltBtn = $("<button>", {
        text: "Delete",
        id: "delitorial",
      });
      const newUl = $("<ul>");
      newDiv.append(title);
      workout.exercise.forEach((exercise) => {
        const newLiName = $("<li>", {
          text: `Name: ${exercise.name}`,
        });
        const newLiType = $("<li>", {
          text: `Type: ${exercise.type}`,
        });
        const newLiWgt = $("<li>", {
          text: `Weight: ${exercise.weight}`,
        });
        const newLiSets = $("<li>", {
          text: `Sets: ${exercise.sets}`,
        });
        const newLiReps = $("<li>", {
          text: `Reps: ${exercise.reps}`,
        });
        const newLiDuration = $("<li>", {
          text: `Duration: ${exercise.duration}`,
        });
        const newLiDist = $("<li>", {
          text: `Distance: ${exercise.distance}`,
        });

        newUl.append(
          newLiName,
          newLiType,
          newLiWgt,
          newLiSets,
          newLiReps,
          newLiDuration,
          newLiDist
        );

        newDiv.append(newUl);
        newDiv.append(editBtn);
        newDiv.append(dltBtn);
        $("#workouts").append(newDiv);
      });
    });
  });
}

renderWO();

//edit button for each box, put route to add exercises to workouts already made
//TODO: Add multiple exercises to one workout
//TODO: Add another exercise to a workout already made

$(document).on("click", "#editorial", (event) => {
  event.preventDefault();
  console.log("Hello World!");
  const myModalEl = document.getElementById("myModal");
  myModalEl.toggle();
});
// $.ajax({
//   url: "/workouts",
//   method: "UPDATE",
//   data: { exercise },
// }).then((woUndEx) => {
//   console.log(woUndEx);

// });

$("#delitorial").on("click", (event) => {
  event.preventDefault;
});

$("#submitbtn").on("click", function (event) {
  event.preventDefault();
  $("#woContainer").hide();
  $("#exContainer").show();
  $.ajax({
    url: "/api/workout",
    method: "POST",
    data: { name: $("#name").val() },
  }).then((data) => {
    // console.log(data);
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
    location.href = "/";
  });
});
