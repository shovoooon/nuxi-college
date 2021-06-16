const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});

const showSlide = (n) => {
    let i;
    const x = document.querySelectorAll(".mySlides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
const plusSlide = (n) => showSlide(slideIndex += n);

let slideIndex = 1;
//showSlide(slideIndex);


const showMsg = (msg, type) => {
    console.log('Showing error msg')
    let data = ``;
    if (type === 0) {
        data = `<div class="alert alert-danger" role="alert">`+msg+`</div>`;
    }else {
        data = `<div class="alert alert-success" role="alert">`+msg+`</div>`;
    }

    const msgContainer = document.getElementById('message');
    msgContainer.innerHTML = data;
}

const regButton = document.getElementById('regButton');
const logButton = document.getElementById('logButton');
const contactButton = document.getElementById('contactButton');

if (regButton != null) {
    regButton.addEventListener('click',() => {
        console.log('reg clicked');

        const id = document.querySelector('#reg_student_id').value;
        const email = document.querySelector('#reg_email').value;
        const phone = document.querySelector('#reg_phone').value;
        const pwd = document.querySelector('#reg_password').value;
        const pwd2 = document.querySelector('#reg_password2').value;

        if (id.length < 6) {
            console.log('Invalid Student ID');
            showMsg('Invalid Student ID', 0);
            return;
        }
        if (email.length < 6) {
            console.log('Invalid Email');
            showMsg('Invalid Email', 0);
            return;
        }
        if (phone.length < 6) {
            console.log('Invalid Phone');
            showMsg('Invalid Phone', 0);
            return;
        }
        if (pwd.length < 6) {
            console.log('Use minimum 6 character password');
            showMsg('Use minimum 6 character password', 0);
            return;
        }
        if (pwd2 !== pwd) {
            console.log('Please confirm password');
            showMsg('Please confirm password', 0);
            return;
        }

        showMsg('Registration successful', 1);
    });
}

if (logButton != null) {
    logButton.addEventListener('click',() => {
        console.log('log clicked');

        const id = document.getElementById('student_id').value;
        const pwd = document.getElementById('password').value;

        if (id.length < 6) {
            console.log('Invalid Student ID');
            showMsg('Invalid Student ID', 0);
            return;
        }
        if (pwd.length < 6) {
            console.log('Use minimum 6 character password');
            showMsg('Use minimum 6 character password', 0);
            return;
        }

        showMsg('Login successful', 1);
    });
}

if (contactButton != null) {
    contactButton.addEventListener('click',() => {
        console.log('contact clicked');

        const first_name = document.getElementById('first_name').value;
        const last_name = document.getElementById('last_name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const comments = document.getElementById('comments').value;

        if (first_name.length < 1) {
            console.log('Please enter first name');
            showMsg('Please enter first name', 0);
            return;
        }
        if (last_name.length < 6) {
            console.log('Please enter last name');
            showMsg('Please enter last name', 0);
            return;
        }
        if (email.length < 5) {
            console.log('Invalid email');
            showMsg('Invalid email', 0);
            return;
        }
        if (phone.length < 6) {
            console.log('Invalid phone');
            showMsg('Invalid phone', 0);
            return;
        }
        if (comments.length < 20) {
            console.log('Please enter your message');
            showMsg('Please enter your message', 0);
            return;
        }

        showMsg(`Thanks for contacting with us! <br> We will reply you as soon as possible!`, 1);
    });
}

