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
// generateLoginCode();

// function saveLoginCode(){
//     userData = JSON.parse(localStorage.getItem('code'));
// }

document.querySelector('.js-generate-btn').addEventListener('click', function() {
    const takerElement = document.querySelector('.taker');
    
    // Remove the entire 'taker' class
    takerElement.classList.remove('taker');
    takerElement.classList.add('transparent-every');
    document.querySelector('.input-code')
        .innerHTML=``;

});



            
            

             
            
        
