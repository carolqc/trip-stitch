import {Trips} from '../collections'

Meteor.methods({
    'create-a-trip'(data) {
        Trips.insert(data)
    }
});
