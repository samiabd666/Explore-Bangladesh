const districtList = document.getElementById("districtList");
const spotList = document.getElementById("spotList");
const details = document.getElementById("details");
const search = document.getElementById("search");

function loadDistricts(filter = "") {
    districtList.innerHTML = "";
    spotList.innerHTML = "";
    details.innerHTML = "";

    Object.keys(data).forEach(district => {
        if (district.toLowerCase().includes(filter.toLowerCase())) {
            let btn = document.createElement("button");
            btn.innerText = district;
            btn.onclick = () => showSpots(district);
            districtList.appendChild(btn);
        }
    });
}

search.addEventListener("input", () => {
    loadDistricts(search.value);
});

function showSpots(district) {
    spotList.innerHTML = "";
    details.innerHTML = "";

    data[district].forEach(spot => {
        let btn = document.createElement("button");
        btn.innerText = spot.name;
        btn.onclick = () => showDetails(spot);
        spotList.appendChild(btn);
    });
}

function showDetails(spot) {
    details.innerHTML = `
        <h2>${spot.name}</h2>
        <p><b>Location:</b> ${spot.location}</p>
        <p>${spot.description}</p>
        <a href="https://www.google.com/search?q=${spot.name}" target="_blank">
            🔎 View Hotels & Details
        </a>
    `;
}

loadDistricts();