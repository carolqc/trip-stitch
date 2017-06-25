// https://stackoverflow.com/questions/28885479/meteor-js-add-a-date-picker-to-a-page
// $('.datetimepicker').datetimepicker();
$("#datepicker_start").datetimepicker();
$("#datepicker_end").datetimepicker();

Template.main_content.events( {

        'click #finishButton': function(event){
        // console.log("event: ",event)
        event.preventDefault()
        // console.log(event.type)
        // console.log("Form submitted")

        var TripType = $('input[name=trip]:checked', '#firstForm').val();
        // console.log("TripType:  ", TripType);  Value

        var destination = $("#destination").val();
        // console.log("destination: ", destination);
        // var destination = event.target.destination.value;
        var datepicker_start = $("#datepicker_start").val();
        var datepicker_end = $("#datepicker_end").val();
        var organizer_name = $('#organizer_name').val();
        var organizer_email = $('#organizer_email').val();
        var trip_title = $('#tripTitle').val();
        console.log("TripType:  ", TripType, "destination: ", destination, "Start Date: ", datepicker_start );
        console.log( "End Date: ", datepicker_end, "Name: ", organizer_name, "Email: ", organizer_email, "Trip Title: ", trip_title);

// how do I send data to server, via function call arguments?

        Meteor.call('create-a-trip');
    },

    // https://stackoverflow.com/questions/24869542/calling-javascript-function-on-button-click-meteor
    'click .AddTravelerButton': function(event){
      event.preventDefault();
      console.log("You pressed the add traveler button");

      var travelerName = $("#travelerName").val();
      var travelerAirPort = $("#travelerAirPort").val();
      var travelerEmail = $("#travelerEmail").val();
      var travelerPhone = $("#travelerPhone").val();

    //   Clear out the entries
    $("#travelerName").val("")
    $("#travelerAirPort").val("")
    $("#travelerEmail").val("")
    $("#travelerPhone").val("")

      // need to send values to server, then paste the data below, and then clear out the cells.

  }

})
