//Displays the current date
var currentDate = moment();
currentDay.textContent = currentDate.format("dddd, MMMM Do YYYY");

//var workday = {
 //   "8 AM": "",
   // "9 AM": "",
   // "10 AM": "",
   // "11 AM": "",
   // "12 PM": "",
   // "1 PM": "",
 //   "2 PM": "",
 //   "3 PM": "",
 //   "4 PM": "",
  //  "5 PM": "",
}

//save function


//Save button event listener()
$(document).ready (function () {
    $("#save-btn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //saving in local storage
        localStorage.setItem(time, text);
    
    });
}





//Time Block Functions

$("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));

    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));
    $("#hour6 .description").val(localStorage.getItem("hour6"));
    $("#hour7 .description").val(localStorage.getItem("hour7"));
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));