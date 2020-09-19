console.log("Hello World");

//Display Weather Dashboard App to the page
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

//Append to Document
cardBody.append(cardHeader, cardImage);
card.append(cardBody);
$("#image").append(card);

//================================================
//Display Workday scheduler to the Page
var card2 = $("<div>").addClass("card text center mt-2");
var cardHeader2 = $("<div>")
  .addClass("card-header text-center")
  .text("Workday Scheduler")

var cardBody2 = $("<div>").addClass("card-body")

var cardImage2 = $("<img>")
  .attr(
    "src",
    "file:///Users/rayshawnbray/Desktop/Screen%20Shot%202020-09-12%20at%206.50.24%20PM.png"
  )
  .attr("style", "width: 500px")

//Append to Document
cardBody2.append(cardHeader2, cardImage2);
card2.append(cardBody2);
$("#image").append(card2);
