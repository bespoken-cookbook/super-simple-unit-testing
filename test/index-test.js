const expect = require("chai").expect;

describe("Test the hello world skill", function() {
    it("Should agree that true is true", function() {
        expect(true).to.be.true;
    });

    it("Should agree that true is true asynchronously", function(done) {
        setTimeout(() => {
            expect(true).to.be.true;
            done();
        }, 500);
    });
});