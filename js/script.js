// =======================
// Show Details Buttons
// =======================
document.querySelectorAll('.show-btn').forEach(button => {
  button.addEventListener('click', function() {
    const card = this.closest('.card');
    const title = card.querySelector('h3').innerText;
    const description = card.querySelector('p').innerText;
    alert(`${title}\n\n${description}`);
  });
});

// =======================
// Book Buttons
// =======================
document.querySelectorAll('.book-btn').forEach(button => {
  button.addEventListener('click', function() {
    const card = this.closest('.card');
    const title = card.querySelector('h3').innerText;
    // Store the selected service/plan in localStorage
    if (title.includes("Service") || title.includes("Membership Plan") || title.includes("Booking")) {
      // Redirect to booking page for final selection
      window.location.href = 'booking.html';
    } else {
      alert(`${title} selected!`);
    }
  });
});

// =======================
// Booking Confirmation
// =======================
function confirmBooking() {
  const service = document.getElementById('service')?.value || '';
  const plan = document.getElementById('plan')?.value || '';
  const datetime = document.getElementById('datetime')?.value || '';
  const paid = document.getElementById('paid')?.checked || false;

  if (!service || !plan || !datetime) {
    alert("Please select Service, Plan and Date/Time.");
    return;
  }

  // Save booking in localStorage
  localStorage.setItem('service', service);
  localStorage.setItem('plan', plan);
  localStorage.setItem('datetime', datetime);
  localStorage.setItem('paid', paid);

  // Redirect to confirmation page
  window.location.href = 'confirmation.html';
}

// =======================
// Navigation Highlight
// =======================
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav a');
  const current = window.location.pathname.split("/").pop();
  navLinks.forEach(link => {
    if(link.getAttribute('href') === current) {
      link.style.backgroundColor = '#b71c1c';
    }
  });
});
