let fullUser;
let user_name;
let code;
let balance = 0.00;
let enterUserName;
let allUserNames;
let loginCode;
getSavedData();


function getSavedData() {
    const savedData = localStorage.getItem('user-data');
    const savedCurrentUser = localStorage.getItem('current-user');
    //const savedUsers = localStorage.getItem('all-users');
    if (savedData || enterUserName) {
        fullUser = JSON.parse(savedData);
        enterUserName = savedCurrentUser;
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
                enterUserName = document.querySelector('.user-enter').value;

                if (enteredCode && enterUserName){
                    // console.log(fullUser[enterUserName].loginCode);
                    if (enterUserName in fullUser && fullUser[enterUserName].loginCode === Number(enteredCode)){
                        document.querySelector('.test')
                            .innerHTML = `<p class="loading"> Loading... <p>`;
                            localStorage.setItem('current-user', enterUserName);
                        setTimeout(()=>{
                            window.location.href = "final_dash.html";
                        }, 2000);
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
                        balance: balance
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


function deposit(amount){
    fullUser[enterUserName].balance += Number(amount);
    document.querySelector('.current-balance')
        .innerHTML = `$${fullUser[enterUserName].balance}`;
    saveDataToLocalStorage();
    document.querySelector('.amount-enter')
        .innerHTML = ``;

    
};
function withdraw(amount){
    if(fullUser[enterUserName].balance > 0 && fullUser[enterUserName].balance - Number(amount) >= 0){
        fullUser[enterUserName].balance -= Number(amount);
        document.querySelector('.current-balance')
            .innerHTML = `$${fullUser[enterUserName].balance}`;
        saveDataToLocalStorage();
    } else {
        alert("Invalid Amount")
    };
    document.querySelector('.amount-enter')
        .innerHTML = ``;
    
    
 };



if(document.querySelector('.in-main')){
    document.querySelector('.in-main')
        .innerHTML = `
        <div class="basic-details">
            <p class="greeting">Hello, ${fullUser[enterUserName].name} 👋</p>
            <div class="balance-text">Current Balance: </div>
            <div class="current-balance">$${fullUser[enterUserName].balance}</div>
        </div>
        <hr>
        <p class="amount-enter"></p>
        <div class="action-buttons">
            <button class="deposit-btn">Deposit</button>
            <button class="withdraw-btn withdraw">Withdraw</button>
        </div>
        <br>
        
        <p class="log-out"><a href="index.html" >Log out</a></p>
        
        `;
        
};
let amount;
document.querySelector('.action-buttons').addEventListener('click', (event) => {
    const clickedButton = event.target;

    if (clickedButton.classList.contains('deposit-btn')) {
        document.querySelector('.amount-enter').innerHTML = `<input placeholder="Enter Deposit Amount " class="deposit-input">`;
        document.querySelector('.action-buttons').innerHTML = `<button class="js-deposit">Deposit</button>`;
    } else if (clickedButton.classList.contains('withdraw-btn')) {
        document.querySelector('.amount-enter').innerHTML = `<input placeholder="Enter Withdraw Amount " class="withdraw-input">`;
        document.querySelector('.action-buttons').innerHTML = `<button class="js-withdraw">Withdraw</button>`;
    } else if (clickedButton.classList.contains('js-deposit')) {
        amount = document.querySelector('.deposit-input').value;
        deposit(amount);
        resetButtons();
    } else if (clickedButton.classList.contains('js-withdraw')) {
        amount = document.querySelector('.withdraw-input').value;
        withdraw(amount);
        resetButtons();
    }
});

function resetButtons() {
    document.querySelector('.amount-enter').innerHTML = '';
    document.querySelector('.action-buttons').innerHTML = `
        <button class="deposit-btn">Deposit</button>
        <button class="withdraw-btn withdraw">Withdraw</button>`;
}

generate();
submit();   
clearPreviousData();
            
