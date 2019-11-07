const express = require('express')
const app = express()
app.use(express.json())

const port = 3000


const TWILIO_PUBLICKEY = process.env.TWILIO_PUBLICKEY;
const TWILIO_SECRETKEY = process.env.TWILIO_SECRETKEY;

const client = require('twilio')(TWILIO_PUBLICKEY, TWILIO_SECRETKEY);

// these subscribers help in identifying which guys should be on the mailing list
const subscribers = [
    "+256779820962", "+256779820962"
]



app.get('/', function(req, res) {
    res.send('Hello World!');
});


app.post('/', function(req, res) {
    var body = req.body.bodytext;
    var message = "";

    console.log(body);

    subscribers.forEach(contact => {
        sendWhatsapp()
        client.messages.create({
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:' + contact,
            body: body
        }).then(
            message => console.log('Message Sent Succesfully! ' + message.sid)

        );

    });

    res.send('Message Sent Succesfully! ')
});



function sendWhatsapp(from, to, body, callback) {
    client.messages.create({
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:' + contact,
        body: body
    }).then(
        message => console.log('Message Sent Succesfully! ' + message.sid)

    );
}










app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// to: 'whatsapp:+256779820962'