// function to show extra content when the button is clicked
function showMore() {
    const extraContent = document.getElementById('extraContent');
    if (extraContent.style.display === 'none') {
        extraContent.style.display = 'block';
    } else {
        extraContent.style.display = 'none';
    }
}

// function to display a greeting based on the time of day
window.onload = function () {
    const greetingElement = document.getElementById('greeting');
    const hours = new Date().getHours();
    if (hours < 12) {
        greetingElement.textContent = 'Good Morning! Welcome to My Portfolio';
    } else if (hours < 18) {
        greetingElement.textContent = 'Good Afternoon! Welcome to My Portfolio';
    } else {
        greetingElement.textContent = 'Good Evening! Welcome to My Portfolio';
    }
};
