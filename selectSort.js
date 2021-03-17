// 排序算法
//从数组中取出最小值, 放到前面.(得到最小值的index, arr.splice(minIndex, 1)
//出口是: 当数组剩两个的时候,看谁小,交换位置

let arr = [12, 32, 84, 15, 24, 6, 41]

let getMinIndex = (arr) => {
    let index = 0
    for (let i = 0; i < arr.length; i++) {
        index = arr[i] < arr[index] ? i : index
    }
    return index
}

let selectSort = (arr) => {
    if (arr.length === 2) {return arr[0] < arr[1] ? arr : arr.reverse()}
    let minIndex = getMinIndex(arr)
    let min = arr[minIndex]
    arr.splice(minIndex, 1)
    return [min].concat(selectSort(arr))
}
selectSort(arr)
