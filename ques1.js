const alluser=["Anurag",
"Mithun",
"Alka",
"Prabir",
"Vinay",
"Shubham",
"Shivan",
"Farman",];

function isuserpresent(user){
    if(alluser.includes(user)){
        console.log ('yes, ${user} is a valid user.');
         
    }
    else{
        console.log('no, $ {user} is not vaild user.');
       
    }

}
isuserpresent("Mithun");
isuserpresent("shivam");