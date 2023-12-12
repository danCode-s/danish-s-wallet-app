let userData = [
    loginCode = {
        name: 'User',
        user_name: 'user12',
    }
];
// saveLoginCode();
function generateLoginCode(){
    userData = [];
    // saveLoginCode();
    const randomNumber = Math.random();
    const loginCode = Math.round(randomNumber * 900 + 100);

    
    userData[0] = {
        loginCode,
    };


    // localStorage.setItem('code', JSON.stringify(userData))
    console.log(userData);
    
};





            
            

             
            
        
