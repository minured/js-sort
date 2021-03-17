//快速排序
//从数组中取出一个作为基准,遍历数组,每个数字和基准作比较,小的放左边,大的放右边,然后对左右两边做同样的操作
//出口就是: 只剩一个的时候,返回本身

let arr = [12, 32, 84, 15, 24, 6, 41]

let quickSort = (arr) => {
    if (arr.length <= 1) {return arr}
    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr.splice(pivotIndex, 1)[0]
    let left = []
    let right = []
    for (let i = 0; i <arr.length; i++){
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot], quickSort(right))
}
quickSort(arr)