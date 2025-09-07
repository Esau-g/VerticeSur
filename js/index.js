const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle', 'nav-menu')



const video = document.getElementById("map");
video.play().catch(() => {
    // Autoplay blocked → start on scroll
    const startVideo = () => {
        video.play();
        window.removeEventListener("scroll", startVideo);
        window.removeEventListener("click", startVideo);
    };

    window.addEventListener("scroll", startVideo, { once: true });
    window.addEventListener("click", startVideo, { once: true });
});
