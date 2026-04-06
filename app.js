const districtContainer = document.getElementById("districtContainer");
const spotContainer = document.getElementById("spotContainer");
const searchInput = document.getElementById("searchInput");

/* -------------------------
   MENU TOGGLE (FIXED)
--------------------------*/
const menuBtn = document.getElementById("menuBtn");
const dropdown = document.getElementById("dropdown");

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

/* click anywhere → close menu */
document.addEventListener("click", () => {
  dropdown.style.display = "none";
});

/* prevent dropdown click from closing */
dropdown.addEventListener("click", (e) => {
  e.stopPropagation();
});

/* -------------------------
   LOAD DISTRICTS
--------------------------*/
function loadDistricts(filter = "") {
  districtContainer.innerHTML = "";

  Object.keys(data).forEach(district => {
    if (district.toLowerCase().includes(filter.toLowerCase())) {
      const btn = document.createElement("button");
      btn.className = "district-btn";
      btn.innerText = district;

      // ✅ REDIRECT TO SEPARATE PAGE
      btn.onclick = () => {
        window.location.href = `${district.toLowerCase()}.html`;
      };

      districtContainer.appendChild(btn);
    }
  });
}

/* -------------------------
   TOGGLE FUNCTION (not used now but kept safe)
--------------------------*/
let activeDistrict = null;

/* -------------------------
   SHOW SPOTS (for optional use)
--------------------------*/
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

/* -------------------------
   SEARCH
--------------------------*/
searchInput.addEventListener("input", (e) => {
  loadDistricts(e.target.value);
});

/* INIT */
loadDistricts();