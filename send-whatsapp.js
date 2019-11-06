const client = request('twilio')();

client.messages.create({
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+256779820962',
    body: 'Hello Testing API Message Sending'
}).then(message => console.log(message.sid));