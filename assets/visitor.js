document.addEventListener("DOMContentLoaded", function () {
  const todayKey = new Date().toISOString().slice(0, 10); // e.g., 2025-04-20
  const visitedKey = "hasVisitedToday";
  const totalKey = "totalVisits";
  const todayStorageKey = "todayVisits_" + todayKey;

  const todayCountEl = document.getElementById("today-count");
  const totalCountEl = document.getElementById("total-count");

  // Not work on refresh page
  if (!sessionStorage.getItem(visitedKey)) {
    // Dailt Visit COunt
    let todayCount = parseInt(localStorage.getItem(todayStorageKey)) || 0;
    todayCount++;
    localStorage.setItem(todayStorageKey, todayCount);

    // Total Visit Count
    let totalCount = parseInt(localStorage.getItem(totalKey)) || 0;
    totalCount++;
    localStorage.setItem(totalKey, totalCount);

    
    sessionStorage.setItem(visitedKey, "true");
  }


  todayCountEl.textContent = localStorage.getItem(todayStorageKey) || 0;
  totalCountEl.textContent = localStorage.getItem(totalKey) || 0;
});
