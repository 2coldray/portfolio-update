console.log("Hello World");

var card = $("<div>").addClass("card text center");
var cardHeader = $("<div>")
  .addClass("card-header text-center")
  .text("Weather Dashboard Application");
var cardBody = $("<div>").addClass("card-body")

var cardImage = $("<img>")
  .attr(
    "src",
    "file:///Users/rayshawnbray/Desktop/Screen%20Shot%202020-09-17%20at%2010.31.45%20PM.png"
  )
  .attr("style", "width: 500px")
//   .addClass("ml-4");

//Append to Document
cardBody.append(cardHeader, cardImage);
card.append(cardBody);
$("#image").append(card);
