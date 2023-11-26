const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Welcome to our hostel "];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

function studentLogin() {
    // Implement student login logic here
    alert('Student login functionality will be implemented later.');
}

// Function to open the login modal
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Disable scrolling on the main content
    document.querySelector('.main-content').classList.add('blurred'); // Add blur effect
}

// Function to close the login modal
function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling on the main content
    document.querySelector('.main-content').classList.remove('blurred'); // Remove blur effect
}
