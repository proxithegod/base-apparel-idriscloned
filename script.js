//CALLING THE CONTAINERS
let mainContainer = document.querySelector('main')
let thanksContainer = document.querySelector('.thanks-container')

//CALLING THE BUTTONS 
let inputButton = document.querySelector('.input-btn')
let dismissButton = document.querySelector('.dismiss-btn')

//CALLING THE ERRORS
let error = document.querySelector('.validity')
let errorBeamer = document.querySelector('.errorbeamer')

//CALLING THE EMAIL INPUT 
let emailInput = document.querySelector('.emailinput')

//CALLING THE CHANGING MAIL
let changedMail = document.querySelector('.dynamic-mail')

function codeToWork() {
    if (emailInput.validity.valid && emailInput.value != '') {
        mainContainer.style.display = 'none';
        thanksContainer.style.display = 'flex';
        changedMail.innerText = emailInput.value;
    } else {
        error.style.display = 'block';
        errorBeamer.style.position = 'relative';
        errorBeamer.style.left = '465px';
        errorBeamer.style.bottom = '55px';
        errorBeamer.style.display = 'block';
        emailInput.style.border = '1px solid red';
    }
}

document.body.addEventListener('keydown', () => {
    if (event.key === 'Enter') {
        codeToWork();
    }
})

emailInput.addEventListener('input', () => {
    emailInput.style.border = '';
    errorBeamer.style.display = 'none';
    error.style.display = 'none';
})

inputButton.addEventListener('click', () => {
    codeToWork();
})

dismissButton.addEventListener('click', () => {
    thanksContainer.style.display = 'none';
    mainContainer.style.display = 'flex';
    emailInput.value = '';
})