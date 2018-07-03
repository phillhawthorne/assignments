let chai =  require ('chai');
let assert = chai.assert;

let validateIP = require('../warmup');

describe('Given a string, write a function that determines whether it is a valid IP address', () =>{
    it('should return true when it recieves a valid ip address', () =>{
        assert.equal(validateIP('3.89.230.0'), true)
    })
    it('should return false when it recieves ip address that contains letters',() =>{
        assert.equal(validateIP('aa.io.230.0'), false)
    })
    it('should return false if the ip address contains contains empty strings', ()=>{
        assert.equal(validateIP('0.30..90'), false)
    })
})

