
/* Typing Effect */
const roles = [
    "Full Stack Software Engineer",
    "AI/ML Engineer",
    "Certified Cloud Developer"
];
let roleIdx = 0, charIdx = 0, isDeleting = false;

function typeRole() {
    const el = document.getElementById("typed-role");
    const cursor = document.getElementById("typed-cursor");

    cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";

    const fullText = roles[roleIdx];

    if (!isDeleting) {
    el.textContent = fullText.substring(0, charIdx++);
    if (charIdx > fullText.length + 2) isDeleting = true;
    } else {
    el.textContent = fullText.substring(0, charIdx--);
    if (charIdx < 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
    }
    }

    setTimeout(typeRole, isDeleting ? 70 : 110);
}
typeRole();

/* Theme Toggle */
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    const icon = document.querySelector("#theme-toggle i");
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
});

/* Contact form (placeholder only) */
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent! (This is a front-end only form.)");
});
