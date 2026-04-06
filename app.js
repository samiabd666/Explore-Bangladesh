const districtContainer = document.getElementById("districtContainer");
const spotContainer = document.getElementById("spotContainer");
const searchInput = document.getElementById("searchInput");

/* MENU TOGGLE */
const menuBtn = document.getElementById("menuBtn");
const dropdown = document.getElementById("dropdown");

menuBtn.addEventListener("click", () => {
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

/* LOAD DISTRICTS */
function loadDistricts(filter = "") {
  districtContainer.innerHTML = "";

  Object.keys(data).forEach(district => {
    if (district.toLowerCase().includes(filter.toLowerCase())) {
      const btn = document.createElement("button");
      btn.className = "district-btn";
      btn.innerText = district;

      btn.onclick = () => toggleDistrict(district);

      districtContainer.appendChild(btn);
    }
  });
}

/* TOGGLE DISTRICT */
let activeDistrict = null;

function toggleDistrict(district) {
  if (activeDistrict === district) {
    spotContainer.innerHTML = "";
    activeDistrict = null;
  } else {
    activeDistrict = district;
    showSpots(district);
  }
}

/* SHOW SPOTS */
function showSpots(district) {
  spotContainer.innerHTML = "";

  const spots = data[district];

  spots.forEach(spot => {
    const card = document.createElement("div");
    card.className = "card";

    const mapLink = `https://www.google.com/maps?q=${encodeURIComponent(spot.location)}`;

    card.innerHTML = `
      <h3>${spot.name}</h3>
      <p><strong>Location:</strong> ${spot.location}</p>
      <p>${spot.description}</p>
      <a href="${mapLink}" target="_blank">View on Google Maps</a>
    `;

    spotContainer.appendChild(card);
  });
}

/* SEARCH */
searchInput.addEventListener("input", (e) => {
  loadDistricts(e.target.value);
});

/* INIT */
loadDistricts();