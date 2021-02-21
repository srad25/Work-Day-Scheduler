// display current day  and time on page
  var todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a'); 
  $("#currentDay").html(todaysDate);


    //  Trigger click listener on saveBtn
    $(".saveBtn").on("click", function () {
    //use the nearby values
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

    // then save to local storage
        localStorage.setItem(time, text);
  });
