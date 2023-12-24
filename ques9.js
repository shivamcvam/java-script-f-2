function uniquecharctercheck(inputstring){
    const charSet=new Set();
    for (const char of inputstring){
        if(charSet.has(char)){
            console.log("the input string contains duplicates");
            return false;
        }
        charSet.add(char);
    }
    console.log("the input string has a unique charcter");
}
uniquecharctercheck("shivam");
uniquecharctercheck("astha");