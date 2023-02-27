const twoSum = function(nums, target){
    let length = nums.length
    if(length <= 1) return [];
    let map = new Map()
    for(let i = 0; i< length; i++){
        let val = target - nums[i]
        if(map.has(val)){
            return [map.get(val), i]
        }else{
            map.set(nums[i], i)
        }
    }
    return []
}
// 思考边界处理
exports.twoSum = twoSum