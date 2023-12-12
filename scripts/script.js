let userData = [];
getSavedData();
let allCodes = [];

function getSavedData() {
    const savedData = localStorage.getItem('user-data');
    if (savedData) {
        userData = JSON.parse(savedData);
    } else {
        userData = [];
    }
};

function saveDataToLocalStorage() {
    localStorage.setItem('user-data', JSON.stringify(userData));
};
function generateLoginCode(){
    const randomNumber = Math.random();
    const loginCode = Math.round(randomNumber * 900 + 100);
    return loginCode;
    
};


document.querySelector('.new-generate-btn')
    .addEventListener('click', () => {
    getSavedData();
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
    // localStorage.setItem('user-data', JSON.stringify(userData[code]));
    console.log(allCodes);
    console.log(userData);
    

    }
);

document.querySelector('.submit-btn')
.addEventListener('click', () =>{
        const enteredCode = document.querySelector('.input-code').value || 101;
        document.querySelector('.test')
            .innerHTML = `<p>${enteredCode}</p>`;
    })


            
            

             
            
        
