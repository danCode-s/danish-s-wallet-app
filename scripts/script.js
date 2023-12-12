let userData = [];
let allCodes = [];


function generateLoginCode(){
    const randomNumber = Math.random();
    const loginCode = Math.round(randomNumber * 900 + 100);

    return loginCode;
};


document.querySelector('.new-generate-btn')
.addEventListener('click', () => {
    const firstName = document.querySelector('.js-name-input').value;
    const user_name = document.querySelector('.js-user-name-input').value;
    let code;
    if(firstName){
        code = generateLoginCode();
        allCodes.push(generateLoginCode());

    } else {
        alert('enter valid input')
    }
    console.log(allCodes);
    

    }
    
    )



            
            

             
            
        
