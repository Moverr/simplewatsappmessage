const client = require('twilio')('AC1116f7f37712406b6ad309490fcfa71f', '1b29dee0a36addb39f0e5010f0fc6e8b');



//send message to 

client.messages.create({
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+256779820962',
    body: 'Hello Testing API Message Sending'
}).then(message => console.log(message.sid));


// to: 'whatsapp:+256779820962',