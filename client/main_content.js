import {Template} from 'meteor/templating'

Template.main_content.events({
    'submit form[name=create-trip]': function (event) {
        event.preventDefault()

        Meteor.call('create-a-trip', {
            destination_airport_code: event.target.destination.value,
            start_date: event.target.datepicker_start.value,
            end_date: event.target.datepicker_end.value,
            organizer_name: event.target.organizer_name.value,
            organizer_email: event.target.organizer_email.value
        });
    }
})
