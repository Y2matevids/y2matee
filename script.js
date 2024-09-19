document.getElementById('download-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const url = document.getElementById('url').value;
    const messageElement = document.getElementById('message');
    
    // Basic validation
    if (!url) {
        messageElement.textContent = 'Please enter a valid URL.';
        messageElement.style.color = 'red';
        return;
    }
    
    // Here you would normally send a request to your server to handle the download.
    // This is a placeholder to show that something has happened.
    messageElement.textContent = `Download request for URL: ${url} received.`;
    messageElement.style.color = 'green';
});
