/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(null);
    let curr = result;
    let carr = 0;
    let p1 = l1;
    let p2 = l2;
    while(p1!=null||p2!=null){
        let x = p1 != null?p1.val:0;
        let y = p2 != null?p2.val:0;
        let val = (x+y+carr)%10;
        carr = Math.floor((x+y+carr)/10);
        console.log(val,carr);
        curr.next = new ListNode(val);
        curr = curr.next;
        if (p1 != null) p1 = p1.next;
        if (p2 != null) p2 = p2.next;
    }
    if(carr > 0){
       curr.next = new ListNode(carr);
    }
    return result.next;
};
// @lc code=end

