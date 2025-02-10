class Bmi {
  constructor() {
    this.heightInput = document.querySelector("#height");
    this.weightInput = document.querySelector("#weight");
    this.computeBtn = document.querySelector("#compute-btn");
    this.bmiValue = document.querySelector("#bmi-value");
    this.bmiCondition = document.querySelector("#bmi-condition");

    this.addEventListeners();
  }
  addEventListeners() {
    this.computeBtn.addEventListener("click", (e) => this.compute(e));
  }

  compute(event) {
    event.preventDefault();
    let height = parseFloat(this.heightInput.value);
    let weight = parseFloat(this.weightInput.value);

    if (!height || !weight || height <= 0 || weight <= 0) {
      this.bmiValue.textContent = "--";
      this.bmiCondition.textContent = "Please enter valid height and weight!";
      return;
    }
    const bmi = (weight / (height / 100) ** 2).toFixed(2);
    this.bmiValue.textContent = bmi;
    if (bmi < 18.5) {
      this.bmiCondition.textContent = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.99) {
      this.bmiCondition.textContent = "Normal";
    } else if (bmi >= 25) {
      this.bmiCondition.textContent = "Overweight";
    }
  }
}

const bmiPerson1 = new Bmi();
