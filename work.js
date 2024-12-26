// מצבים כהה וקל
document.getElementById("dark-mode-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    this.textContent = document.body.classList.contains("dark-mode") ? "🌙 Dark Mode" : "☀️ Light Mode";
});

// Modal - פתיחה וסגירה
const loginBtn = document.getElementById("book-now-btn");
const modal = document.getElementById("booking-modal");
const closeModal = document.getElementById("close-modal");

loginBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});

// פונקציה להציג את טופס ההתחברות
function conect() {
    document.getElementById("Login-form").style.display = "block";
    document.getElementById("New-account").style.display = "none";
}

// פונקציה להציג את טופס ההרשמה
function create() {
    document.getElementById("Login-form").style.display = "none";
    document.getElementById("New-account").style.display = "block";
}
