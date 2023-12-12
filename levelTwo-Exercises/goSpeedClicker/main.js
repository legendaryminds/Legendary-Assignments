document.addEventListener("DOMContentLoaded", function () {
  // Initialize click count from localStorage or set to 0
  let speedClick = parseInt(localStorage.getItem("speedClick")) || 0;
    let timerValue = 30; // Initial timer value in seconds
    let isTimerRunning = true;

  // Display initial click count
  updateSpeedClick();
    updateTimer();
  // Add click event listener
    document.addEventListener("click", function () {
        if (isTimerRunning) {
            // Increment click count
            speedClick++;

            // Update click count and store in localStorage
            updateSpeedClick();
            localStorage.setItem("speedClick", speedClick.toString());
        }
});

  // Update click count on the page
  function updateSpeedClick() {
    document.getElementById("speedClick").textContent =
      "Click count: " + speedClick;
  }
    
    function updateTimer() {
        const timerElement = document.getElementById('timerValue');
        timerElement.textContent = timerValue;

        const timerInterval = setInterval(function () {
            timerValue--;

            if (timerValue < 0) {
                clearInterval(timerInterval);
                isTimerRunning = false;
                timerElement.textContent = 'Time\'s up!';
            } else {
                timerElement.textContent = timerValue;
            }
        }, 1000);
    }
});

//   Optional: Periodically save click count to localStorage (every 10 seconds in this example)
  setInterval(function () {
    localStorage.setItem("speedClick", speedClick.toString());
  }, 10000);

