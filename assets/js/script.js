console.log("Hello World");

//Display Weather Dashboard App to the page
var card = $("<div>").addClass("card text center");
var cardHeader = $("<div>")
  .addClass("card-header text-center")
  .text("Weather Dashboard Application");
var cardBody = $("<div>").addClass("card-body")
var url = "https://user-images.githubusercontent.com/60899926/93659487-94715780-fa13-11ea-82d4-ee557acc7132.png";
var cardImage = $("<img>")
  .attr(
    "src",
    "https://user-images.githubusercontent.com/60899926/93659487-94715780-fa13-11ea-82d4-ee557acc7132.png"
  )
  .attr("style", "width: 500px")

var cardFooter = $("<div>").addClass("card-footer sticky text-center");
var cardLink = $("<a>").attr("href", "https://github.com/2coldray/weather-dashboard").text("Github").attr("style", "margin-right: 10px");
var cardSite = $("<a>").attr("href", "https://2coldray.github.io/weather-dashboard/").text("Application")

//Append to Document
cardFooter.append(cardLink, cardSite)
cardBody.append(cardHeader, cardImage, cardFooter);
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
    "https://user-images.githubusercontent.com/60899926/93659473-6429b900-fa13-11ea-8ea2-d2d1cdeaca06.png"
  )
  .attr("style", "width: 500px")

//Append to Document
cardBody2.append(cardHeader2, cardImage2);
card2.append(cardBody2);
$("#image").append(card2);
