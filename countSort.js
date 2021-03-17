//计数排序
//先是遍历一次数组, 把数值和出现次数记录在哈希表,同时记录最大最小值
//从最小值开始到最大值,看哈希表有没有,有就push该值的进新数组, 注意push的次数.


let arr = [12,32,-84,-15,24,6,41]

let countSort = (arr) => {
    let hashTable = {}, max = 0, min = 0; result = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] in hashTable) {
            hashTable[arr[i]] += 1
        } else {
            hashTable[arr[i]] = 1
        }
        if (arr[i] > max) {max = arr[i]}
        if (arr[i] < min) {min = arr[i]}
    }
    console.log(hashTable)
    for (let j = min; j <= max; j++) {
        if(j in hashTable){
            for (let i = 0; i < hashTable[j]; i++){
                result.push(j)
            }
        }
    }
    return result
}
countSort(arr)
