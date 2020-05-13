import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);
chai.should();

describe("Officers", () => {
    describe("GET /", () => {
        it("should get all officers", () => {
             return chai.request(app)
                 .get('/')
                 .then((res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                  });
         });
        it("should get a single officer record", () => {
             const id = 1;
             return chai.request(app)
                 .get(`/${id}`)
                 .then((res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                  });
         });
        it("should not get any records", () => {
            const id = 5;
            return chai.request(app)
                .get(`/${id}`)
                .then((res) => res.should.have.status(404));
         });
    });
});
