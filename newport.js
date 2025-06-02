function myNav() {
    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = this.getAttribute('href').substring(1); // Get the target section ID
            const targetElement = document.getElementById(targetId); // Get the target element

            if (targetElement) {
                // Scroll to the target element smoothly
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function showsidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hidesidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

function myIcon() {
    const icon = document.getElementById('icon'); 
    document.body.classList.toggle("dark-themes");
    if (document.body.classList.contains("dark-themes")) {
        icon.src = "sun.png";
    } else {
        icon.src = "moon.png";
    }
}

let typed = new Typed('.dev', {
    strings: ['Frontend Developer💻', 'Backend Developer 📲', 'Fullstack Developer🖥️'],
    loop: true,
    backSpeed: 50,
    typeSpeed: 90,
    showCursor: false
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const animate = document.querySelectorAll('.about-section');
animate.forEach((el) => observer.observe(el));

const ani = document.querySelectorAll('.home-content');
ani.forEach((el) => observer.observe(el));

const any = document.querySelectorAll('.service-section');
any.forEach((el) => observer.observe(el));

const anie = document.querySelectorAll('.contact-section');
anie.forEach((el) => observer.observe(el));