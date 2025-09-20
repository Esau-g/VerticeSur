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

const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');

for(let i = 0; i < q.length; i++) {
    q[i].addEventListener('click', () => {
        a[i].classList.toggle('a-opened');
        arr[i].classList.toggle('arrow-rotated');
    });
}