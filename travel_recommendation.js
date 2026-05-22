document.addEventListener("DOMContentLoaded", () => {
  let travelData = {};

  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("btnSearch");
  const resetBtn = document.getElementById("btnReset");

  const mainContent = document.querySelector(".main-content");
  const resultsContainer = document.getElementById("resultsContainer");

  // ================= FETCH DATA =================
  fetch("./travel_recommendation_api.json")
    .then((response) => response.json())
    .then((data) => {
      travelData = data;
      console.log("Data loaded:", travelData);
    })
    .catch((error) => {
      console.error("Error loading JSON:", error);
    });

  // ================= SEARCH =================
  searchBtn.addEventListener("click", () => {
    const keyword = searchInput.value.toLowerCase().trim();

    // safety check (data not loaded yet)
    if (!travelData.beaches) {
      console.log("Data not loaded yet...");
      return;
    }

    // hide main content, show results
    mainContent.classList.add("hidden");
    resultsContainer.classList.remove("hidden");
    resultsContainer.innerHTML = "";

    let results = [];

    // ================= KEYWORD LOGIC =================
    if (keyword.includes("beach") || keyword.includes("beaches")) {
      results = travelData.beaches;
    } else if (keyword.includes("temple") || keyword.includes("temples")) {
      results = travelData.temples;
    } else if (keyword.includes("country") || keyword.includes("countries")) {
      results = travelData.countries;
    } else {
      results = [];
    }

    // ================= DISPLAY RESULTS =================
    if (results.length > 0) {
      results.slice(0, 2).forEach((place) => {
        const card = document.createElement("div");
        card.classList.add("result-card");

        card.innerHTML = `
          <img src="${place.imageUrl}" alt="${place.name}" />
          <h3>${place.name}</h3>
          <p>${place.description}</p>
        `;

        resultsContainer.appendChild(card);
      });
    } else {
      resultsContainer.innerHTML =
        "<p style='color:white'>No results found</p>";
    }
  });

  // ================= RESET =================
  resetBtn.addEventListener("click", () => {
    searchInput.value = "";

    resultsContainer.innerHTML = "";
    resultsContainer.classList.add("hidden");

    mainContent.classList.remove("hidden");
  });
});
