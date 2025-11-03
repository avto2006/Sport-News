let inp = document.querySelector('.inp');

inp.addEventListener('keydown', (event) => {
     
    if (event.key === 'Enter' && inp.value !== '') {
        

        let email = inp.value.trim()
        let pattern= /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i

        if(pattern.test(email)) {
           alert('Request sent successfully')
        } else {
            alert('Please enter a valid email')
        }
    }
})

let hamburger = document.querySelector('.hamburger i');
let nav_list = document.querySelector('.nav_list');

hamburger.addEventListener('click', () => {
    nav_list.classList.toggle('active');
    hamburger.classList.toggle('fa-bars');
    hamburger.classList.toggle('fa-xmark')
})

