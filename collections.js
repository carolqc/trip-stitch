import {Mongo} from 'meteor/mongo'

// Trips = new Mongo.Collection('trips')     // pick one
export const Trips = new Mongo.Collection('trips')
// console.log("Trips: ",Trips);
console.log("Trips: ", Trips.find({}).fetch() );
