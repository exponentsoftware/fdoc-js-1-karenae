function countWords(paragraph){
    let splitPara = paragraph.split(" ");
    let wordCount = 0
    for(let i = 0; i < splitPara.length; i++){
        if(splitPara[i].length >1){
            wordCount = wordCount + 1
        }
    }
    return wordCount
}
let paragraph = 'I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?'

console.log(countWords(paragraph))