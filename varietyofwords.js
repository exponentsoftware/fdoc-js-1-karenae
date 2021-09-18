function varietyOfWords(paragraph){
    var newStr = paragraph.replace(/\./g,"")
    let arr =  newStr.split(" ").filter(function(str,pos,self){
        return self.indexOf(str) == pos
    })
    return arr.length
}
let paragraph = 'I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?'
console.log(varietyOfWords(paragraph))