$(function(){

  var holyMountain = $.get("http://www.omdbapi.com/?t=Holy+Mountain&y=1973&plot=short&r=json");

  var stopMakingSense = $.get("http://www.omdbapi.com/?t=Stop%20Making%20Sense&y=&plot=short&r=json");

  var videodrome = $.get("http://www.omdbapi.com/?t=Videodrome&y=&plot=short&r=json");

  // Begin search code
  $("#searchForm").on("submit", function(event){
    event.preventDefault();
    $("#holyMountain").slideUp();
    $("#stopMakingSense").slideUp();
    $("#videodrome").slideUp();

    var movie = $(this.movieSearch).val();
    var movieList = $.get("http://www.omdbapi.com/?s=" + movie )
    movieList.then(function(data){
      console.log(movie);
      console.log(movieList)
      console.log(data);
      for(var i=0; i < data.Search.length; i++){
        var title = data.Search[i].Title;
        var poster = data.Search[i].Poster;
        var year = data.Search[i].Year;
        console.log(i, data.Search[i]);
        // $(".results").append('<article class="movie" id="movie' + (1 + i) + '"');
        $(".results").append('<article class="movie" id="movie' + (1 + i) + '"></article>');

        $("#movie" + i).append("<img src=\"" + poster + "\" />")
        .append("<h2>" + title + "</h2>")
        .append("<h4>" + year + "</h3>")
      }

    }).catch(function(){
      console.log("failed to load results");
    });
  });
  // end search code


// an example of an ID is tt0105435
// we just need the number part




  $(".random").on("click", function(event){

    var ranID = makeRandom();

    $("#holyMountain").slideUp();
    $("#stopMakingSense").slideUp();
    $("#videodrome").slideUp();

    function makeRandom(){
      var ranArray = [];
      var firstNum = randomNumber(0, 3);
      var nextNum = 0;
      ranArray.push(firstNum);
      for(var i = 0; i <6; i++){
        nextNum = randomNumber(0, 10);
        ranArray.push(nextNum);
      }
      console.log(ranArray.join(""));
      return ranArray.join("");
    };
    function randomNumber(min, max){
        return (Math.floor(Math.random() * (max-min)) + min);
    }

    var randomMovie = $.get("http://www.omdbapi.com/?i=tt" + ranID + "&plot=short&r=json");

    randomMovie.then(function(data){
      var title = data.Title;
      var poster = data.Poster;
      var plot = data.Plot;
      var runtime = data.Runtime;
      var metascore = data.Metascore;
      var director = data.Director;
      var actors = data.Actors;
      if(poster == "N/A"){
        $(".results").append('<article class="movie" id="movie"></article>');
        $(".movie").append('<img src="na.jpg">')
        .append("<h2>" + title + "</h2>")
        .append("<h3> by </h3>")
        .append("<h3>" + director + "</h3>")
        .append("<h4>Metacritic Score: " + metascore + " " + runtime + "</h4>")
        .append("<h4>Featuring:")
        .append("<h3>" + actors + "</h3>")
        .append("<p>" + plot + "</p>");
      }else{
        $(".results").append('<article class="movie" id="movie"></article>');
        $("#movie").append("<img src=\"" + poster + "\" />")
        .append("<h2>" + title + "</h2>")
        .append("<h3> by </h3>")
        .append("<h3>" + director + "</h3>")
        .append("<h4>Metacritic Score: " + metascore + " " + runtime + "</h4>")
        .append("<h4>Featuring:")
        .append("<h3>" + actors + "</h3>")
        .append("<p>" + plot + "</p>");
      }

      //
      // $(".results").append('<article class="movie" id="movie"></article>');
      // $("#movie").append("<img src=\"" + poster + "\" />")
      // .append("<h2>" + title + "</h2>")
      // .append("<h3> by </h3>")
      // .append("<h3>" + director + "</h3>")
      // .append("<h4>Metacritic Score: " + metascore + " " + runtime + "</h4>")
      // .append("<h4>Featuring:")
      // .append("<h3>" + actors + "</h3>")
      // .append("<p>" + plot + "</p>");
    }).catch(function(){
        console.log("Random didn't load");
    });
  });






//working code don't touch!
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
