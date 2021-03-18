function  run(a, b, c){
    var max = a;
    if(b>max){
        if(c>b){
            max = c;
        }else{max=b;}
    }console.log('Số lớn nhất là' + max)
}