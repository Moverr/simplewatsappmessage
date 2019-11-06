const client = request('twilio')();

client.messages.create({
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+14155238886'
})