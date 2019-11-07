const request = require('supertest')
const app = require('./send-whatsapp')



describe('Post Endpoint', () => {
    it('should be able to send a whatsapp message to an array of numbers ', async() => {
        const res = await request(app)
            .post('/')
            .send({
                bodytext: "https://www.theafricareport.com/13917/how-africa-can-ride-the-artificial-intelligence-wave/"
            })
            .set('Accept', 'application/json')
        expect(res.statusCode).toEqual(200)


    })
})


describe('Get Endpoint', () => {
    it('should Should be able to fetch ', async() => {
        const res = await request(app)
            .get('/')
            .set('Accept', 'application/json')

        expect(res.statusCode).toEqual(200)
            // expect(res.body).toEqual('Hello World!')

    })
})