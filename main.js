// const input = document.getElementById('pass');

// const div = document.querySelector('.message')
// const passwords = ['user', 'spring', 'autumn']
// const messages = ['krolik', 'zajac', 'zwierzak']

// input.addEventListener('input', (e) => {
//     div.textContent = '';
//     const text = e.target.value;

//     passwords.forEach((password, index)=> {
//         if(password === text){
//             div.textContent = messages[index];
//             e.target.value = '';
            
//         }
//     })

// })


// input.addEventListener('focus', (e) => {
//     e.target.classList.add('active');
// })


// input.addEventListener('blur', (e) => {
//     e.target.classList.remove('active');
// })


const input = document.querySelector('input');
const mess = document.querySelector('.message')
const passwords = ['jedEN', 'DwA'];
const messages = ['super', 'dziala'];

const showMessage = (e) => {
    const text = e.target.value.toLowerCase();
    passwords.forEach((password, index) => {
        let newPass = password.toLowerCase();
        if(newPass === text){
            mess.textContent = messages[index];
            e.target.value = ''
        }    
        
    })

}

input.addEventListener('input', showMessage)
