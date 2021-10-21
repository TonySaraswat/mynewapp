function mysteryFunc(param){
    var arr=(""+ param).split("");
    var final =1;
    for(x in arr){
        final*=parseInt(arr[x]);
    }
    console.log(final);
}
