let userData = [
    
];
let allCodes = [];


function generateLoginCode(){
    const randomNumber = Math.random();
    const loginCode = Math.round(randomNumber * 900 + 100);

    return loginCode;
};


document.querySelector('.new-generate-btn')
.addEventListener('click', () => {
    const firstName = document.querySelector('.js-name-input').value;
    //const user_name = document.querySelector('.js-user-name-input').value;
    let code;
    if(firstName){
        code = generateLoginCode();
        allCodes.push(code);
        userData[code] = {
            firstName: firstName,
        }
        document.querySelector('.changeable')
            .innerHTML = `<p class='welcome-msg'>Welcome, ${userData[code].firstName} 👋<br>Your Login Code is <span class="span">${code}</span></p>`;
        document.querySelector('.new-generate-btn')
            .innerHTML = `<a href="index.html">Login Page</a>`;
    } else {
        alert('enter valid input')
    }
    console.log(allCodes);
    console.log(userData);
    

    }
    )



            
            

             
            
        
