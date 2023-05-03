const displayform = _('displayForm');
const forlogin = _('forlogin');
const loginform = _('formlogin');
const forRegister= _('forRegister');
const registerform = _('formregister');
const formcontainer = _('formcontainer');
displayform.addEventListener('click', showform);

forlogin.addEventListener('click', () =>{
    forlogin.classList.add('active');
    forRegister.classList.remove('active');
    if (loginform.classList.contains('toggleForm')) {
        formcontainer.style.transform = 'translate(0%)';
        formcontainer.style.transition = 'transform .5s';
        registerform.classList.add('toggleForm') ;
        loginform.classList.remove('toggleForm');
    }

})

forRegister.addEventListener('click', () =>{
    forlogin.classList.remove('active');
    forRegister.classList.add('active');
    if (registerform.classList.contains('toggleForm')) {
        formcontainer.style.transform = 'translate(-100%)';
        formcontainer.style.transition = 'transform .5s';
        registerform.classList.remove('toggleForm') ;
        loginform.classList.add('toggleForm');
    }
})
function _(e) {
    return document.getElementById(e);
}



function showform() {
    document.querySelector('.form-wrapper .card').classList.toggle('show');
}
