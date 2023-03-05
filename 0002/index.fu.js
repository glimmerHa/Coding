// 常规的以为是数组关系
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let length1= l1.length
    let length2 = l2.length
    let index = 0
    let result = []
    let shi = 0
    while(index < length1 && index < length2){
        let val = l1[index] + l2[index]+shi
        shi = val >= 10 ? 1 :0
        result.push(shi? val-10: val) 
        index ++
    }
    while(index < length1){
        let val = l1[index] +shi
        shi = val >= 10 ? 1 :0
        result.push(shi? val-10: val) 
        index ++
    }
    while(index < length2){
        let val = l2[index] +shi
        shi = val >= 10 ? 1 :0
        result.push(shi? val-10: val) 
        index ++
    }
    if(shi){
        result.push(shi)
    }  
    return result
};
var l1 = [2,4,3], l2 = [5,6,4]
console.log(addTwoNumbers(l1, l2))