let enteredCode = '';

// Obfuscated secret code and URL
const secretCode = atob('NDc0');
const redirectUrl = atob('aHR0cHM6Ly93d3cueW91dHViZS5jb20vc2hvcnRzL2hfalUtbGcwdFF3');

function enterCode(digit) {
    if (enteredCode.length < 3) {
        enteredCode += digit;
        document.getElementById('digit-' + enteredCode.length).innerText = digit;
    }
}

function clearCode() {
    enteredCode = '';
    for (let i = 1; i <= 3; i++) {
        document.getElementById('digit-' + i).innerText = '-';
    }
}

function submitCode() {
    if (enteredCode === secretCode) {
        window.location.href = redirectUrl;
    } else {
        document.getElementById('message').innerHTML = `<span dir="rtl">הקוד שגוי: ${enteredCode} נסו שוב</span>`;
        clearCode();
    }
}
