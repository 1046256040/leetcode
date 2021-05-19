
/**
 * 
题目： 较小的三数之和

给定一个长度为 n 的整数数组和一个目标值 target，寻找能够使条件 nums[i] + nums[j] + nums[k] < target 成立的三元组 i, j, k 个数（0 <= i < j < k < n）。

示例：
输入: nums = [-2,0,1,3,-3,-4], target = 2
输出: 2
解释: 因为一共有两个三元组满足累加和小于 2:
     [-2,0,1]
     [-2,0,3]
进阶：是否能在 O(n2) 的时间复杂度内解决？

解题思路：

先排序，后夹逼处理
 */

function threeSumSmaller(array, target) {
    let count = 0;

    array.sort();
    for (let i = 0; i < array.length - 2; ++i) {
        let left =  i + 1;
        let right = array.length - 1;

        while (left < right) {
            let sum = array[i] + array[left] + array[right];
            if (sum >= target) {
                right--;
            } else {
                count += right - left;
                break;
            }
        }
    }
    return count;
}

console.log(threeSumSmaller([-2, 0, 1, 3, -3, -4], 2))

