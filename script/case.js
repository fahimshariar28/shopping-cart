// Update Case Number with Keyboard

document
  .getElementById("case-number-field")
  .addEventListener("keyup", function (e) {
    const newCaseNumber = e.target.value;
    updateCasePrice(newCaseNumber, "case-price");
    calculateTotalPrice();
  });

// Update Case Number with plus Button

document.getElementById("case-btn-plus").addEventListener("click", function () {
  const newCaseNumber = getNewProduct(true, "case-number-field");
  updateCasePrice(newCaseNumber, "case-price");
  calculateTotalPrice();
});

// Update Case Number with Minus Button

document
  .getElementById("case-btn-minus")
  .addEventListener("click", function () {
    const newCaseNumber = getNewProduct(false, "case-number-field");
    updateCasePrice(newCaseNumber, "case-price");
    calculateTotalPrice();
  });

// Case Section Remove with Button

document.getElementById("case-remove").addEventListener("click", function (e) {
  const caseSection = document.getElementById("case-section");
  caseSection.parentNode.removeChild(caseSection);
  calculateTotalPrice();
});

// Case Price Update

function updateCasePrice(newProductNumber, id) {
  const priceField = document.getElementById(id);
  const newPrice = newProductNumber * 59;
  priceField.innerText = newPrice;
}
