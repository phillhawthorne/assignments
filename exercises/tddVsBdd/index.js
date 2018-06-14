// Assert --> take two inputs, an expected value,
//  and an actual value, and return ture or false if they match

// Describe --> lets us call assert as many times as we need to

var assert = function (actual, expected){
    if(actual === expected){
        console.log({ type: "success", details:{
            actual,expected}
        })
    } else{
        throw{
            type:"fail",
            details:{
                actual: actual,
                expected: expected
            }
        }
    }
}

function checkForValue(arr, item){
    return arr.includes(item);
}

var testCase = [
    {arr: [1,2,3,4,5], item: 6},
    {arr: [6,7,8,9,10], item: 8}
]

// assert(checkForValue(testCase[0].arr,testCase[0].item), false);
// assert(checkForValue(testCase[1].arr,testCase[1].item), true);

var describe = function(message, testFunct){
    console.log(message);
    try{
        testFunct();
    }catch(err){
        console.log(err);
    }
}
describe("testing checkForValue", function(){
    assert(checkForValue(testCase[0].arr,testCase[0].item), false);
    assert(checkForValue(testCase[1].arr,testCase[1].item), true);


})
// TDD test driven development steps:

// 1. Write test first
// 2. Run your test without inputs, to ensure they fail
// 3. Wrirte the program with the test in mind
// 4. Run test, Make sure test passes
// 5. Refactor/reorganize if you need to 
// 6. Rinse and repeat

// BDD Behavior driven development 