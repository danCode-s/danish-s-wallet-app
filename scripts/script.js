let fullUser;
getSavedData();
let user_name;
let code;
let loginCode;
function getSavedData() {
    const savedData = localStorage.getItem('user-data');
    if (savedData) {
        fullUser = JSON.parse(savedData);
    } else {
        fullUser = {};
    }
};

function saveDataToLocalStorage() {
    localStorage.setItem('user-data', JSON.stringify(fullUser));
};
function generateLoginCode(){
    const randomNumber = Math.random();
    loginCode = Math.round(randomNumber * 900 + 100);
    return loginCode;
    
};


function submit(){
    getSavedData();
    if(document.querySelector('.submit-btn')){
        console.log(fullUser);
        document.querySelector('.submit-btn')
         .addEventListener('click', () =>{
                const enteredCode = document.querySelector('.input-code').value;
                for (const key in fullUser[user_name].loginCode){
                    console.log(key);
                    if (key === enteredCode){
                        document.querySelector('.test')
                            .innerHTML = `<p>${enteredCode}</p>`;
                                    
                    }
                }
                    
            })
        }    
         
}


  
function generate(){
    if(document.querySelector('.small-wrapper')){
        document.querySelector('.new-generate-btn')
            .addEventListener('click', () => {
            getSavedData();
            const firstName = document.querySelector('.js-name-input').value;
            user_name = document.querySelector('.js-user-name-input').value;
            
            
            if(firstName && user_name){
                code = generateLoginCode();
                fullUser = {
                    [user_name]: {
                        name: firstName,
                        loginCode: code,
                    }
                }
                console.log(fullUser); 
                
                saveDataToLocalStorage();
                document.querySelector('.changeable')
                    .innerHTML = `<p class='welcome-msg'>Welcome, ${fullUser[user_name].name} 👋<br>Your Login Code is <span class="span">${code}</span></p>`;
                document.querySelector('.new-generate-btn')
                    .innerHTML = `<a href="index.html">Login Page</a>`;
                
            } else {
                alert('enter valid input')
            }
        
            
            
        
    
        });
    }
    
    
    
}

generate();
submit();   
            
        
