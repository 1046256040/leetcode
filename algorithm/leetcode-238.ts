
/**
 * 
给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。


示例 1：

输入: [1,2,3,4]
输出: [24,12,8,6]

[1] => [1, 1] => [1, 1, 2] => [1, 1, 2, 6]
[1] => [1, 4] => [1, 4, 12] => [1, 4, 12, 24]

2 => 0
1 => 1
0 => 2
提示：题目数据保证数组之中任意元素的全部前缀元素和后缀（甚至是整个数组）的乘积都在 32 位整数范围内。
说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。

进阶：
你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）

 */

function productExceptSelf(array) {
    if (array.length === 0) return [];

    let left = [1];
    let right = [1];
    let ret = [];

    for (let i = 1; i < array.length; ++i) {
        left.push(left[i - 1] * array[i - 1])
    }
    for (let i = array.length - 2; i >= 0; i--) {
        right.push(right[array.length - 2 - i] * array[i + 1])
    }
    for (let i = 0; i < left.length; ++i) {
        ret.push(left[i] * right[array.length - 1 - i])
    }
    return ret;
}

// 进阶
// [1,2,3,4]
/**
 * 左边数组的乘积 * 右边数组的乘积
 */

function productExceptSelf1(array) {
    if (array.length === 0) return [];

    let left = 1
    let right = 1;
    let ret = array.map((item) => {
        return 1;
    })

    for (let i = 0; i < array.length; ++i) {
        ret[i] = ret[i] * left
        left = left * array[i];
    }

    for (let i = array.length - 1; i >= 0; --i) {
        ret[i] = ret[i] * right;
        right = right * array[i]
    }
    return ret
}


console.log(productExceptSelf1([2, 2, 2, 4]));
