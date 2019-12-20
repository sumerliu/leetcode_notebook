/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let left = 0,right = nums.length-1;
    while(left != right){
        let val = nums[left]+nums[right]-target;
        if(val > 0) right--;
        if(val < 0) left++;
        if(val == 0) return [left,right];
    }
    return [];
};
// @lc code=end

