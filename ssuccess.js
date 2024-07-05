

// Simple login functionality
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple credential check (replace with a real authentication mechanism)
    if (username === 'admin' && password === 'password') {
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('tableNamesPage').classList.remove('hidden');
    } else {
        alert('Invalid credentials');
    }
});

// Function to show specific pages
function showPage(pageId) {
    const pages = document.querySelectorAll('div[id$="Page"]');
    pages.forEach(page => page.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

// Functions to add new records and manage tables (Transport example)
const transportForm = document.getElementById('transportForm');
const transportTable = document.getElementById('transportTable').getElementsByTagName('tbody')[0];

transportForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const vehicleId = document.getElementById('vehicleId').value;
    const licensePlate = document.getElementById('licensePlate').value;
    const model = document.getElementById('model').value;
    const capacities = document.getElementById('capacities').value;
    const status = document.getElementById('status').value;
    
    const newRow = transportTable.insertRow();
    newRow.insertCell(0).textContent = vehicleId;
    newRow.insertCell(1).textContent = licensePlate;
    newRow.insertCell(2).textContent = model;
    newRow.insertCell(3).textContent = capacities;
    newRow.insertCell(4).textContent = status;
    const actionsCell = newRow.insertCell(5);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        transportTable.deleteRow(newRow.rowIndex - 1);
    });
    actionsCell.appendChild(deleteButton);
    
    transportForm.reset();
});

// Driver form functionality
const driverForm = document.getElementById('driverForm');
const driverTable = document.getElementById('driverTable').getElementsByTagName('tbody')[0];

driverForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const driverId = document.getElementById('driverId').value;
    const dname = document.getElementById('dname').value;
    const licenseNumber = document.getElementById('licenseNumber').value;
    const contactInfo = document.getElementById('contactInfo').value;

    const newRow = driverTable.insertRow();
    newRow.insertCell(0).textContent = driverId;
    newRow.insertCell(1).textContent = dname;
    newRow.insertCell(2).textContent = licenseNumber;
    newRow.insertCell(3).textContent = contactInfo;
    const actionsCell = newRow.insertCell(4);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        driverTable.deleteRow(newRow.rowIndex - 1);
    });
    actionsCell.appendChild(deleteButton);

    driverForm.reset();
});

// Route form functionality
const routeForm = document.getElementById('routeForm');
const routeTable = document.getElementById('routeTable').getElementsByTagName('tbody')[0];

routeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const routeId = document.getElementById('routeId').value;
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const distance = document.getElementById('distance').value;

    const newRow = routeTable.insertRow();
    newRow.insertCell(0).textContent = routeId;
    newRow.insertCell(1).textContent = origin;
    newRow.insertCell(2).textContent = destination;
    newRow.insertCell(3).textContent = distance;
    const actionsCell = newRow.insertCell(4);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        routeTable.deleteRow(newRow.rowIndex - 1);
    });
    actionsCell.appendChild(deleteButton);

    routeForm.reset();
});

// Assignment form functionality
const assignmentForm = document.getElementById('assignmentForm');
const assignmentTable = document.getElementById('assignmentTable').getElementsByTagName('tbody')[0];

assignmentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const assignmentId = document.getElementById('assignmentId').value;
    const transportId = document.getElementById('transportId').value;
    const driverId = document.getElementById('driverId').value;
    const routeId = document.getElementById('routeId').value;
    const startDate = document.getElementById('startDate').value;

    const newRow = assignmentTable.insertRow();
    newRow.insertCell(0).textContent = assignmentId;
    newRow.insertCell(1).textContent = transportId;
    newRow.insertCell(2).textContent = driverId;
    newRow.insertCell(3).textContent = routeId;
    newRow.insertCell(4).textContent = startDate;
    const actionsCell = newRow.insertCell(5);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        assignmentTable.deleteRow(newRow.rowIndex - 1);
    });
    actionsCell.appendChild(deleteButton);

    assignmentForm.reset();
});

   // Tracking record form functionality
   const trackingForm = document.getElementById('trackingForm');
   const trackingTable = document.getElementById('trackingTable').getElementsByTagName('tbody')[0];

   trackingForm.addEventListener('submit', function(event) {
       event.preventDefault();
       const trackingId = document.getElementById('trackingId').value;
       const shipmentId = document.getElementById('trackingShipmentId').value;
       const location = document.getElementById('trackingLocation').value;
       const status = document.getElementById('trackingStatus').value;
       const timestamp = document.getElementById('trackingTimestamp').value;

       const newRow = trackingTable.insertRow();
       newRow.insertCell(0).textContent = trackingId;
       newRow.insertCell(1).textContent = shipmentId;
       newRow.insertCell(2).textContent = location;
       newRow.insertCell(3).textContent = status;
       newRow.insertCell(4).textContent = timestamp;
       const actionsCell = newRow.insertCell(5);
       const deleteButton = document.createElement('button');
       deleteButton.textContent = 'Delete';
       deleteButton.addEventListener('click', function() {
           trackingTable.deleteRow(newRow.rowIndex - 1);
       });
       actionsCell.appendChild(deleteButton);

       trackingForm.reset();
   });
//customer details
const customerForm = document.getElementById('customerForm');
const customerTable = document.getElementById('customerTable').getElementsByTagName('tbody')[0];

customerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const customerId = document.getElementById('customerId').value;
    const cname = document.getElementById('cname').value;
    const contactDetails = document.getElementById('contactDetails').value;

    const newRow = customerTable.insertRow();
    newRow.insertCell(0).textContent = customerId;
    newRow.insertCell(1).textContent = cname;
    newRow.insertCell(2).textContent = contactDetails;
    const actionsCell = newRow.insertCell(3);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        customerTable.deleteRow(newRow.rowIndex - 1);
    });
    actionsCell.appendChild(deleteButton);

    customerForm.reset();
});

// Shipment record form functionality
const shipmentForm = document.getElementById('shipmentForm');
const shipmentTable = document.getElementById('shipmentTable').getElementsByTagName('tbody')[0];

shipmentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const shipmentId = document.getElementById('shipmentId').value;
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const weight = document.getElementById('weight').value;
    const status = document.getElementById('status').value;

    const newRow = shipmentTable.insertRow();
    newRow.insertCell(0).textContent = shipmentId;
    newRow.insertCell(1).textContent = origin;
    newRow.insertCell(2).textContent = destination;
    newRow.insertCell(3).textContent = weight;
    newRow.insertCell(4).textContent = status;
    const actionsCell = newRow.insertCell(5);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        shipmentTable.deleteRow(newRow.rowIndex - 1);
    });
    actionsCell.appendChild(deleteButton);

    shipmentForm.reset();
});




// Similar functions can be created for other forms and tables

