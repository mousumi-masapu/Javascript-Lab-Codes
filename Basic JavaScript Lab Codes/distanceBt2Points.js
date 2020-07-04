function distanceBt2Points(arr){

    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let x2 = Number(arr[2]);
    let y2 = Number(arr[3]);
    console.log(Math.sqrt(Math.pow((x2-x1),2)+ Math.pow((y2-y1),2)));
}
  var nums = ['2', '4', '5', '0'];
//var nums = ['2.34', '15.66', '-13.55', '-2.9985'];
  distanceBt2Points(nums);