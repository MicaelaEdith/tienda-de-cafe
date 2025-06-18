function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    const homeSection = document.querySelector('#header');
    const homeHeight = homeSection.offsetHeight;

    if (window.scrollY > homeHeight * 0.4) {
        navbar.classList.remove('transparent');
        navbar.classList.add('solid');
    } else {
        navbar.classList.remove('solid');
        navbar.classList.add('transparent');
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const overlay = document.getElementById("overlay");

    function closeMenu() {
        navLinks.classList.remove("active");
        document.body.classList.remove("nav-open");
    }

    menuToggle.addEventListener("click", () => {
        const isActive = navLinks.classList.contains("active");
        if (isActive) {
            closeMenu();
        } else {
            navLinks.classList.add("active");
            document.body.classList.add("nav-open");
        }
    });

    overlay.addEventListener("click", closeMenu);

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
});

const navbar = document.querySelector('.navbar');
const logoNavbar = document.querySelector('.logo-navbar');
const preNavbarHeight = document.querySelector('.pre-navbar').offsetHeight;
const navbarOffsetTop = navbar.offsetTop;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || window.pageYOffset;

    if (scrollTop > navbarOffsetTop + preNavbarHeight) {
        logoNavbar.style.height = '95%';    
        navbar.style.height = '5vh';
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');  
        logoNavbar.style.height = '80%';  
        navbar.style.height = '12vh';
    }
    handleNavbarScroll();
});