function printPattern(num){
    let str = ""
    for(var i=0; i<num; ++i){
        for(var j=0; j<i;++j){
            str +="#"
        }
        str += "\n"
    }
    console.log(str)
}
printPattern(7)