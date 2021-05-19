
/**
 * 
给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
返回滑动窗口中的最大值。


示例 1：

输入：nums = [1,3,5,-3,-1,3,6,7], k = 3
输出：[5,5,5,3,6,7]

输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
输出：[3,3,5,5,6,7]
解释：
滑动窗口的位置 最大值
--------------- -----
[1 3 -1] -3 5 3 6 7 3
 1 [3 -1 -3] 5 3 6 7 3
 1 3 [-1 -3 5] 3 6 7 5
 1 3 -1 [-3 5 3] 6 7 5
 1 3 -1 -3 [5 3 6] 7 6
 1 3 -1 -3 5 [3 6 7] 7

示例 2：

输入：nums = [1], k = 1
输出：[1]

示例 3：

输入：nums = [1,-1], k = 1
输出：[1,-1]

示例 4：

输入：nums = [9,11], k = 2
输出：[11]

示例 5：

输入：nums = [4,-2], k = 2
输出：[4]

 */

function maxSlidingWindow(array, k) {
    if (array.length < k) {
        return array;
    }

    let ret = [];
    let maxArray = [];
    for (let i = 0; i < array.length; ++i) {
        while(maxArray.length && array[i] > maxArray[maxArray.length-1]) {
            maxArray.pop()
        }
        maxArray.push(array[i])
        if(i >= k && array[i-k] === maxArray[0]) {
            maxArray.shift()
        }

        if (i >= k-1){
            ret.push(maxArray[0]);
        }
    }
    return ret;
}

console.log(maxSlidingWindow([1, 3, 5, -3, -1, 3, 6, 7], 3))
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
console.log(maxSlidingWindow([1],1))
console.log(maxSlidingWindow([1, -1], 1))
console.log(maxSlidingWindow([9, 11], 2))
console.log(maxSlidingWindow([4, -2], 2))


/*
function maxSlidingWindow1(nums: number[], k: number): number[] {
    const len: number = nums.length;
    if (len < k || k === 0) {
        return [];
    }
    const queue: number[] = [];
    const res: number[] = [];
    for (let i = 0; i < k; i++) {
        doubleQueue(queue, nums, i, k);
        queue.push(i);
    }
    res.push(nums[queue[0]]);
    for (let i = k; i < len; i++) {
        doubleQueue(queue, nums, i, k);
        queue.push(i);
        res.push(nums[queue[0]]);
    }
    return res;
};

function doubleQueue(queue: number[], nums: number[], idx: number, k: number) {
    // 如果双向队列中，包含不是滑动窗口内的数，直接出队
    if (queue.length && idx >= k + queue[0]) {
        queue.shift();
    }
    // 如果当前的值大于对尾的值，则pop出对尾的值，因为pop出去的值，不会在向右滑窗时作为最大的值；
    while (queue.length && nums[idx] > nums[queue[queue.length - 1]]) {
        queue.pop();
    }
}
*/