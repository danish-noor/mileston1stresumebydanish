// Get references to the button and assignment element
var toggleButton = document.querySelector('button');
var assignmentElement = document.querySelector('.assignment');
// Add event listener to the button
toggleButton.addEventListener('click', function () {
    if (assignmentElement.style.display === 'none') {
        // If the assignment is hidden, show it
        assignmentElement.style.display = 'block';
    }
    else {
        // If the assignment is visible, hide it
        assignmentElement.style.display = 'none';
    }
});
// Initial setup: Ensure the assignment is visible
assignmentElement.style.display = 'block';
