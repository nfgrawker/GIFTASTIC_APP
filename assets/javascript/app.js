$(document).ready(function(){
var emotionArray = ["Angry","Sad","Mad","Embarrased","Overjoyed","Happy","Anxious","Livid"]


emotionArray.forEach(function(emotion){
  var button = $("<button>")
  button.addClass("btn btn-info original ml-1 mt-2 gifbtn")
  button.attr("searchterm",emotion)
  button.text(emotion)
  $(".buttons").append(button)
})

$(".mknew").on("click",function(){
  var buttonname = $("#search").val().trim()
  var button = $("<button>")
  button.addClass("btn btn-info new ml-1 mt-2 gifbtn")
  button.attr("searchterm",buttonname)
  button.text(buttonname)
  $(".buttons").append(button)
})
$(document).on('click','.gifbtn',function(){
  $(".pictures").empty()
  var emotion = $(this).attr("searchterm").trim()
  apikey = "M9iZOfoKJVRIUjlHZSeifrswb8vjiDVb"
  $.ajax({
    url : "https://api.giphy.com/v1/gifs/search?q="+emotion+"&api_key="+apikey,
    method : "GET"
  }).then(function(response){
    for (var i=0;i<10;i++){
      var newDiv = $("<div>")
      var image = $("<img>")
      image.attr("src",response.data[i].images.fixed_height_still.url)
      image.attr("data-still",response.data[i].images.fixed_height_still.url)
      image.attr("data-animate",response.data[i].images.fixed_height.url)
      image.attr("data-state","still")
      image.addClass("m-2 changeState")
      newDiv.append(image)
      newDiv.append("<p class = 'bg-light'>Rating: "+response.data[i].rating+"</p>")
      $(".pictures").append(newDiv)
    }
    })
$(document).on('click','.changeState',function(){
      var state = $(this).attr("data-state")
      var animate = $(this).attr("data-animate")
      var still = $(this).attr("data-still")
      if (state == "still") {
      $(this).attr("src",animate)
      $(this).attr("data-state","animate")
      }
      else{
      $(this).attr("src",still)
      $(this).attr("data-state","still")
    }
    })

})


















})
