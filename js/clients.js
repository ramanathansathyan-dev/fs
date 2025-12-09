// Elements
const clientTableBody = document.getElementById('clientTableBody');
const clientCards = document.getElementById('clientCards');
const clientModal = document.getElementById('editModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const cancelBtn = document.getElementById('cancelEditBtn');
const clientForm = document.getElementById('editClientForm');
const clientSearch = document.getElementById('clientSearch');
const addClientBtn = document.getElementById('addClientBtn');
const loadMoreBtn = document.getElementById('loadMoreBtn');

// Sample realistic fitness clients
let clients = [
  {id:'C001', firstName:'Liam', lastName:'Anderson', email:'liam.anderson@example.com', phone:'+1 415-555-0123'},
  {id:'C002', firstName:'Emma', lastName:'Williams', email:'emma.williams@example.com', phone:'+44 20 7946 0012'},
  {id:'C003', firstName:'Noah', lastName:'Brown', email:'noah.brown@example.com', phone:'+61 2 9876 5432'},
  {id:'C004', firstName:'Olivia', lastName:'Jones', email:'olivia.jones@example.com', phone:'+49 30 1234567'},
  {id:'C005', firstName:'William', lastName:'Garcia', email:'william.garcia@example.com', phone:'+33 1 23456789'},
  {id:'C006', firstName:'Ava', lastName:'Martinez', email:'ava.martinez@example.com', phone:'+1 310-555-0198'},
  {id:'C007', firstName:'James', lastName:'Rodriguez', email:'james.rodriguez@example.com', phone:'+44 161 555 0123'},
  {id:'C008', firstName:'Isabella', lastName:'Hernandez', email:'isabella.hernandez@example.com', phone:'+34 91 123 4567'},
  {id:'C009', firstName:'Benjamin', lastName:'Lopez', email:'benjamin.lopez@example.com', phone:'+1 212-555-0199'},
  {id:'C010', firstName:'Sophia', lastName:'Gonzalez', email:'sophia.gonzalez@example.com', phone:'+49 40 9876543'},
  {id:'C011', firstName:'Elijah', lastName:'Wilson', email:'elijah.wilson@example.com', phone:'+61 3 9123 4567'},
  {id:'C012', firstName:'Mia', lastName:'Anderson', email:'mia.anderson@example.com', phone:'+1 617-555-0182'},
  {id:'C013', firstName:'Lucas', lastName:'Thomas', email:'lucas.thomas@example.com', phone:'+44 131 555 0183'},
  {id:'C014', firstName:'Charlotte', lastName:'Taylor', email:'charlotte.taylor@example.com', phone:'+1 415-555-0111'},
  {id:'C015', firstName:'Mason', lastName:'Moore', email:'mason.moore@example.com', phone:'+61 7 555 0190'},
  {id:'C016', firstName:'Amelia', lastName:'Jackson', email:'amelia.jackson@example.com', phone:'+44 20 7946 0034'},
  {id:'C017', firstName:'Logan', lastName:'Martin', email:'logan.martin@example.com', phone:'+1 702-555-0147'},
  {id:'C018', firstName:'Harper', lastName:'Lee', email:'harper.lee@example.com', phone:'+33 1 23456790'},
  {id:'C019', firstName:'Alexander', lastName:'Perez', email:'alexander.perez@example.com', phone:'+1 206-555-0155'},
  {id:'C020', firstName:'Evelyn', lastName:'Thompson', email:'evelyn.thompson@example.com', phone:'+44 161 555 0192'},
  {id:'C021', firstName:'Ethan', lastName:'White', email:'ethan.white@example.com', phone:'+61 2 9876 7890'},
  {id:'C022', firstName:'Abigail', lastName:'Harris', email:'abigail.harris@example.com', phone:'+49 30 7654321'},
  {id:'C023', firstName:'Jacob', lastName:'Sanchez', email:'jacob.sanchez@example.com', phone:'+1 303-555-0163'},
  {id:'C024', firstName:'Emily', lastName:'Clark', email:'emily.clark@example.com', phone:'+44 20 7946 0045'},
  {id:'C025', firstName:'Michael', lastName:'Ramirez', email:'michael.ramirez@example.com', phone:'+61 7 555 0112'},
  {id:'C026', firstName:'Ella', lastName:'Lewis', email:'ella.lewis@example.com', phone:'+1 212-555-0170'},
  {id:'C027', firstName:'Daniel', lastName:'Robinson', email:'daniel.robinson@example.com', phone:'+44 131 555 0120'},
  {id:'C028', firstName:'Avery', lastName:'Walker', email:'avery.walker@example.com', phone:'+49 40 1234567'},
  {id:'C029', firstName:'Matthew', lastName:'Young', email:'matthew.young@example.com', phone:'+1 415-555-0175'},
  {id:'C030', firstName:'Scarlett', lastName:'Allen', email:'scarlett.allen@example.com', phone:'+61 3 9123 4568'},
  {id:'C031', firstName:'Henry', lastName:'King', email:'henry.king@example.com', phone:'+1 617-555-0140'},
  {id:'C032', firstName:'Madison', lastName:'Wright', email:'madison.wright@example.com', phone:'+44 20 7946 0056'},
  {id:'C033', firstName:'Jackson', lastName:'Scott', email:'jackson.scott@example.com', phone:'+61 2 9876 6789'},
  {id:'C034', firstName:'Victoria', lastName:'Torres', email:'victoria.torres@example.com', phone:'+49 30 3456789'},
  {id:'C035', firstName:'Sebastian', lastName:'Nguyen', email:'sebastian.nguyen@example.com', phone:'+1 702-555-0185'},
  {id:'C036', firstName:'Aria', lastName:'Hill', email:'aria.hill@example.com', phone:'+33 1 23456791'},
  {id:'C037', firstName:'Aiden', lastName:'Flores', email:'aiden.flores@example.com', phone:'+1 206-555-0195'},
  {id:'C038', firstName:'Grace', lastName:'Green', email:'grace.green@example.com', phone:'+44 161 555 0132'},
  {id:'C039', firstName:'Wyatt', lastName:'Adams', email:'wyatt.adams@example.com', phone:'+61 7 555 0187'},
  {id:'C040', firstName:'Chloe', lastName:'Nelson', email:'chloe.nelson@example.com', phone:'+1 310-555-0190'},
  {id:'C041', firstName:'Owen', lastName:'Baker', email:'owen.baker@example.com', phone:'+49 40 9876543'},
  {id:'C042', firstName:'Lily', lastName:'Hall', email:'lily.hall@example.com', phone:'+1 212-555-0144'},
  {id:'C043', firstName:'Luke', lastName:'Rivera', email:'luke.rivera@example.com', phone:'+44 131 555 0148'},
  {id:'C044', firstName:'Hannah', lastName:'Campbell', email:'hannah.campbell@example.com', phone:'+61 3 9123 4569'},
  {id:'C045', firstName:'David', lastName:'Mitchell', email:'david.mitchell@example.com', phone:'+1 415-555-0192'},
  {id:'C046', firstName:'Addison', lastName:'Carter', email:'addison.carter@example.com', phone:'+44 20 7946 0067'},
  {id:'C047', firstName:'Joseph', lastName:'Roberts', email:'joseph.roberts@example.com', phone:'+1 617-555-0165'},
  {id:'C048', firstName:'Eleanor', lastName:'Gomez', email:'eleanor.gomez@example.com', phone:'+61 7 555 0123'},
  {id:'C049', firstName:'Samuel', lastName:'Phillips', email:'samuel.phillips@example.com', phone:'+49 30 5678901'},
  {id:'C050', firstName:'Zoe', lastName:'Evans', email:'zoe.evans@example.com', phone:'+1 702-555-0197'}
];

// Pagination settings
let itemsPerPage = 10;
let currentPage = 1;
let filteredClients = [...clients]; // filtered list for search
let editingIndex = null;

// Render function for table + cards
function renderClients(data = filteredClients) {
  const start = 0;
  const end = itemsPerPage * currentPage;
  const slice = data.slice(start, end);

  clientTableBody.innerHTML = '';
  clientCards.innerHTML = '';

  slice.forEach((client, index) => {
    // Table row
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${client.id}</td>
      <td>${client.firstName}</td>
      <td>${client.lastName}</td>
      <td>${client.email}</td>
      <td>${client.phone}</td>
      <td><span class="material-symbols-rounded edit-btn" data-index="${index}">edit</span></td>
    `;
    clientTableBody.appendChild(tr);

    // Mobile card
    const card = document.createElement('div');
    card.classList.add('client-card');
    card.innerHTML = `
      <div><strong>ID:</strong> ${client.id}</div>
      <div><strong>Name:</strong> ${client.firstName} ${client.lastName}</div>
      <div><strong>Email:</strong> ${client.email}</div>
      <div><strong>Phone:</strong> ${client.phone}</div>
      <span class="material-symbols-rounded edit-btn" data-index="${index}">edit</span>
    `;
    clientCards.appendChild(card);
  });

  // Show/hide Load More button
  if(end >= data.length) {
    loadMoreBtn.style.display = 'none';
  } else {
    loadMoreBtn.style.display = 'block';
  }
}

// Modal functions and event delegation (Add/Edit/Close)
function openModal(client = null, index = null) {
  clientModal.style.display = 'flex';
  if(client){
    document.getElementById('editFirstName').value = client.firstName;
    document.getElementById('editLastName').value = client.lastName;
    document.getElementById('editEmail').value = client.email;
    document.getElementById('editPhone').value = client.phone;
    editingIndex = index;
  } else {
    clientForm.reset();
    editingIndex = null;
  }
}
function closeModal() { clientModal.style.display = 'none'; }
document.addEventListener('click', e => {
  if(e.target.classList.contains('edit-btn')){
    const idx = e.target.dataset.index;
    openModal(filteredClients[idx], idx);
  }
});
addClientBtn.addEventListener('click', () => openModal());
closeModalBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);
clientModal.addEventListener('click', e => { if(e.target === clientModal) closeModal(); });

// Form submit
clientForm.addEventListener('submit', e => {
  e.preventDefault();
  const updatedClient = {
    id: editingIndex !== null ? filteredClients[editingIndex].id : `C${String(clients.length + 1).padStart(3,'0')}`,
    firstName: document.getElementById('editFirstName').value,
    lastName: document.getElementById('editLastName').value,
    email: document.getElementById('editEmail').value,
    phone: document.getElementById('editPhone').value
  };

  if(editingIndex !== null){
    filteredClients[editingIndex] = updatedClient;
    const realIndex = clients.findIndex(c => c.id === updatedClient.id);
    clients[realIndex] = updatedClient;
  } else {
    clients.push(updatedClient);
    filteredClients.push(updatedClient);
  }

  renderClients();
  closeModal();
});

// Search functionality
clientSearch.addEventListener('input', e => {
  const term = e.target.value.toLowerCase();
  filteredClients = clients.filter(c =>
    c.id.toLowerCase().includes(term) ||
    c.firstName.toLowerCase().includes(term) ||
    c.lastName.toLowerCase().includes(term) ||
    c.email.toLowerCase().includes(term) ||
    c.phone.includes(term)
  );
  currentPage = 1; // reset pagination
  renderClients();
});

// Load More button
loadMoreBtn.addEventListener('click', () => {
  currentPage++;
  renderClients();
});



// Initial render
renderClients();


function cancelAdd() {
    window.location.href = "clients.html";
}









