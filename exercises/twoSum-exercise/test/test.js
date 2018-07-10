const assert = require('chai').assert;

const twoSum = require('../index');

const testCases = [
    {
        arr: [1,2,3],
        int: 4
    },
    {
        arr: [2,8,3,7],
        int: 10
    }
]

describe('Testing twoSum function', () => {
    it('should return [0,2]', () => {
        assert.deepEqual(twoSum(testCases[0].arr, testCases[0].int),[0,2]);
    });
    it('should return [0,1]', () => {
        assert.deepEqual(twoSum(testCases[1].arr, testCases[1].int),[0,1]);
    });
})