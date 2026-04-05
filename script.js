const container = document.getElementById("container");

for (let district in data) {

  // Button
  const btn = document.createElement("button");
  btn.className = "district-btn";
  btn.innerText = district;

  // Spots box
  const box = document.createElement("div");
  box.className = "spots-box";

  // Add spots
  data[district].forEach(spot => {
    const spotDiv = document.createElement("div");
    spotDiv.className = "spot-card";
    spotDiv.innerText = spot;
    box.appendChild(spotDiv);
  });

  // Toggle logic
  btn.onclick = () => {
    if (box.style.display === "block") {
      box.style.display = "none";
    } else {
      box.style.display = "block";
    }
  };

  container.appendChild(btn);
  container.appendChild(box);
}