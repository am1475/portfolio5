AOS.init();
        
// Wrap the typing content in a span with class "typewriter" to apply the typing effect
// This script will simulate a typing effect for each character in the span element
var text = document.querySelector('.typewriter');
var textContent = text.textContent;
text.textContent = ''; // Clear the content initially

var i = 0;

function type() {
    if (i < textContent.length) {
        text.textContent += textContent.charAt(i);
        i++;
        if (text.scrollWidth > text.offsetWidth) {
            text.style.whiteSpace = 'pre-wrap'; // Switch to 'pre-wrap' to allow content wrapping
        }
        setTimeout(type, 50); // Adjust the typing speed here (in milliseconds)
    }
}

type(); // Start the typing effect