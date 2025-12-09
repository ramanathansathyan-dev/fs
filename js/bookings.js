// ==========================================================
// BOOKINGS — Matches Clients Page (Modern Zoho-like)
// ==========================================================

// ----- 20 REALISTIC BOOKINGS -----
const allBookings = [
  { id: "BK-001", client: "John David", service: "Yoga Class", time: "2025-12-01 09:00 AM", status: "Pending" },
  { id: "BK-002", client: "Maria Thompson", service: "Zumba Fitness", time: "2025-12-01 10:00 AM", status: "Confirmed" },
  { id: "BK-003", client: "Alex Carter", service: "Personal Training", time: "2025-12-01 11:00 AM", status: "Checked-in" },
  { id: "BK-004", client: "Sam Williams", service: "Pilates", time: "2025-12-01 12:00 PM", status: "Pending" },
  { id: "BK-005", client: "Emily Johnson", service: "CrossFit", time: "2025-12-01 01:00 PM", status: "Cancelled" },

  { id: "BK-006", client: "David Wilson", service: "HIIT Training", time: "2025-12-01 02:00 PM", status: "Confirmed" },
  { id: "BK-007", client: "Sarah Parker", service: "Zumba Fitness", time: "2025-12-01 03:00 PM", status: "Pending" },
  { id: "BK-008", client: "Michael Brown", service: "Body Pump", time: "2025-12-01 04:00 PM", status: "Checked-in" },
  { id: "BK-009", client: "Olivia Davis", service: "Spinning Class", time: "2025-12-01 05:00 PM", status: "Pending" },
  { id: "BK-010", client: "Chris Martin", service: "Personal Training", time: "2025-12-01 06:00 PM", status: "Confirmed" },

  { id: "BK-011", client: "Jessica Allen", service: "Pilates", time: "2025-12-01 07:00 PM", status: "Pending" },
  { id: "BK-012", client: "Anthony Green", service: "Yoga Class", time: "2025-12-01 08:00 PM", status: "Checked-in" },
  { id: "BK-013", client: "Sophia Martinez", service: "HIIT Training", time: "2025-12-01 09:00 PM", status: "Confirmed" },
  { id: "BK-014", client: "Daniel Foster", service: "Spinning Class", time: "2025-12-01 10:00 PM", status: "Pending" },
  { id: "BK-015", client: "Ava Richardson", service: "Zumba Fitness", time: "2025-12-01 11:00 PM", status: "Cancelled" },

  { id: "BK-016", client: "Jason Miller", service: "CrossFit", time: "2025-12-02 08:00 AM", status: "Pending" },
  { id: "BK-017", client: "Amelia Scott", service: "Personal Training", time: "2025-12-02 09:00 AM", status: "Confirmed" },
  { id: "BK-018", client: "Ryan Cooper", service: "Body Pump", time: "2025-12-02 10:00 AM", status: "Pending" },
  { id: "BK-019", client: "Hannah Lee", service: "Pilates", time: "2025-12-02 11:00 AM", status: "Checked-in" },
  { id: "BK-020", client: "Tyler Page", service: "HIIT Training", time: "2025-12-02 12:00 PM", status: "Confirmed" }
];

// Load 10 at a time
let loadBatch = 10;
let currentIndex = 0;

// DOM elements
const tableBody = document.getElementById("bookingTableBody");
const cardsContainer = document.getElementById("bookingCards");
const searchInput = document.getElementById("bookingSearch");
const loadMoreBtn = document.getElementById("loadMoreBtn");

// ----------------------------------------------------------
// STATUS BADGE CLASS
// ----------------------------------------------------------
function getStatusBadgeClass(status) {
  switch (status.toLowerCase()) {
    case "pending": return "status-pending";
    case "confirmed": return "status-confirmed";
    case "checked-in":
    case "checkedin": return "status-checkedin";
    case "cancelled": return "status-cancelled";
    default: return "";
  }
}

// ----------------------------------------------------------
// RENDER TABLE ROW
// ----------------------------------------------------------
function renderTableRow(b) {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${b.id}</td>
    <td>${b.client}</td>
    <td>${b.service}</td>
    <td>${b.time}</td>
    <td>
      <span class="status-badge ${getStatusBadgeClass(b.status)}">${b.status}</span>
    </td>
    <td><span class="material-symbols-rounded qr-icon">qr_code</span></td>
  `;

  tableBody.appendChild(tr);
}

// ----------------------------------------------------------
// RENDER MOBILE CARD
// ----------------------------------------------------------
function renderCard(b) {
  const div = document.createElement("div");
  div.className = "booking-card";

  div.innerHTML = `
    <div class="booking-card-title">${b.client}</div>
    <div class="booking-card-row"><strong>Booking ID:</strong> ${b.id}</div>
    <div class="booking-card-row"><strong>Service:</strong> ${b.service}</div>
    <div class="booking-card-row"><strong>Time:</strong> ${b.time}</div>
    <div class="booking-card-row">
      <strong>Status:</strong>
      <span class="status-badge ${getStatusBadgeClass(b.status)}">${b.status}</span>
    </div>
    <div class="booking-card-actions">
      <span class="material-symbols-rounded qr-icon-card">qr_code</span>
    </div>
  `;

  cardsContainer.appendChild(div);
}

// ----------------------------------------------------------
// LOAD MORE BOOKINGS
// ----------------------------------------------------------
function loadMore() {
  const nextSet = allBookings.slice(currentIndex, currentIndex + loadBatch);
  nextSet.forEach(b => {
    renderTableRow(b);
    renderCard(b);
  });

  currentIndex += loadBatch;

  if (currentIndex >= allBookings.length) {
    loadMoreBtn.style.display = "none";
  }
}

// ----------------------------------------------------------
// SEARCH BOOKINGS
// ----------------------------------------------------------
function searchBookings() {
  const query = searchInput.value.toLowerCase();

  tableBody.innerHTML = "";
  cardsContainer.innerHTML = "";

  const filtered = allBookings.filter(b =>
    b.id.toLowerCase().includes(query) ||
    b.client.toLowerCase().includes(query) ||
    b.service.toLowerCase().includes(query)
  );

  filtered.forEach(b => {
    renderTableRow(b);
    renderCard(b);
  });

  loadMoreBtn.style.display = query.length > 0 ? "none" : "block";
}

// ----------------------------------------------------------
// EVENTS
// ----------------------------------------------------------
loadMoreBtn.addEventListener("click", loadMore);
searchInput.addEventListener("input", searchBookings);

// ----------------------------------------------------------
// INITIAL LOAD
// ----------------------------------------------------------
loadMore();
