// Function to generate the QR Code
function generateQRCode() {
    const value = document.getElementById('qr-code-value').value.trim();
    const errorMessage = document.getElementById('error-message');
    const qrCodeImage = document.getElementById('qr-code-image');
    const downloadBtn = document.getElementById('download-btn');

    // Clear previous QR code and error message
    qrCodeImage.src = '';
    errorMessage.style.display = 'none';
    downloadBtn.style.display = 'none';

    // Check if the input is empty
    if (!value) {
        errorMessage.style.display = 'block';
        return;
    }

    // Create a QR Code using the QRious library
    const qr = new QRious({
        value: value,
        size: 250,  // QR Code size
        level: 'H'  // Error correction level
    });

    // Set the QR Code image source to the generated QR code data URL
    qrCodeImage.src = qr.toDataURL();

    // Show the download button after QR code is generated
    downloadBtn.style.display = 'block';
}

// Function to download the QR Code
function downloadQRCode() {
    const qrCodeImage = document.getElementById('qr-code-image').src;

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = qrCodeImage;
    link.download = 'qr-code.png';  // Set download filename
    link.click();
}
