const expect = require("chai").expect;
const VirtualAlexa = require("virtual-alexa").VirtualAlexa;

describe("Test the hello world skill", function() {
    let alexa;
    beforeEach(function () {
        alexa = VirtualAlexa.Builder()
            .handler("src/index.handler") // Lambda function file and name
            .interactionModelFile("./models/en-US.json")
            .create();
    });

    it("Should agree that true is true", function() {
        expect(true).to.be.true;
    });

    it("Should agree that true is true asynchronously", function(done) {
        setTimeout(() => {
            expect(true).to.be.true;
            done();
        }, 500);
    });

    it("Should launch the skill and get a response", function(done) {
        alexa.launch().then((result) => {
            expect(result.response.outputSpeech.ssml).to.exist;
            expect(result.response.outputSpeech.ssml).to.include("Hello World");
            done();
        })
    });

    it("Should utter hello and get a response", function(done) {
        alexa.utter("hello").then((result) => {
            expect(result.response.outputSpeech.ssml).to.exist;
            expect(result.response.outputSpeech.ssml).to.include("Hello World");
            done();
        })
    });
});