const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const weight = document.getElementById("weight");
  const height = document.getElementById("height");

  let w = parseFloat(weight.value);
  let h = parseFloat(height.value);

  let disp = document.querySelector("h3");

  if (!isFinite(w) || !isFinite(h) || w <= 0 || h <= 0) {
    disp.textContent =
      "Please enter valid positive numbers for weight and height.";
    return;
  }

  // If height looks like centimeters (e.g. > 3), convert to meters
  if (h > 3) h = h / 100;

  const bmi = w / (h * h);

  let status = "";
  if (bmi < 18.5) status = "Underweight";
  else if (bmi < 25) status = "Normal";
  else if (bmi < 30) status = "Overweight";
  else status = "Obese";

  disp.textContent = `BMI = ${bmi.toFixed(2)}  ${status}`;
});
