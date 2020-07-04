function noOfChars([str,letter]){

     let letter_count=0;

     for(let char of str){

        if(char==letter){

            letter_count++;
        }
     }
     console.log("The number of characters" + letter_count);
    }
     var str = ['hello', 'l'];
     //var str = ['panther', 'n'];
     noOfChars(str);

     
     
