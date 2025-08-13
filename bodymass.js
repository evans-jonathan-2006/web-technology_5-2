document.addEventListener('DOMContentLoaded', () => {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const bmiValueDiv = document.getElementById('bmi-value');
    const bmiCategoryDiv = document.getElementById('bmi-category');

    function calculateBMI() {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);

        // Check if inputs are valid
        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            bmiValueDiv.textContent = '';
            bmiCategoryDiv.textContent = '';
            return;
        }

        // BMI formula: weight (kg) / [height (m)]^2
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);

        // Display the BMI value, rounded to one decimal place
        bmiValueDiv.textContent = bmi.toFixed(1);

        // Determine BMI category
        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight BMI';
        } else if (bmi >= 18.5 && bmi < 25) {
            category = 'Normal BMI';
        } else if (bmi >= 25 && bmi < 30) {
            category = 'Overweight BMI';
        } else {
            category = 'Obese BMI';
        }

        bmiCategoryDiv.textContent = category;
    }

    // Add event listeners to trigger the calculation on input changes
    weightInput.addEventListener('input', calculateBMI);
    heightInput.addEventListener('input', calculateBMI);
});
