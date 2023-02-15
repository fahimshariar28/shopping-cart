// Update Phone Number with Keyboard

document
  .getElementById("phone-number-field")
  .addEventListener("keyup", function (e) {
    const newPhoneNumber = e.target.value;
    updatePhonePrice(newPhoneNumber, "phone-price");
    calculateTotalPrice();
  });

// Update Phone Number with Plus Button

document
  .getElementById("phone-btn-plus")
  .addEventListener("click", function () {
    const newPhoneNumber = getNewProduct(true, "phone-number-field");
    updatePhonePrice(newPhoneNumber, "phone-price");
    calculateTotalPrice();
  });

// Update Phone Number with Minus Button

document
  .getElementById("phone-btn-minus")
  .addEventListener("click", function () {
    const newPhoneNumber = getNewProduct(false, "phone-number-field");
    updatePhonePrice(newPhoneNumber, "phone-price");
    calculateTotalPrice();
  });

// Remove Phone with Button

document.getElementById("phone-remove").addEventListener("click", function () {
  const phoneSection = document.getElementById("phone-section");
  phoneSection.parentNode.removeChild(phoneSection);
  calculateTotalPrice();
});

// Update Phone Price

function updatePhonePrice(newProductNumber, id) {
  const priceField = document.getElementById(id);
  const newPrice = newProductNumber * 1219;
  priceField.innerText = newPrice;
}
