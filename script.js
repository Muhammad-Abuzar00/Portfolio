const menuIcon = document.getElementById("menu");
const menuItems = document.getElementById("menuItems");
const closeMenu = document.getElementById("closeMenu");
const menuLinks = menuItems.querySelectorAll('a');

menuIcon.addEventListener("click", () => {
    menuItems.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    menuItems.classList.remove("active");
});

menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
        menuItems.classList.remove("active");
    });
});
