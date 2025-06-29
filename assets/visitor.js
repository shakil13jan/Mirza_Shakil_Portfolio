document.addEventListener("DOMContentLoaded", function () {
  const todayKey = new Date().toISOString().slice(0, 10); // e.g., 2025-04-20
  const visitedKey = "hasVisitedToday";
  const totalKey = "totalVisits";
  const todayStorageKey = "todayVisits_" + todayKey;

  const todayCountEl = document.getElementById("today-count");
  const totalCountEl = document.getElementById("total-count");

  // শুধুমাত্র নতুন ট্যাবের জন্য গণনা (রিফ্রেশ বাদে)
  if (!sessionStorage.getItem(visitedKey)) {
    // আজকের ভিজিট গণনা
    let todayCount = parseInt(localStorage.getItem(todayStorageKey)) || 0;
    todayCount++;
    localStorage.setItem(todayStorageKey, todayCount);

    // মোট ভিজিট গণনা
    let totalCount = parseInt(localStorage.getItem(totalKey)) || 0;
    totalCount++;
    localStorage.setItem(totalKey, totalCount);

    // সেশন মার্ক করা যাতে রিফ্রেশে না বাড়ে
    sessionStorage.setItem(visitedKey, "true");
  }

  // দেখানো অংশ
  todayCountEl.textContent = localStorage.getItem(todayStorageKey) || 0;
  totalCountEl.textContent = localStorage.getItem(totalKey) || 0;
});
