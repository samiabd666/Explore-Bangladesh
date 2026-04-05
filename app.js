const districtContainer = document.getElementById("districtContainer");
const spotContainer = document.getElementById("spotContainer");
const searchInput = document.getElementById("searchInput");

// Track active district
let activeDistrict = null;

/* -------------------------
   Create District Buttons
--------------------------*/
function loadDistricts(filter = "") {
  districtContainer.innerHTML = "";

  Object.keys(data)
    .filter(district => district.toLowerCase().includes(filter.toLowerCase()))
    .forEach(district => {

      const btn = document.createElement("button");
      btn.className = "district-btn";
      btn.innerText = district;

      btn.addEventListener("click", () => {
        if (activeDistrict === district) {
          // toggle off
          spotContainer.innerHTML = "";
          activeDistrict = null;
        } else {
          activeDistrict = district;
          showSpots(district);
        }
      });

      districtContainer.appendChild(btn);
    });
}

/* -------------------------
   Show Tourist Spots
--------------------------*/
function showSpots(district) {
  spotContainer.innerHTML = "";

  const spots = data[district];

  if (!spots || spots.length === 0) {
    spotContainer.innerHTML = "<p>No spots found</p>";
    return;
  }

  spots.forEach(spot => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${spot.name}</h3>
      <p><strong>Location:</strong> ${spot.location}</p>
      <p>${spot.description}</p>
    `;

    spotContainer.appendChild(card);
  });
}

/* -------------------------
   Search Functionality
--------------------------*/
searchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  loadDistricts(value);
});

/* -------------------------
   Initial Load
--------------------------*/
loadDistricts();