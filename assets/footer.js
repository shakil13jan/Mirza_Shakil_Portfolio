
  function generateFooterStars() {
    const container = document.getElementById("footer-stars");
    const totalStars = 50;

    for (let i = 0; i < totalStars; i++) {
      const star = document.createElement("div");
      star.classList.add("footer-star");
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      container.appendChild(star);
    }
  }

  // Footer stars load
  generateFooterStars();

