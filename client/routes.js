import {FlowRouter} from 'meteor/kadira:flow-router'
import {BlazeLayout} from 'meteor/kadira:blaze-layout'

FlowRouter.route('/', {
    name: 'Home',
    action() {
        BlazeLayout.render('main_content')
    }
})

FlowRouter.route('/trips/:trip_id', {
    name: 'Trips',
    action(params) {
        BlazeLayout.render('manage_trip', {trip_id: params.trip_id})
    }
})

FlowRouter.route('/about_us/', {
    name: "About Us",
    action() {
        BlazeLayout.render('about_us')
    }
})
FlowRouter.route('/sign_in/', {
    name: "Sign In",
    action() {
        BlazeLayout.render('sign_in')
    }
})
FlowRouter.route('/my_trips/', {
    name: "My Trips",
    action() {
        BlazeLayout.render('my_trips')
    }
})
FlowRouter.route('/results/', {
    name: "Results",
    action() {
        BlazeLayout.render('results')
    }
})
