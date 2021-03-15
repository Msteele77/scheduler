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
//}

//save function


//Save button event listener()
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //saving in local storage
        localStorage.setItem(time, text);
        console.log(time, text);
})




function timeTracker () {
    
    var timeNow = moment().hour();
    console.log(timeNow);
            
            $(".time-block").each(function () {
                console.log($(this));

                var blockTime = parseInt($(this).attr("id").split("hour")[1]);
                console.log(blockTime);
                
                if (blockTime < timeNow) {
                    $(this).children(".description").addClass("past");
                    $(this).children(".description").removeClass("future");
                    $(this).children(".description").removeClass("present");
                    
                }
                else if (blockTime === timeNow) {
                    $(this).children(".description").addClass("present");
                    $(this).children(".description").removeClass("past");
                    $(this).children(".description").removeClass("future");
                    
                }
                else {
                    $(this).children(".description").addClass("future");
                    $(this).children(".description").removeClass("present");
                    $(this).children(".description").removeClass("past");
                    
    
                }
            })
        }





    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
timeTracker();
})