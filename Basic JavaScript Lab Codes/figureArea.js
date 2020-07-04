function figureArea(arr){

    let w = Number(arr[0]);
    let h = Number(arr[1]);
    let W = Number(arr[2]);
    let H = Number(arr[3]);
    let smallRectArea = w * h ;
    let bigRectArea = W * H ;
    let commonRectArea = Math.min(w,W)*Math.min(H,h);
    console.log(commonArea);
    let totalFigureArea = smallRectArea + bigRectArea - commonRectArea;
    console.log(totalFigureArea);
    return totalFigureArea;
}
    var nums = ['2', '4', '5', '3'];
    //var nums = ['13', '2', '5', '8'];
    figureArea(nums);