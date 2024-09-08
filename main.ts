// Get references to the button and assignment element
const toggleButton = document.querySelector('button') as HTMLButtonElement;
const assignmentElement = document.querySelector('.assignment') as HTMLDivElement;

// Add event listener to the button
toggleButton.addEventListener('click', () => {
  if (assignmentElement.style.display === 'none') {
    // If the assignment is hidden, show it
    assignmentElement.style.display = 'block';
  } else {
    // If the assignment is visible, hide it
    assignmentElement.style.display = 'none';
  }
});

// Initial setup: Ensure the assignment is visible
assignmentElement.style.display = 'block';
