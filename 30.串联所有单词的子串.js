/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let start = 0;
    let ans = 0;
    let len = s.length;
    let path = words[0].length;
    let result = [];
    while(start<len){
        let set = new Set();
        let str = s.substr(ans,path);
        if(words.includes(str)){
            set.add(str);
            while(words.includes(str)){

            }
        }else{
            ans++;
            start++;
        }
    }
};
// @lc code=end

