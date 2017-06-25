import {Trips} from '../collections'
import _ from 'lodash/fp'

Template.main_content.onCreated(function () {
    this.current_trip_id = new ReactiveVar(null)
    this.travelers = new ReactiveVar([])
})

Template.main_content.onRendered(function () {
    $("#datepicker_start").datetimepicker()
    $("#datepicker_end").datetimepicker()
})

Template.main_content.helpers({
    trip_data() {
        return Trips.findOne(Template.instance().current_trip_id.get())
    },
    travelers() {
        return Template.instance().travelers.get()
    }
})

Template.main_content.events({
        'click #finishButton': function (event, template) {
            // console.log("event: ",event)
            event.preventDefault()
            // console.log(event.type)
            // console.log("Form submitted")

            var trip_type = $('input[name=trip]:checked', '#firstForm')
            // console.log("trip_type:  ", trip_type);  Value

            var destination = $("#destination")
            // console.log("destination: ", destination);
            // var destination = event.target.destination.value;
            var datepicker_start = $("#datepicker_start")
            var datepicker_end = $("#datepicker_end")
            var organizer_name = $('#organizer_name')
            var organizer_email = $('#organizer_email')
            var trip_title = $('#tripTitle')
            console.log("trip_type:  ", trip_type, "destination: ", destination, "Start Date: ", datepicker_start);
            console.log("End Date: ", datepicker_end, "Name: ", organizer_name, "Email: ", organizer_email, "Trip Title: ", trip_title);

            // const trip_id = Trips.insert({
            //     trip_type: trip_type.val(),
            //     destination: destination.val(),
            //     start_date: datepicker_start.val(),
            //     end_date: datepicker_end.val(),
            //     organizer_name: organizer_name.val(),
            //     organizer_email: organizer_email.val(),
            //     trip_title: trip_title.val(),
            //     travelers: []
            // })

            Meteor.call('calculate-trips',
                _.merge({departure_date: datepicker_start.val(), return_date: datepicker_end.val()}, {
                    location_pairs: template.travelers.get().map(traveler => {
                        return {
                            origin: traveler.origin_airport_code,
                            destination: destination.val()
                        }
                    })
                }),
                (error, response) => {
                    if (error) {
                        console.error('failed to calculate trips', error)
                    }
                    else {

                        // template.current_trip_id.set(response.trip_id)
                    }
                })

            // Clear off the form for next entry
            trip_type.val('')
            destination.val('')
            datepicker_start.val('')
            datepicker_end.val('')
            organizer_name.val('')
            organizer_email.val('')

            FlowRouter.go('/results/');
        }

        ,

        // https://stackoverflow.com/questions/24869542/calling-javascript-function-on-button-click-meteor
        'click .AddTravelerButton': function (event, template) {
            event.preventDefault();
            console.log("You pressed the add traveler button");

            var travelerName = $("#travelerName").val();
            var travelerAirPort = $("#travelerAirPort").val();
            var travelerEmail = $("#travelerEmail").val();
            var travelerPhone = $("#travelerPhone").val();

            template.travelers.set(template.travelers.get().concat([{
                name: travelerName,
                origin_airport_code: travelerAirPort,
                email: travelerEmail,
                phone: travelerPhone
            }]))

            console.log('travelers', template.travelers.get())

            $("#travelerName").val("")
            $("#travelerAirPort").val("")
            $("#travelerEmail").val("")
            $("#travelerPhone").val("")
        }
    }
)
