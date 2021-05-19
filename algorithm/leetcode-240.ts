
/**
 * 
编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
每行的元素从左到右升序排列。
每列的元素从上到下升序排列。


说明:
从一个矩阵中搜索一个数
 */

function binarySearch(martix, target, index, isRow) {
    let low = index;
    let high = isRow ? martix[0].length : martix.length;
    
    while(low < high) {
        let mid = Math.floor((low + high) / 2);
        if (isRow) { 
            if (martix[index][mid] < target) {
                low = mid + 1;
            } else if (martix[index][mid] > target) {
                high = mid - 1;
            } else {
                return true;
            }
        } else {
            if (martix[mid][index] < target) {
                low = mid + 1;
            } else if (martix[mid][index] > target) {
                high = mid - 1;
            } else {
                return true;
            }
        }
    }

    return false;
}

function findInMatrix(matrix, target) {
    if (!matrix || matrix.length === 0) {
        return false;
    }

    let shortDimension = Math.min(matrix[0].length, matrix.length)
    let i = 0
    while (i < shortDimension) {
        let findInRow  = binarySearch(matrix, target, i, true)
        let findInColumn = binarySearch(matrix, target, i, false)

        if (findInRow || findInColumn) {
            return true;
        }
        ++i;
    }
    return false
}

let martix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 19, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
]
console.log(findInMatrix(martix, 5))