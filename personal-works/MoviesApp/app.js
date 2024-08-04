// creating the form
$(".form").on("submit", function (e) {
  e.preventDefault();
  let movieInput = $("#movieinput").val();
  let ratingInput = $("#ratinginput").val();
  let userInputs = {
    movieInput,
    ratingInput
  };

  // minimum length requirement
  if (movieInput.length >= 2) {
    // appending the data
    let newRow = $("<tr><td>" + userInputs.movieInput + "</td><td>" + userInputs.ratingInput + "</td><td><button class='delete'>Delete</button></td></tr>");
    $(".watchlist tbody").append(newRow);
    // clearing the form
    $("#movieinput").val("");
    $("#ratinginput").val("");
  }
});

// delete button
$(".watchlist").on("click", ".delete", function () {
  $(this).closest("tr").remove();
});