//your JS code here. If required.
// Function to update the timer
function updateTimer() {
    // Get the current date and time
    const now = new Date();

    // Format the date and time
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    };
    const formattedTime = now.toLocaleString('en-US', options);

    // Display the formatted time in the timer element
    document.getElementById('timer').textContent = formattedTime;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to display the timer immediately on page load
updateTimer();
