// Evidenzia la voce di menu attiva
const menuItems = document.querySelectorAll('nav a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

// Popup quando si clicca su "Contact"
const contactLink = document.querySelector('a[href="#contact"]');
if (contactLink) {
    contactLink.addEventListener('click', (event) => {
        event.preventDefault();
        alert("You can contact us at support@nbnow.com!");
    });
}

// Smooth scrolling tra sezioni
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
