document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav-links a ');

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
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
});
function showsidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hidesidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
} ;
let icon = document.getElementById('icon');
icon.onclick = function(){
    document.body.classList.toggle("dark-themes");
   if(document.body.classList.contains("dark-themes")){
    icon.src ="sun.png";
   }
   else{
    icon.src ="moon.png";
   }
}