function handleGetFormData() {
  return {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    city: document.getElementById('city').value,
    zipCode: document.getElementById('zip-code').value,
    status: document.getElementById('status').checked // This already gets the boolean status
  };
}

function isNumber(str) {
  // Ensure it's not empty, can be parsed as a number, and is a finite number
  return str !== '' && !isNaN(parseFloat(str)) && isFinite(str);
}

// You no longer need to call this function directly inside validateFormData
// because the status is already available in the 'data' object.
// function checkboxIsChecked() {
//   return document.getElementById('status').checked;
// }

function validateFormData(data) {
  // Point 9 instructions:
  // 1. object is not null: data !== null
  // 2. zipCode is a number: isNumber(data.zipCode)
  // 3. status checkbox is checked: data.status (since handleGetFormData already got it)
  // All combined with '&&'
  return data !== null && isNumber(data.zipCode) && data.status;
}

function submit(e) {
  // Point 10 instruction: Prevent default form submission behavior (page refresh)
  e.preventDefault();

  const warning = document.getElementById('warning');
  const isValid = validateFormData(handleGetFormData()); // Call validateFormData with the data

  // Point 10 instruction: Show/hide warning based on validation result
  warning.textContent = isValid ? '' : 'Periksa form anda sekali lagi';
}

document.getElementById('myForm').addEventListener('submit', submit);