function calctotalvalue(){
    let totalvalue=0;
    for (let i=0; i<arguments.length; i++){
        totalvalue +=arguments[i];
        
    }
    console.log(totalvalue);
    
    return totalvalue;
}


calctotalvalue(20,30,40);
