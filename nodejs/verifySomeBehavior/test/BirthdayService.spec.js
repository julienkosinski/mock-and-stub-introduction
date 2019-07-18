"use strict";

var expect = require('chai').expect;
let sinon = require('sinon')

describe('BirthdayService', function () {
    var BirthdayService = require('../src/BirthdayService');
    var sinon = require('sinon')

    describe('greeting()', function () {
        //given
        let myClientRepository = {
            birthdayIsTodayFor: sinon.stub()
        }
        myClientRepository.birthdayIsTodayFor.withArgs('fred').returns(true)
        let mailer = {
            send: sinon.spy()
        }

        let b = new BirthdayService(myClientRepository, mailer)

       //when
        b.greeting('fred')
        it('does something', function () {
            //then
            sinon.assert.calledWith(mailer.send, "Happy birthday fred!");
        });
        it('greetings match', function () {
            sinon.assert.calledWith(mailer.send, sinon.match.string)
        });
        it('greetings get arg 0', function () {
            //var tmp = mailer.send.getCall(0).args[0]
            var tmp = mailer.send.firstCall.args[0]
            //expect(tmp).equal("Happy birthday fred!")
            expect(tmp).include("Happy bir")
            //sinon.assert.calledWith(mailer.send, "Happy birthday fred!");
        });
    });
});
