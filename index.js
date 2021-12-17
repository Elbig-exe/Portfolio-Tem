const navToggle = document.querySelector('.nav-toggle');/*AKA find view by ID*/

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});