function isArrayUnique(arr){
    var newArr = []
    for(let i = 0; i < arr.length; i++){
        if(newArr.indexOf(arr[i]) !== -1){
            return false
        }
        newArr.push(arr[i])
    }
    return true
}

console.log(isArrayUnique([1, 4, 6, 2, 3]))
console.log(isArrayUnique([1, 4, 6, 2, 1]))