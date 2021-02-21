$(document).ready(function () {
    //display current day and time on page
    var todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a'); 
    $("#currentDay").html(todaysDate);


    //Set saveBtn click listener
    $(".saveBtn").on("click", function () {
        //get nearby values.
        var text = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id"); 

        //then save in local storage.
        localStorage.setItem(time, text);
    })
    //Get item from local storage if any for each hour
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    

    function timeKeeping() {
        //Get current number of hours.
        var rightNow = moment().hour(); 

        // Loop over time blocks
        $(".time-block").each(function () {
            var clockHour = parseInt($(this).attr("id").split("hour")[1]);

            //// Color coding time blocks according to the time (past, present, future).
            if (clockHour < rightNow) {
                $(this).addClass("past");
               
            }
            else if (clockHour === rightNow) {
                $(this).removeClass("past");
                $(this).addClass("present");
               
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    timeKeeping(); 
})


