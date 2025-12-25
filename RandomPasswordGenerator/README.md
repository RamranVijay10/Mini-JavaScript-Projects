# 🔐 Random Password Generator

A sleek, professional, and secure random password generator built with modern web technologies. This project features a stunning **Glassmorphism UI** and uses the **Manrope** typeface for a premium look and feel.

---

## ✨ Features

*   **Secure Generation**: Creates 12-character passwords using uppercase letters, lowercase letters, numbers, and symbols.
*   **One-Click Copy**: Instantly copy your generated password to the clipboard for immediate use.
*   **Modern Design**: Features a professional glassmorphism card with a deep slate gradient background.
*   **Responsive Layout**: Perfectly centered and mobile-friendly design.
*   **Typography**: Clean and modern look using the Google Font 'Manrope'.

## 🛠️ Tech Stack

*   **HTML5**: Semantic structure.
*   **CSS3**: Custom properties (variables), Flexbox, and Glassmorphism effects.
*   **JavaScript (ES6+)**: Logic for random character selection and clipboard interaction.

## 🚀 How to Use

1.  Open `index.html` in any modern web browser.
2.  Click the **"Generate Password"** button to create a new secure string.
    *   *The script picks random characters from a pool of `abcdefghijklmnopqrstuvwxyz`, `ABCDEFGHIJKLMNOPQRSTUVWXYZ`, `0123456789`, and `!@#$%^&*()_+`.*
3.  Click the **copy icon** next to the password to save it to your clipboard.

## 📂 Project Structure

```text
├── assets/
│   └── copy.png     # Interactive copy icon
├── index.html       # Main HTML structure
├── style.css        # Professional glassmorphism styles
├── script.js       # Password generation & copy logic
└── README.md        # Project documentation
```

## 📝 JavaScript Logic Explanation

*   **Character Pool**: Combines four different character sets into one `all` string.
*   **Math.random()**: Uses the mathematical random floor function to pick indexes from the character pool.
*   **Selection & Copy**: Uses `passwordBox.select()` and `execCommand("copy")` to handle user clipboard interaction.

---
*Created with focus on clean UI and functional simplicity.*

## 👤 Author

**Ramran Vijay**
- GitHub: [@RamranVijay10](https://github.com/RamranVijay10)
- LinkedIn: [Ramran Vijay Pratap Yadav](https://www.linkedin.com/in/ramran-vijay-pratap-yadav-252400295)
- Email: stkhunter01@gmail.com
- Portfolio: [Mini JavaScript Projects](https://github.com/RamranVijay10/Mini-JavaScript-Projects)

