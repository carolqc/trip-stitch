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
        BlazeLayout.render('trip_results', {trip_id: params.trip_id})
    }
})

FlowRouter.route('/about_us/', {
    name: "About Us",
    action() {
        BlazeLayout.render('about_us')
    }
})
