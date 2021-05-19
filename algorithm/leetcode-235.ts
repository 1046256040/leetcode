
/**
 * 
 * 二叉树搜索树最近公共祖先
 * 示例 1：
 *
 * 
 *  [3,5,1,6,2,0,8,null,null,7,4]    5， 1
 *              3
 *         5         1
 *     6       2   0    8
 * null null  7 4 
 * 
 * 
 * 最近公共祖先3
 */

// 1 + 2 + 4 + 8
// 1 * (1 - 2 % 4) / (1 - 2)

// 返回父节点的索引
function getParentIndex(index) {
    return Math.floor((index - 1) / 2)
}

// 3
// i = 0; 0 <= 3 && 1 > 3
// i = 1; 1 <= 3 && 3 > 3
// i = 2; 3 <= 3 && 7 > 3
// 根据index返回深度
function getDepthByIndex(index) {
    for (let i = 0; i <= index; ++i) {
        if ((Math.pow(2, i) - 1) <= index && (Math.pow(2, i + 1) - 1) > index) {
            return i;
        }
    }
    return 0;
}

function nearestAncestor(array, num1, num2) {
    let leftIndex = array.indexOf(num1)
    let rightIndex = array.indexOf(num2)

    while (leftIndex !== rightIndex) {
        let depth1 = getDepthByIndex(leftIndex);
        let depth2 = getDepthByIndex(rightIndex);
        if (depth1 > depth2) {
            leftIndex = getParentIndex(leftIndex);
        } else if (depth1 < depth2) {
            rightIndex = getParentIndex(rightIndex);
        } else {
            leftIndex = getParentIndex(leftIndex);
            rightIndex = getParentIndex(rightIndex);
        }
    }
    return array[leftIndex];
}

console.log(nearestAncestor([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 4))