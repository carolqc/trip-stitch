import sabre_flight_api from 'sabre-dev-studio/lib/sabre-dev-studio-flight'

const flight_api = new sabre_flight_api({
   client_id: 'V1:zyaudm2ybwf9rfzs:DEVCENTER:EXT',
   client_secret: 'C0uhAcC6',
   uri: 'https://api.test.sabre.com',
})

console.log('run')

const logger_callback = function(error, data) {
   if (error) {
      // Your error handling here
      console.log(error)
   }
   else {
      // Your success handling here
      console.log(JSON.stringify(JSON.parse(data)))
   }
}

// flight_api.travel_theme_lookup(logger_callback)
// flight_api.airports_at_cities_lookup({ city: 'NYC' }, logger_callback)