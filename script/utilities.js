// Product Number Update
function getNewProduct(isIncrease, id) {
  const ProductNumberField = document.getElementById(id);
  const ProductNumberFieldString = ProductNumberField.value;
  previousProductNumber = parseInt(ProductNumberFieldString);
  if (isIncrease === true) {
    newProductNumber = previousProductNumber + 1;
  } else {
    if (previousProductNumber > 0) {
      newProductNumber = previousProductNumber - 1;
    }
  }
  ProductNumberField.value = newProductNumber;
  return newProductNumber;
}

// Get Text Element Value By ID

function getTextElementValueById(elementId) {
  let totalProduct = 0;
  const totalProductElement = document.getElementById(elementId);
  if (totalProductElement !== null) {
    totalProduct = parseInt(totalProductElement.innerText);
  }
  return totalProduct;
}

// Set Element Text By ID

function setElementTextById(elementValue, id) {
  const textElement = document.getElementById(id);
  textElement.innerText = elementValue;
}

// Calculate Total

function calculateTotalPrice() {
  // Calculate Sub Total
  const phonePrice = getTextElementValueById("phone-price");
  const casePrice = getTextElementValueById("case-price");
  const subTotalPrice = phonePrice + casePrice;
  setElementTextById(subTotalPrice, "sub-total");

  // Calculate Tax

  const taxString = (subTotalPrice * 0.01).toFixed(2);
  const tax = parseFloat(taxString);
  setElementTextById(tax, "tax");

  // Calculate Total Price

  const totalPrice = subTotalPrice + tax;
  setElementTextById(totalPrice, "total-price");
}
