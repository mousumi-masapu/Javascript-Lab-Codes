
function calculateSumVat(input){
    
    var sum=0;
    for (var num of input){
    sum += Number(num);
    }
    console.log("sum = "+ sum);
    console.log("VAT = "+ sum*0.2);
    console.log("Total = "+ sum*1.2);

    
}
calculateSumVat ([1.20, 2.60, 3.50]);
//calculateSumVat (['3.12', '5', '18', '19.24', '1953.2262', '0.001564', '1.1445']);
