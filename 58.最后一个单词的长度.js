/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let sArr = s.trim().split(' ');
    return sArr.pop().length;
};
var lengthOfLastWordByArr = function(s) {
    let buffer = [];
    let result = [];
    for(let i = 0,len = s.length;i<len;i++){
        if(s[i] == ' '){
            !buffer.length||result.push(buffer.join(''));
            buffer = [];
        }else{
            buffer.push(s[i]);
        }
    }
    !buffer.length||result.push(buffer.join(''));
    if(result.length == 0) return 0;
    return result.pop().length;
};
// @lc code=end


