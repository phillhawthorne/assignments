var assert = require("chai").assert;

var antiCaps = require("../index.js");

var testCases = ["", "abc","ABC", "AbC"];

describe("Testing anti caps", function(){
    it("should return empty string", function(){
        assert(antiCaps(testCases[0]) ,"");
    });
    it("it should return ABC", function(){
        assert(antiCaps(testCases[1]),"ABC");
    });
    it("should return abc",function(){
        assert(antiCaps(testCases[2]),"abc");
    });
    it("it should return aBc", function(){
        assert(antiCaps(testCases[3]),"aBc");
    });
});