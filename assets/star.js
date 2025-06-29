// Function to generate stars (your previous code for stars)
function generateStars() {
    const container = document.getElementById('stars-container');
    const totalStars = 150;
    const colors = ['#ffffff', '#ffdd55', '#00ffff', '#ff66cc', '#adff2f', '#ffa500'];
  
    for (let i = 0; i < totalStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = `${Math.random() * window.innerWidth}px`;
      star.style.top = `${Math.random() * window.innerHeight}px`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      container.appendChild(star);
    }
  }
  
  // Function to check the time and display moon during night
  function checkTimeAndShowMoon() {
    const currentHour = new Date().getHours();  // Get the current hour
  
    const moon = document.getElementById('moon');
    
    // Display moon only during night time (e.g., from 6 PM to 6 AM)
    if (currentHour >= 18 || currentHour < 6) {
      moon.style.display = 'block';  // Show the moon
    } else {
      moon.style.display = 'none';   // Hide the moon
    }
  }
  
  // Generate stars when page loads
  window.onload = function() {
    generateStars();
    checkTimeAndShowMoon();  // Check the time and show the moon if it's night
  };
  