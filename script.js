function metersToFeet() {
  const meters = document.getElementById('meters').value;
  const feet = (meters * 3.28084).toFixed(2);
  document.getElementById('feetResult').textContent = feet;
}

function kgToLb() {
  const kg = document.getElementById('kg').value;
  const lb = (kg * 2.20462).toFixed(2);
  document.getElementById('lbResult').textContent = lb;
}
