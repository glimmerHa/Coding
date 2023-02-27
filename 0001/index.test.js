
// var arr = [2,7,11,15]
// var target = 9
// ouput [0,1]


// var arr = [3,2,4]
// var target = 6
// ouput [1,2]

// var arr = [3,3]
// var target = 6
// ouput [0,1]


// var arr = [0,4,3,0]
// var target = 0
// ouput [0,3]

// var arr = [-1,-2,-3, -4, -5]
// var target = -8
// ouput [2,4]
let twoSum = require('./index').twoSum
var arrs = [[2,7,11,15],[3,2,4],[3,3],[0,4,3,0],[-1,-2,-3, -4, -5]]
var targets = [9,6,6,0,-8]
for(let i = 0; i < arrs.length; i++){
    let arr = arrs[i]
    let target = targets[i]
    console.log(twoSum(arr, target))
}
// 思考 自动化测试怎么写？