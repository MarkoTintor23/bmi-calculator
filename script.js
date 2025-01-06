const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const computeBtn = document.querySelector("#compute-btn");
const bmiValue = document.querySelector("#bmi-value");
const bmiCondition = document.querySelector("#bmi-condition");

computeBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let height = parseFloat(heightInput.value);
  let weight = parseFloat(weightInput.value);

  const bmi = (weight / (height / 100) ** 2).toFixed(2);

  bmiValue.textContent = bmi;
  if (!height || !weight || height <= 0 || weight <= 0) {
    bmiValue.textContent = "--";
    bmiCondition.textContent = "Please enter valid height and weight!";
    return;
  }

  if (bmi < 18.5) {
    bmiCondition.textContent = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.99) {
    bmiCondition.textContent = "Normal";
  } else if (bmi >= 25) {
    bmiCondition.textContent = "Overweight";
  }
});
