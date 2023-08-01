const html5QrCode = new Html5Qrcode("qr-reader");

function onScanSuccess(qrCodeMessage) {
    alert(`Scanned QR code: ${qrCodeMessage}`);
    // You can redirect to the scanned URL if you have one in the QR code.
}

function onScanError(errorMessage) {
    // Handle scan errors here.
    console.error(errorMessage);
}

html5QrCode.start(
    "qr-reader",
    { fps: 10, qrbox: 250 },
    (qrCodeMessage) => onScanSuccess(qrCodeMessage),
    (errorMessage) => onScanError(errorMessage)
);