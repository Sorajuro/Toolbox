function convert() {
  const from = document.getElementById("convert-from").value;
  const to = document.getElementById("convert-to").value;
  const value = parseFloat(document.getElementById("input-value").value);
  let resultText = "";

  if (isNaN(value)) {
    resultText = "Please enter a valid number.";
  } else {
    if (from === "kg" && to === "lb") {
      resultText = `${value} kg = ${(value * 2.20462).toFixed(2)} lb`;
    } else if (from === "m" && to === "ft") {
      resultText = `${value} m = ${(value * 3.28084).toFixed(2)} ft`;
    } else {
      resultText = "Conversion not supported.";
    }
  }

  document.getElementById("result").textContent = resultText;
}