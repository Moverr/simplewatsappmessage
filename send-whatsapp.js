const express = require('express')
const app = express()
const port = 3000


const TWILIO_PUBLICKEY = process.env.TWILIO_PUBLICKEY;
const TWILIO_SECRETKEY = process.env.TWILIO_SECRETKEY;

const client = require('twilio')(TWILIO_PUBLICKEY, TWILIO_SECRETKEY);

/*

client.messages.create({
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+256779820962',
    body: 'Hello Testing API Message Sending'
}).then(message => console.log(message.sid));


*/

app.get('/', function(req, res) {
    res.send('Hello World!');
});


app.post('/', function(req, res) {
    var message = req.body.message;

    client.messages.create({
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+256779820962',
        body: message
    }).then(
        // message => console.log(message.sid);
        res.send('Message Sent Succesfully! ' + message.sid); console.log(message.sid);

    );




});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// to: 'whatsapp:+256779820962'