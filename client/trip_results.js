import {Trips} from '../collections'
import _ from 'lodash/fp'

Template2('trip_results', {
    helpers: {
        trip_data() {
            return Trips.findOne(this.data.trip_id())
        }
    }
})
