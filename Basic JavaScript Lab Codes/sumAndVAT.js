function sumAndVAT(arr){  

      let sum = 0;
      for(let num of arr ){
          sum += Number(num);
      }

       console.log("Sum is " + sum);
       console.log("VAT is " + sum * 0.2);
       console.log("Total is " + sum * 1.2);

    }   
       var nums = ['1.20', '2.60', '3.50']; 
       //var nums = ['3.12', '5', '18', '19.24', '1953.2262', '0.001564', '1.1445'];
       sumAndVAT(nums);


      