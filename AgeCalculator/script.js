const calculateButton = document.getElementById('calculateButton');
const userInput = document.getElementById('birthDate');
const result = document.getElementById('result');

// Set max date to today
userInput.max = new Date().toISOString().split('T')[0];

// Handle button click
calculateButton.addEventListener('click', () => {

    if (userInput.value === '') {
        displayError('Please enter your birthdate.');
        return;
    }

    const birthDate = new Date(userInput.value);
    const today = new Date();

    // Check if birthdate is in the future
    if (birthDate > today) {
        displayError('Birthdate cannot be in the future!');
        return;
    }

    // Calculate age
    const ageDetails = calculateAge(birthDate, today);
    displayResult(ageDetails);
});

// Calculate detailed age
function calculateAge(birthDate, today) {
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust for negative days
    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    // Adjust for negative months
    if (months < 0) {
        years--;
        months += 12;
    }

    // Calculate total days lived
    const oneDay = 24 * 60 * 60 * 1000;
    const totalDays = Math.floor((today - birthDate) / oneDay);

    // Calculate next birthday
    let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    const daysUntilBirthday = Math.floor((nextBirthday - today) / oneDay);

    return { years, months, days, totalDays, daysUntilBirthday };
}

// Display result with animation
function displayResult(age) {
    result.className = 'show';
    result.innerHTML = `
        <div class="result-box">
            <div class="result-header">
                <h2>🎉 Your Age</h2>
            </div>
            <div class="age-display">
                <div class="age-item">
                    <span class="age-number">${age.years}</span>
                    <span class="age-label">Years</span>
                </div>
                <div class="age-item">
                    <span class="age-number">${age.months}</span>
                    <span class="age-label">Months</span>
                </div>
                <div class="age-item">
                    <span class="age-number">${age.days}</span>
                    <span class="age-label">Days</span>
                </div>
            </div>
            <div class="extra-info">
                <p>📅 You've lived for <strong>${age.totalDays.toLocaleString()}</strong> days!</p>
                <p>🎂 Next birthday in <strong>${age.daysUntilBirthday}</strong> days</p>
            </div>
        </div>
    `;
}

// Display error message
function displayError(message) {
    result.className = 'show';
    result.innerHTML = `
        <div class="result-box error">
            <div class="error-message">
                <span class="error-icon">⚠️</span>
                <p>${message}</p>
            </div>
        </div>
    `;
}