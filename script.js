const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');

if (navToggle) {
    navToggle.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
}

window.addEventListener('resize', function () {
    if (this.window.innerWidth > 768) {
        navList.classList.remove('show');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        const targetElement = document.querySelector(target);
        const headerHeight = document.querySelector('header').offsetHeight;
        const scrollPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
    });
});