function countWords(paragraph,word1,word2){
    var newStr = paragraph.replace(/\./g,"")
    let splitPara = newStr.split(" ")
    let count1 = 0
    let count2 = 0
    for(var i = 0; i < splitPara.length; i++){
        if(splitPara[i] == word1){
            count1 = count1+1
        }
        else if(splitPara[i] == word2){
            count2 = count2+1
        }
    }
    if(count1 > count2){
        return `The word ${word1} more frequently occurred than ${word2}.`
    }
    else if(count1 < count2){
        return `The word ${word2} more frequently occurred than ${word1}.`
    }
    else{
        return 'two words occurred same number of times'
    }
    
}
let paragraph = 'I love teaching. If you do not teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.'
console.log(countWords(paragraph,'love', 'you'))