import twilio from 'twilio';
import { Meteor } from 'meteor/meteor';

const TWILIO_ACCOUNT_SID = 'AC5db98d8a2ecbec693ed9acc51e6a281c';
const TWILIO_AUTH_TOKEN  = 'baa6e4693827bc646b130560ff311c55';

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
const from = '+17026239040';

const messagePeople = (tripId, organizer, ...people) => {
    people.map(person => {
        const {name, number} = person;
        client.messages.create({
            from,
            to: number,
            body: `Hello ${name}! You've been invited by ${organizer.name} to view the trip plan: ${
                Meteor.absoluteUrl(`trips/${tripId}`)}`,
        }).then(message => console.info(message.sid))
            .catch( err => console.error(err));
    });
};

export default messagePeople;
