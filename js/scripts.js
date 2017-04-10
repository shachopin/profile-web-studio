$(function () { //document ready start 
  $.stellar(
    {
//      horizontalScrolling: false,
//      verticalOffset: 120
      responsive: true
    }
  );  //shorhand for $(window).stelllar(); //can be inside document ready or not   
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
      return false; //not submit the form -- essentially this button is not able to submit form any more until you type something in message box, essentially it breaks the button action, hence preventiong from the later form submission
      //return or return true will make the button still continue to submit the form
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
  // for works row (round image row) - for now, we don't need round image row
//   for (var i = 0; i < projects.length; i++) {
// //  $("#works").append("<div class='col-xs-6 col-md-3'><div class='img-div'><img class='img-responsive' src='" + projects[i] + "'></div></div>"); //in javascript, string cannot be broken into multiple lines, will throw ILLEGAL syntaxes error
//     //to break thte string into lines, using \
//     $("#works").append("\
//       <div class='col-xs-6 col-md-3'>\
//         <div class='img-div'>\
//           <img class='img-responsive' src='" + projects[i] + "'>\
//         </div>\
//       </div>\
//     ");
//     var images = $("#works img");

//     if(i % 2 === 0){
//      // $(images[i]).css({"border": "2px solid DodgerBlue","border-radius":"50%"}); //watch this line... you cannot directly say image[i].css, because css is not a method for image[i] in this case, css is a jquery method, also this way you can set 2 css rules
//       $(images[i]).css("border", "5px solid DodgerBlue");  //this is 1 css rule setting, above can set multiple css rules
//     } else {
//       $(images[i]).css("border", "5px solid salmon");  //this is 1 css rule setting, above can set multiple css rules
//     }
//   }
  //for works2 row (square image with hover text descriptpion)
  //javscript string can not have line breaks (or blank lines) in lines, have to use \ to connect multiple lines of strings
  //.apend() can be chained. most jquery methods can be chained, because it returns jquery object 
  for (var i = 0; i < projects2.length; i++) {  //here we change a href to let it become a modal, initially href='" + projects2[i].link + "'
    $("#works2").append("\
      <div class='col-xs-6 col-md-3'>\
        <a class='work-img' href='#portfolioModal" + i + "' data-toggle='modal'>\
          <img class='img-responsive' src='" + projects2[i].pic + "'>\
          <span class='info'>\
            <p class='proj-title'>Category:</p>" + projects2[i].title + "\
          </span>\
        </a>\
      </div>\
    ").append("\
    <div class='portfolio-modal modal fade' id='portfolioModal" + i + "' tabindex='-1' role='dialog' aria-hidden='true'>\
        <div class='modal-content'>\
            <div class='close-modal' data-dismiss='modal'>\
                <div class='lr'>\
                    <div class='rl'>\
                    </div>\
                </div>\
            </div>\
            <div class='container'>\
                <div class='row'>\
                    <div class='col-lg-12'>\
                        <div class='modal-body'>\
                            <h2>" + projects2[i].title + "</h2>\
                            <p class='item-intro text-muted'>" + projects2[i].description + "</p>\
                            <table class='table table-bordered'>\
                               <thread>\
                                  <tr>\
                                     <th>App Name</th>\
                                     <th>Business Features</th>\
                                     <th>Technical Highlights</th>\
                                     <th>Link</th>\
                                  </tr>"
                                + getTableRowsHTML(projects2[i].apps) +
                               "</thread>\
                            <table>\
                            <button type='button' class='btn btn-success' data-dismiss='modal'><i class='fa fa-times'></i> Close Window</button>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
  "); 
    
    var images = $("#works2 img");
    if(i % 2 === 0){
     // $(images[i]).css({"border": "2px solid DodgerBlue","border-radius":"50%"}); //watch this line... you cannot directly say image[i].css, because css is not a method for image[i] in this case, css is a jquery method, also this way you can set 2 css rules
      $(images[i]).css("border", "5px solid DodgerBlue");  //this is 1 css rule setting, above can set multiple css rules
    } else {
      $(images[i]).css("border", "5px solid salmon");  //this is 1 css rule setting, above can set multiple css rules
    }
  } //end of for loop
  
  function getTableRowsHTML(apps) {
    var tableRowsHTML = "";
    for (var i = 0; i< apps.length; i++) {
      tableRowsHTML += "\
      <tr>\
        <td class='text-left'>" 
          + apps[i].name + 
        "</td>\
        <td>\
          <ul class='list-group'>\ " 
            + getBusinessFeaturesHTML(apps[i]["business features"]) +     
          "</ul>\
        </td>\
        <td>\
          <ul class='list-group'>\ "
            + getTechnicalHighlightsHTML(apps[i]["technical highlights"]) +
          "</ul>\
        </td>\
        <td>\
          <div class='btn-group-vertical' role='group'>\ "
            + getLinksHTML(apps[i].links) +
          "</div>\
        </td>\
      </tr>\
      ";
    }
    return tableRowsHTML;                           
  }
  
  function getBusinessFeaturesHTML(features) {
    var businessFeaturesHTML = "";
    for (var i = 0; i< features.length; i++) {
      businessFeaturesHTML += "<li class='list-group-item text-left'>" + features[i]+ "</li>";
    }
    return businessFeaturesHTML;
  }
    
  function getTechnicalHighlightsHTML(highlights) {
    var technicalHighlightsHTML = "";
    for (var i = 0; i< highlights.length; i++) {
      technicalHighlightsHTML += "<li class='list-group-item text-left'>" + highlights[i]+ "</li>";
    }
    return technicalHighlightsHTML;
  }
  
  function getLinksHTML(links) {
    var linksHTML = "";
    for (var i = 0; i< links.length; i++) {
      var buttonClass;
      var text;
      switch (i) {
        case 0:
          buttonClass = "btn-primary";
          text = "Go to app";
          break
        case 1:
          buttonClass= "btn-warning";
          text = "Check github";
          break      
      }
      linksHTML += "<a href='" + links[i] + "' target='_blank' class='btn " + buttonClass + "' style='margin-bottom:10px'>" + text + "</a>";
    }
    return linksHTML;    
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