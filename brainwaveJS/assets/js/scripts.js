const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            document.querySelectorAll('.animated')[0].classList.add('fadeInLeft');
            document.querySelectorAll('.animated')[1].classList.add('fadeInTop');
            document.querySelectorAll('.animated')[2].classList.add('fadeInRight');
        }
    })
})
observer.observe(document.querySelector('.animate-content'));

const menu_btn = document.querySelector('.burger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})


const swiper = new Swiper('.mySwiper', {
    slidesPerView: 4,
    loop: true,
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        390: {
            slidesPerView: 1,
            loop: false,
        },
        1240: {
            slidesPerView: 4
        }
    },
})

const formElem = document.getElementById('form');
formElem.addEventListener('submit', (event) => {
    event.preventDefault();
    let errorMessages = document.querySelectorAll('.error');
    for(let i = 0; i < errorMessages.length; i++) {
        const elem = errorMessages[i];
        elem.innerHTML = '';
    }

    const nameElem = document.getElementById('name-surname');
    const emailElem = document.getElementById('email');
    const subjectElem = document.getElementById('subject');
    const messageElem = document.getElementById('message');
    let nameValue = nameElem.value.trim();
    let emailValue = emailElem.value.trim();
    let subjectValue = subjectElem.value.trim();
    let messageValue = messageElem.value.trim();
    console.log(
        `Name and surname: ${nameValue}, email: ${emailValue}, subject: ${subjectValue}, message: ${messageValue}
    `)
    if(nameValue === '') {
        const errorName = document.querySelector('.error-name');
        errorName.innerHTML = 'Please write your name and surname!';
    }

    if(emailValue === '') {
        const errorEmail = document.querySelector('.error-email');
        errorEmail.innerHTML = 'Please write your email!';
    }   

    if(subjectValue === '') {
        const errorSubject = document.querySelector('.error-subject');
        errorSubject.innerHTML = 'Please write the subject';
    }

    if(messageValue === '') {
        const errorMessage = document.querySelector('.error-message');
        errorMessage.innerHTML = 'Please write a message';
    }

    let popup = document.getElementById('popup');
    let name = document.getElementById('name-surname');
    let client = document.getElementById('clientName');
    popup.style.display = 'block';
    popup.style.top = '880%';
    client.innerHTML = `Thank you ${name.value}!`;

    // let body = document.querySelector('#form');
    // body.style.opacity = 0.5;

})

function closePopup() {
    popup.style.display = 'none';
    formElem.reset();
}
