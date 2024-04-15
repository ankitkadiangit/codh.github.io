let currentStep = 1;
const steps = document.querySelectorAll(".step");
const stepContents = document.querySelectorAll(".step-content");
const nextBtn = document.getElementById("nextBtn");

function showStep(stepNumber) {
  steps.forEach((step) => {
    step.classList.remove("active");
  });
  stepContents.forEach((content) => {
    content.classList.add("d-none");
  });
  steps[stepNumber - 1].classList.add("active");
  stepContents[stepNumber - 1].classList.remove("d-none");
  updateButtonVisibility(stepNumber);
}

function nextStep() {
  if (currentStep < steps.length) {
    // Add "completed" class to the previous step
    steps[currentStep - 1].classList.add("completed");
    currentStep++;
    showStep(currentStep);
  }
}

showStep(currentStep);
