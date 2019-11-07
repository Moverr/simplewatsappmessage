const TWILIO_PUBLICKEY = process.env.TWILIO_PUBLICKEY;
const TWILIO_SECRETKEY = process.env.TWILIO_SECRETKEY;


const client = require('twilio')(TWILIO_PUBLICKEY, TWILIO_SECRETKEY);


// TWILIO_PUBLICKEY
// TWILIO_SECRETKEY
//send message to 

client.messages.create({
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+256779820962',
    body: 'Hello Testing API Message Sending'
}).then(message => console.log(message.sid));


// to: 'whatsapp:+256779820962',