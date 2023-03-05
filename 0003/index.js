/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let stack = []
    let length = s.length
    let index = 0
    let max = 0
    while(index< length){
        let c = s[index]
        let i = stack.indexOf(c)
        if(i >= 0){
            stack.splice(0,i+1)
        }
        stack.push(c)
        max = Math.max(max, stack.length)
        index ++
    }
    return  max
};

var s = "abcabcbb"
console.log(lengthOfLongestSubstring(s))