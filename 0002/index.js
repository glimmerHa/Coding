/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
function createList(arr){
    let head = null, tail = null
    let length = arr.length
    let index = 0;
    while(index < length){
        if(!head){
            head = tail = new ListNode(arr[index])
        }else{
            tail.next = new ListNode(arr[index])
            tail = tail.next
        }
        index++
    }
    return head
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = null; let tail = null;
    let shi = 0
    while(l1 || l2){
        let val1 =l1? l1.val:0
        let val2 = l2? l2.val: 0
        let sum = val1+val2+shi
        if(!head){
            head = tail = new ListNode(sum %10)
        }else{
            tail.next = new ListNode(sum %10)
            tail = tail.next
        }
        shi = sum>=10? 1: 0
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
    }
    if(shi){
        tail.next = new ListNode(shi)
    }
    return head
};
// var l1 = createList([2,4,3])
// var l2 = createList([5,6,4])

l1 = createList([9,9,9,9,9,9,9]), l2 =createList([9,9,9,9]) 
console.log(addTwoNumbers(l1, l2))