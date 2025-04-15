// Auto-fill timestamp field with the current date and time
document.getElementById("timestamp").value = new Date().toISOString();

//Modal Dialog Script
const submitBtn = document.getElementById('submitBtn');
const modal = document.getElementById('modalBackdrop');
const confirmSubmit = document.getElementById('confirmSubmit');
const cancelSubmit = document.getElementById('cancelSubmit');
const form = document.getElementById('myForm');
// Show modal on submit click
submitBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});
// Handle "Sure"
confirmSubmit.addEventListener('click', () => {
  modal.style.display = 'none';
  form.submit(); // Submit the form
});
// Handle "No"
cancelSubmit.addEventListener('click', () => {
  modal.style.display = 'none';
});
