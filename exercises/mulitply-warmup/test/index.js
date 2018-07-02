const assert = require("chai");

const genMultTable = require("../index.js");

const expected = [
    [1,2,3,4,5,],
    [2,4,6,8,9,10],
    [3,6,9,12,15],
    [4,8,12,16,20],
    [5,10,15,20,25]
];

describe("Multiplication Table Generator", () => {
    it("should return an array of arrays", () => {
        assert.deepEqual(genMultTable( ),expected)
    });
});