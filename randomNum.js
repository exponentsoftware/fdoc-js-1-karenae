function getRandNum(){
    let randInt =  Math.floor(Math.random()*9)
    return randInt
}

function shuffle(num){
    if(num>9){
        return 'please enter number less than 9'
    }
    let arr = []
    while(num>0){
        let n = getRandNum()
        if(arr.indexOf(n) === -1){
            arr.push(n)
            num -= 1
        }
    }
    return arr
    
}

console.log(shuffle(7))