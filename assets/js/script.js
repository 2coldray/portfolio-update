console.log("Hello World");

var weather = $("<img>")
  .attr(
    "src",
    "file:///Users/rayshawnbray/Desktop/Screen%20Shot%202020-09-17%20at%2010.31.45%20PM.png"
  )
  .attr("style", "width: 500px")
  .addClass("ml-4");

//Append to Document
$("#image").append(weather);
