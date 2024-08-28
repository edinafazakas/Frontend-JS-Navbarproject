// script.js
document.addEventListener('DOMContentLoaded', () => {
    const buttonContainer = document.getElementById('button-container');

    if (buttonContainer) {
        // Create 11 buttons labeled 0 to 10
        for (let i = 0; i <= 10; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.className = 'button';
            buttonContainer.appendChild(button);
        }
    } else {
        console.error('Element with id "button-container" not found');
    }
});
