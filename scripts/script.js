let fullUser;
let user_name;
let code;
let allUserNames;
let loginCode;
getSavedData();
function getSavedData() {
    const savedData = localStorage.getItem('user-data');
    //const savedUsers = localStorage.getItem('all-users');
    if (savedData) {
        fullUser = JSON.parse(savedData);
        //allUserNames = JSON.parse(savedUsers);
    } else {
        fullUser = {};
        //allUserNames = [];
    }
};

function saveDataToLocalStorage() {
    localStorage.setItem('user-data', JSON.stringify(fullUser));
    // localStorage.setItem('all-users', JSON.stringify(allUserNames));
};
function generateLoginCode(){
    const randomNumber = Math.random();
    loginCode = Math.round(randomNumber * 900 + 100);
    return loginCode;
    
};


function submit(){
    getSavedData();
    
    if(document.querySelector('.submit-btn')){
        // console.log(fullUser[allUserNames]);
        document.querySelector('.submit-btn')
         .addEventListener('click', () =>{
                const enteredCode = document.querySelector('.input-code').value;
                const enterUserName = document.querySelector('.user-enter').value;

                if (enteredCode && enterUserName){
                    // console.log(fullUser[enterUserName].loginCode);
                    if (enterUserName in fullUser && fullUser[enterUserName].loginCode === Number(enteredCode)){
                        document.querySelector('.test')
                            .innerHTML = `Welcome, ${fullUser[enterUserName].name} 👋👋`;
                    }else if(!(enterUserName in fullUser)){
                        document.querySelector('.test')
                            .innerHTML = `Username Doesn't Exist`;
                    } 
                    else {
                        
                        document.querySelector('.test')
                            .innerHTML = `Invalid Login Code`;
                    };

                    document.querySelector('.user-enter').value = ``;
                    document.querySelector('.input-code').value = ``;
                    
                 }else {
                    alert('Please enter full data')
                 };
                
                    
            });
        };   
         
};


  
function generate(){
    getSavedData();
    console.log(fullUser);
    if(document.querySelector('.small-wrapper')){
        document.querySelector('.new-generate-btn')
            .addEventListener('click', () => {
            getSavedData();
            const firstName = document.querySelector('.js-name-input').value;
            user_name = document.querySelector('.js-user-name-input').value;
            
            
            if(firstName && user_name){
                if(!(user_name in fullUser)){
                    code = generateLoginCode();
                    fullUser[user_name] = {
                        name: firstName,
                        loginCode: code,
                    }
                    console.log(fullUser); 
                    
                    saveDataToLocalStorage();
                    document.querySelector('.changeable')
                        .innerHTML = `<p class='welcome-msg'>Welcome, ${fullUser[user_name].name} 👋<br>Your Login Code is <span class="span">${code}</span></p>`;
                    document.querySelector('.new-generate-btn')
                        .innerHTML = `<a href="index.html">Login Page</a>`;
                    
                    } else {
                        document.querySelector('.user-alert')
                            .innerHTML = `The Username Already exists try another one`;
                        document.querySelector('.js-name-input')
                            .value = ``;
                        document.querySelector('.js-user-name-input')
                            .value = ``;
                    };
                
            };
        
            
            
        
    
        });
    };
    
    
    
};

function clearPreviousData(){
    if(document.querySelector('.clear-btn')){
        document.querySelector('.clear-btn')
        .addEventListener('click', () => {
            fullUser = {};
            console.log(fullUser);
            saveDataToLocalStorage();
        })
    }
    

}
generate();
submit();   
clearPreviousData();
            
        
