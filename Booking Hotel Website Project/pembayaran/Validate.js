function validate() {

    var CIDate = document.getElementById("CheckinDate").value;
    var CODate = document.getElementById("CheckoutDate").value;
    var checkIn = new Date(CIDate);
    var checkOut = new Date(CODate);
    var RoomType = document.getElementById("RoomTypeInput").value;
    var cardNo = document.getElementById('CardNo').value;
    var cardExpiry = document.getElementById('CardExpiry').value;
    var cardCVV = document.getElementById('CardCVV').value;
    var NameCard = document.getElementById('NameOnCard').value;
    var Address = document.getElementById('BillingAddress').value;

    if (RoomType.trim() === '') {
        alert('Please enter the room type');
        return false;
    }
    if (CIDate.trim() === '') {
        alert('Please enter the check-in date');
        return false;
    }
    if (CODate.trim() === '') {
        alert('Please enter the check-out date');
        return false;
    }
    if (checkOut < checkIn) {
        alert('Check-out date cannot be earlier than the check-in date');
        return false;
    }
    if (cardNo.trim() === '') {
        alert('Please enter the card number');
        return false;
    }
    if (cardNo.length !== 16) {
        alert('Card number consists of 16 digits!');
        return false;
    }
    if (cardExpiry.trim() === '') {
        alert('Please enter the card expiry');
        return false;
    }
    if (cardExpiry.charAt(2) !== '/') {
        alert('Please enter the expiry date in MM/YY format');
        return false;
    }
    var tempDate = cardExpiry.split('/');
    var tempMonth = parseInt(tempDate[0]);
    var tempYear = parseInt(tempDate[1]);
    if (tempMonth < 1 || tempMonth > 12) {
        alert('Month can only range from 01-12!');
        return false;
    }
    var currentYear = new Date().getFullYear() % 100;
    if (tempYear < currentYear || (tempYear === currentYear && tempMonth < new Date().getMonth() + 1)) {
        alert('The expiry date is in the past! Please enter a valid date');
        return false;
    }
    if (cardCVV.trim() === '') {
        alert('Please enter the card CVV');
        return false;
    }
    if (cardCVV.length !== 3) {
        alert('Card CVV consists of 3 digits!');
        return false;
    }
    if (NameCard.trim() === '') {
        alert('Please enter the name on card');
        return false;
    }
    if (Address.trim() === '') {
        alert('Please enter the billing address');
        return false;
    }
    window.location.href= '../confirmation.html';
    return true;
}
