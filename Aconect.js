document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // צבע דומה לכרטיס
    const cardBackgroundColor = "#2a2a2a"; // אפור כהה, כמו בכרטיס

    darkModeToggle.addEventListener("click", () => {
        if (!body.classList.contains("dark-mode")) {
            body.style.backgroundColor = cardBackgroundColor; // שינוי רקע
            darkModeToggle.textContent = "☀️ מצב בהיר";
            body.classList.add("dark-mode");
        } else {
            body.style.backgroundColor = ""; // חזרה לרקע ברירת מחדל
            darkModeToggle.textContent = "🌙 מצב כהה";
            body.classList.remove("dark-mode");
        }
    });
});

document.getElementById('credit-form').addEventListener('submit', function (e) {
    e.preventDefault(); // מונע את שליחת הטופס

    const cardNumber = document.getElementById('card-number').value.trim();
    const expiryDate = document.getElementById('expiry-date').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    const message = document.getElementById('message');

    // ולידציה של מספר הכרטיס
    if (!/^\d{16}$/.test(cardNumber)) {
        message.textContent = 'מספר הכרטיס חייב להיות 16 ספרות.';
        return;
    }

    // ולידציה של תאריך תפוגה (MM/YY)
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
        message.textContent = 'תאריך התפוגה חייב להיות בפורמט MM/YY.';
        return;
    }

    // ולידציה של CVV
    if (!/^\d{3}$/.test(cvv)) {
        message.textContent = 'CVV חייב להיות 3 ספרות.';
        return;
    }

    // אם הכל תקין
    message.style.color = 'green';
    message.textContent = 'הפרטים נשמרו בהצלחה!';
    setTimeout(() => message.textContent = '', 3000); // מנקה את ההודעה לאחר 3 שניות
});
