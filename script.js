const btn = document.getElementById("btn");
const loc = document.getElementById("loc");

btn.addEventListener("click", () => {
  const lat = (Math.random() * 90).toFixed(4);
  const lon = (Math.random() * 180).toFixed(4);

  loc.textContent = `🌎 Latitude: ${lat}, Longitude: ${lon}`;

  loc.classList.remove("animate");
  void loc.offsetWidth;
  loc.classList.add("animate");
});
