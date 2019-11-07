const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())
const port = 3005


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

    subscribers.forEach(contact => {
        sendWhatsappMessage("+14155238886", contact, body, (message) => {
            console.log('Message Sent Succesfully! ' + message.sid)
        });
    });

    res.send('Message Sent Succesfully! ')
});



function sendWhatsappMessage(from, to, body, callback) {
    client.messages.create({
        from: 'whatsapp:' + from,
        to: 'whatsapp:' + to,
        body: body
    }).then(
        message => callback(message)
    );
}


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// module.exports = app