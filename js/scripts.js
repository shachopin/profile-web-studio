$(function () { //document ready start 
  $.stellar();  //shorhand for $(window).stelllar(); //can be inside document ready or not   
// or below works  
//    $(function(){
//          $.stellar({
//                //horizontalScrolling: false,  //more configuration options
//                //verticalOffset: 40
//          });
//    });

//    Individual select the container id won't work
//    $(function(){
//          $('#about').stellar({
//                horizontalScrolling: false,
//                verticalOffset: 40
//          });
//    });
  
  //bootstrap tooltip
  $('#item1').tooltip(); //make sure the a tag has id="#item1" and title="some hover text"
  //the hover text will always show by title attribute, but just not bootrap style
  //to have the bootstrap style, you have to call the above bootstrap method - $('#item1').tooltip();
  $('[data-toggle="tooltip"]').tooltip();  //css attribute selector..here for testing button hover text
  
  //Enable Smooth Scrolling
  var $root = $('html, body');
  $('.navbar a').click(function () {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
  });
  
// in small device, once you open the navbar drawer, cannot close it unless clicking on the hamburger menu again
// $(document).on('click',function(){
//   $('.collapse').collapse('hide');
// })
// the above still won't click on the link and close the drawer
// but a lot better, u can click on anywhere else and close the drawer
// how to click on the link and close the drawer?
  $('.navbar-collapse ul li a').click(function () {
    $('.collapse').collapse('hide');
  });
  
  //control contact me message box submission
  //$(".message-box").css("border", "2px solid red");
  $("#contact-form-button").on("click", function () {
    var comment = $('.message-box').val();
    if (comment.length === 0) {
      //$('#visible-comment').text("Why is there no message?");
      //$('#visible-comment').html(comment); //here same effect
      //$('.message-box').hide();
      $(".message-box").css("border", "2px solid red");
      $('#visible-comment').text("Why is there no message?");
      return false; //not submit the form -- essentially this button is not able to submit form any more until you refresh the page
    }
  });
  //on keyup event in the message box
  $(".message-box").on("keyup", function () {
    $(".message-box").css("border", "");  //to undo to the css change added before by jquery
    $('#visible-comment').text("");
    var charCount = $(".message-box").val().length; //here we set the length of the content of the textarea to a variable
    $("#char-count").html(charCount); //here we show a running character count to the user
    if (charCount > 50) {
      $('#char-count').text(charCount + " - over 50 characters!");
      $("#char-count").css("color", "red");
    } else {
       // need it to be black
      $("#char-count").css("color", "black");
    }
  });
  
  //dynamically generating your profile images divs
  // for works row (round image row)
  for (var i = 0; i < projects.length; i++) {
//  $("#works").append("<div class='col-xs-6 col-md-3'><div class='img-div'><img class='img-responsive' src='" + projects[i] + "'></div></div>"); //in javascript, string cannot be broken into multiple lines, will throw ILLEGAL syntaxes error
    //to break thte string into lines, using \
    $("#works").append("\
      <div class='col-xs-6 col-md-3'>\
        <div class='img-div'>\
          <img class='img-responsive' src='" + projects[i] + "'>\
        </div>\
      </div>\
    ");
    var images = $("#works img");

    if(i % 2 === 0){
     // $(images[i]).css({"border": "2px solid DodgerBlue","border-radius":"50%"}); //watch this line... you cannot directly say image[i].css, because css is not a method for image[i] in this case, css is a jquery method, also this way you can set 2 css rules
      $(images[i]).css("border", "5px solid DodgerBlue");  //this is 1 css rule setting, above can set multiple css rules
    } else {
      $(images[i]).css("border", "5px solid salmon");  //this is 1 css rule setting, above can set multiple css rules
    }
  }
  // for works2 row (square image with hover text descriptpion)
  for (var i = 0; i < projects2.length; i++) {
    $("#works2").append("\
      <div class='col-xs-6 col-md-3'>\
        <a href='" + projects2[i].link + "' class='work-img'>\
          <img class='img-responsive' src='" + projects2[i].pic + "'>\
          <span class='info'>\
            <p class='proj-title'>Title:</p>" + projects2[i].description + "\
          </span>\
        </a>\
      </div>\
    "); 
  }
  $(".work-img").mouseenter( function() {
    //console.log(this); //this is the DOM object(for anchor tag) on which that event got trigger, you need to wrap this DOM with $ 
    //DOM object -> jquery object so you can use jqeury methods
    //kinda like above image[i].css is not defined issue
    //$(this).hide(); //works, when mouse hover, item vanishes
    /*
    this, in our situation, refers to the anchor tag. What we need is the span tag with the class of "info" inside this anchor tag. this does not work like a regular descendant selector like the ones we have used before. But jQuery still makes it easy for us to select an element inside this. All we need is to write the following code:

    $(".info", this)
    */   
    $(".info", this).show();
  }).mouseleave(function(){
    $(".info", this).hide();
  }); //method chaining
     
});  //document ready end

//The last step under "Map Options" is the most interesting step. Because now we are actually going to write the JavaScript that accesses the API library and puts life into your map. Let's take a look at the example at the top of the page again. If you compare your code to the example you should notice that only one part is missing:

//Since we want the code to run before we load the Maps API you need to paste the code somewhere outside the $(document).ready function. Make sure that the script.js file is linked above the JavaScript link we added in step 4

var map;
function initMap() {
  var myLatLng = {lat: 37.5427449, lng: -122.3074127};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12, //  Add the zoom level for your location. In JavaScript APIv3, the lowest zoom level is 1 (see the whole world) and the closest zoom level is 21. We chose a zoom level of 8 to show Berlin.
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Visit Me!'
  });
}