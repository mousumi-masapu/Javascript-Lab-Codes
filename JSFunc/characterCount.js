function noOfCharCount(str, letter){

    var letter_count=0;

    for(var pos=0; pos <= str.length; pos ++){

        if (str[pos] == letter) {

            letter_count+=1;
        }

    } 
    return letter_count; 
}
console.log(noOfCharCount(['hello', 'l']));

//console.log(noOfCharCount(['panther', 'n']));