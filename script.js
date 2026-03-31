document.getElementById('pay-button').onclick = function(e) {
    e.preventDefault();

    console.log('Pay button clicked'); // Debugging line

    var amount = document.getElementById('amount').value * 100;
    console.log('Amount: ' + amount); // Debugging line

    var options = {
        "key": "", // Replace with your Razorpay key ID
        "amount": amount,
        "currency": "INR",
        "name": "Your Company Name",
        "description": "Test Transaction",
        "handler": function(response) {
            console.log('Payment successful! Payment ID: ' + response.razorpay_payment_id); // Debugging line
            alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
        },
        "prefill": {
            "name": "Your Name",
            "email": "email@example.com",
            "contact": "9999999999"
        },
        "theme": {
            "color": "#28a745"
        }
    };

    var rzp = new Razorpay(options);
    rzp.open();
};
