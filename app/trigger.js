const mobileBtn = document.getElementById('mobile-cta')
nav = document.querySelector('nav');
mobileButtonExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');
});

mobileButtonExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
});