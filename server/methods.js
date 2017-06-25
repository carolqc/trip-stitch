import {Trips} from '../collections'
import {flight_api} from './sabre-api'
import _ from 'lodash/fp'

const flight_search = Meteor.wrapAsync(flight_api.instaflights_search, flight_api)

Meteor.methods({
    'calculate-trips'(trip_data) {
        const departure_date = new Date(trip_data.departure_date).toISOString().split('T')[0]
        const return_date = new Date(trip_data.return_date).toISOString().split('T')[0]
        console.log('trip data', trip_data)
        console.log('date format', departure_date, return_date)

        const cheapest_trips = trip_data.location_pairs.map(trip => {
            const response =
                JSON.parse(flight_search({
                    departuredate: departure_date,
                    returndate: return_date,
                    origin: trip.origin,
                    destination: trip.destination,
                    sortby: 'totalfare'
                }))

            const lowest_price_trip = _.first(_.get('PricedItineraries', response))

            return {
                origin: trip.origin,
                destination: trip.destination,
                total_fare: _.get('AirItineraryPricingInfo.ItinTotalFare.TotalFare.Amount', lowest_price_trip),
                departure_time: _.get('AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].DepartureDateTime', lowest_price_trip),
                arrival_time: _.get('ArrivalDateTime', _.last(_.get('AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment', lowest_price_trip)))
            }
        })

        console.log('cheapest trips', cheapest_trips)
        return cheapest_trips
    }
})

