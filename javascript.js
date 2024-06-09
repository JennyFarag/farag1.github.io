document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('appointmentForm');
    const bookingModal = new bootstrap.Modal(document.getElementById('bookingModal'));

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve form data
        const service = document.getElementById('service').value;
        const expert = document.getElementById('expert').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('emailAppointment').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        // Check if any required field is empty
        if (!service || !expert || !firstName || !lastName || !email || !date || !time) {
            // Display a message or handle the validation as desired
            alert("Please fill out all required fields before booking.");
            return; // Prevent further execution
        }

        //  random booking ID
        const bookingId = Math.floor(Math.random() * 1000000);

        // Populate modal with form data
        document.getElementById('modalService').textContent = 'Service: ' + service;
        document.getElementById('modalExpert').textContent = 'Medical Expert: ' + expert;
        document.getElementById('modalName').textContent = 'Name: ' + firstName + ' ' + lastName;
        document.getElementById('modalEmail').textContent = 'Email: ' + email;
        document.getElementById('modalDate').textContent = 'Date: ' + date;
        document.getElementById('modalTime').textContent = 'Time: ' + time;
        document.getElementById('modalBookingId').textContent = 'Booking ID: ' + bookingId;

        
        bookingModal.show();

        // make another reservation button closes the tab to go back and book
        document.getElementById("makeAnotherReservationBtn").addEventListener("click", function() {
            bookingModal.hide();
        });
    });
});





  
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("consultationBtn").addEventListener("click", function() {
        // Check if all required fields are filled out
        var fullName = document.getElementById("fullName").value.trim();
        var phoneNumber = document.getElementById("phoneNumber").value.trim();
        var email = document.getElementById("email").value.trim();

        if (fullName === "" || phoneNumber === "" || email === "") {
            alert("Please fill out all the required fields.");
            return;
        }

        // random pharmacist name
        var pharmacistNames = ["Dr. Joe", "Dr. Micheal", "Dr. Walter", "Dr. Kemberly", "Dr. Louis"];
        var randomIndex = Math.floor(Math.random() * pharmacistNames.length);
        var randomPharmacist = pharmacistNames[randomIndex];

        // confirmation message with pharmacist's 
        alert("Your consultation with " + randomPharmacist + " is booked! The pharmacist will contact you to schedule an appointment.");
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('familyNumberForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        var familyNumber = document.getElementById('familyNumberInput').value;

        // Validate the input to ensure it's a number
        if (!/^\d+$/.test(familyNumber)) {
            alert('Please enter a valid family number.');
            return;
        }

        // Generate random numbers for prescriptions and medical tests
        var prescriptionCount = Math.floor(Math.random() * 11); // Random number between 0 and 10
        var testCount = Math.floor(Math.random() * 6); // Random number between 0 and 5

        // Create the message
        var message = `You have had ${prescriptionCount} prescriptions with us at WellnessRx and you did ${testCount} medical tests with us.`;

        // Inject the message into the modal body
        document.getElementById('modalBody').innerText = message;

        // Show the modal
        var resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
        resultModal.show();
    });
});

