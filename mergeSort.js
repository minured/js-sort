//归并排序
//思路是每次分成两两一对的数组, 直到每个数组只有一个元素,(我们认为时候每个数组是排好序的)
//关键是 merge函数 , 比较每对数组的第一个元素, 小的放前面, 连接上下一次的最小值,就是每次连接两个数组中的最小值
//出口是,两个数组都是一个元素的时候, 取出这两个数组中的最小值, 被取出的数组就为空, 
//再concat上另一个数组, 两个数组就变成了一个数组,变成了从小到大排列的两个元素的一个数组,以此类推直到全部合并

let arr = [12, 32, 84, 15, 24, 6, 41]

let merge = (a, b) => {
    if (a.length === 0) return b 
    if (b.length === 0) return a 
    return a[0] > b[0] ? [b[0]].concat(merge(a, b.slice(1))) : [a[0]].concat(merge(a.slice(1), b))
}
let mergeSort = (arr) => {
    if (arr.length === 1) {return arr}
    let midIndex = Math.floor(arr.length / 2)
    let left = arr.slice(0, midIndex) 
    let right = arr.slice(midIndex)
    return merge(mergeSort(left), mergeSort(right))
}
mergeSort(arr)
