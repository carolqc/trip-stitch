import twilio from 'twilio';

const ACCOUNT_SID = 'AC5db98d8a2ecbec693ed9acc51e6a281c';
const AUTH_TOKEN = 'baa6e4693827bc646b130560ff311c55';

const client = twilio(ACCOUNT_SID, AUTH_TOKEN);

const from = '+17026239040';
// app.post('/test', (req, res) => {
//     console.info(req.body.to);
//     client.messages.create({
//         from,
//         to: req.body.to,
//         body: 'test',
//     }).then(message => console.log(message.sid))
//         .catch(err => console.error(err));
//     return res.end();
// });

// TODO example sending confirmation message to all travelers
// import twilio from 'twilio';
// import { Meteor } from 'meteor/meteor';
//
// const TWILIO_ACCOUNT_SID = 'AC5db98d8a2ecbec693ed9acc51e6a281c';
// const TWILIO_AUTH_TOKEN  = 'baa6e4693827bc646b130560ff311c55';
//
// const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
// const from = '+17026239040';
//
// const messagePeople = (tripId, organizer, ...people) => {
//     people.map(person => {
//         const {name, number} = person;
//         client.messages.create({
//             from,
//             to: number,
//             body: `Hello ${name}! You've been invited by ${organizer.name} to view the trip plan: ${
//                 Meteor.absoluteUrl(`trips/${tripId}`)}`,
//         }).then(message => console.info(message.sid))
//             .catch( err => console.error(err));
//     });
// };
//
// export default messagePeople;
