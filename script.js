//your JS code here. If required.
function updateTime() {
    const timerElement = document.getElementById("timer");
    const now = new Date();
    const formattedTime = now.toLocaleString(); // Format Date and Time
    timerElement.innerText = formattedTime;
}

// Update timer every second
setInterval(updateTime, 1000);

// Initialize timer immediately
updateTime();
