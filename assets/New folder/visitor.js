
  const countBox = document.getElementById("visitor-count-container");

  // Show counter only when footer visible
  window.addEventListener("scroll", () => {
    const footer = document.querySelector("footer");
    const visible = footer.getBoundingClientRect().top < window.innerHeight;
    countBox.style.opacity = visible ? "1" : "0";
  });

  // CountAPI settings
  const namespace = "mirza_shakil_site_01";
  const key = "total_visitors";

  // Total Visitor Count (global)
  fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("total-count").textContent = data.value;
    });

  // Today's visit count (localStorage-based)
  const todayKey = "visitor_" + new Date().toISOString().slice(0, 10);

  if (!localStorage.getItem(todayKey)) {
    localStorage.setItem(todayKey, "true");

    // Get current today count
    let count = localStorage.getItem("todayCounter") || 0;
    count++;
    localStorage.setItem("todayCounter", count);
  }

  const todayCount = localStorage.getItem("todayCounter") || 1;
  document.getElementById("today-count").textContent = todayCount;

