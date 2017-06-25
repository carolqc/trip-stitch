Template.main_content.events( {
    'submit form': function(event){
        event.preventDefault()
        // console.log(event.type)
        // console.log("Form submitted")
        var destination = event.target.destination.value;
        var datepicker_start = event.target.datepicker_start.value;
        var datepicker_end = event.target.datepicker_end.value;
        var organizer_name = event.target.organizer_name.value;
        console.log(destination);
        Meteor.call('create-a-trip');
    }
})
