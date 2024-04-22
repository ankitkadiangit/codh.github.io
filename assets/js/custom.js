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
  // updateButtonVisibility(stepNumber);
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

function customAlert() {
  // Create overlay
  var overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  // Create alert box
  var alertBox = document.createElement("div");
  alertBox.classList.add("alert-box");
  alertBox.innerHTML = `
  <div class="modal-header">
    <h5 class="modal-title">You have unsaved changes</h5>
    <button type="button" class="btn-close" aria-label="Close" onclick="closeAlert()"></button>
  </div>
  <div class="modal-body">
    <p>Are you sure you want to leave?</p>
  </div>
  <div class="modal-footer">
    <button class="btn btn-outline-secondary me-2" onclick="closeAlert()">Leave</button>
    <button class="btn btn-primary" onclick="closeAlert()">Stay</button>
  </div>`;
  document.body.appendChild(alertBox);
}

function closeAlert() {
  document.querySelector(".overlay").remove();
  document.querySelector(".alert-box").remove();
}
