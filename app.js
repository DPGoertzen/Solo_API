$(function(){

  var holyMountain = $.get("http://www.omdbapi.com/?t=Holy+Mountain&y=1973&plot=short&r=json");

  var stopMakingSense = $.get("http://www.omdbapi.com/?t=Stop%20Making%20Sense&y=&plot=short&r=json");

  var videodrome = $.get("http://www.omdbapi.com/?t=Videodrome&y=&plot=short&r=json");


  holyMountain.then(function(data){
    var title = data.Title;
    var poster = data.Poster;
    var plot = data.Plot;
    var runtime = data.Runtime;
    var metascore = data.Metascore;
    var director = data.Director;
    var actors = data.Actors;

    $("#holyMountain").append("<img src=\"" + poster + "\" />")
    .append("<h2>" + title + "</h2>")
    .append("<h3> by </h3>")
    .append("<h3>" + director + "</h3>")
    .append("<h4>Metacritic Score: " + metascore + " " + runtime + "</h4>")
    .append("<h4>Featuring:")
    .append("<h3>" + actors + "</h3>")
    .append("<p>" + plot + "</p>");
  }).catch(function(){
      console.log("Holy Mountain didn't load");
  });

  stopMakingSense.then(function(data){
    var title = data.Title;
    var poster = data.Poster;
    var plot = data.Plot;
    var runtime = data.Runtime;
    var metascore = data.Metascore;
    var director = data.Director;
    var actors = data.Actors;

    $("#stopMakingSense").append("<img src=\"" + poster + "\" />")
    .append("<h2>" + title + "</h2>")
    .append("<h3> by </h3>")
    .append("<h3>" + director + "</h3>")
    .append("<h4>Metacritic Score: " + metascore + "% " + runtime + "</h4>")
    .append("<h4>Featuring:")
    .append("<h3>" + actors + "</h3>")
    .append("<p>" + plot + "</p>");
  }).catch(function(){
      console.log("Stop Making Sense didn't load");
  });

  videodrome.then(function(data){
    var title = data.Title;
    var poster = data.Poster;
    var plot = data.Plot;
    var runtime = data.Runtime;
    var metascore = data.Metascore;
    var director = data.Director;
    var actors = data.Actors;

    $("#videodrome").append("<img src=\"" + poster + "\" />")
    .append("<h2>" + title + "</h2>")
    .append("<h3> by </h3>")
    .append("<h3>" + director + "</h3>")
    .append("<h4>Metacritic Score: " + metascore + "% " + runtime + "</h4>")
    .append("<h4>Featuring:")
    .append("<h3>" + actors + "</h3>")
    .append("<p>" + plot + "</p>");
  }).catch(function(){
      console.log("Videodrome didn't load");
  });

});
