let expect = require('chai').expect
let request = require('request')

describe('/api/:searchTerm/:mediaType', () => {
    it('it should get all the search parameters', (done) => {
        request('http://localhost:4000/apiTest/',
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
    });
});


