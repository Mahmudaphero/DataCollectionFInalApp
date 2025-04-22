// Function to display a single entry in the table
const displayCart = (name, age, gender, bloodgroup, weight) => {
    const cartContainer = document.getElementById('cart-container');
    const row = document.createElement('tr');
  
    row.innerHTML = `
      <td class="border px-4 py-2">${name}</td>
      <td class="border px-4 py-2">${age}</td>
      <td class="border px-4 py-2">${gender}</td>
      <td class="border px-4 py-2">${bloodgroup}</td>
      <td class="border px-4 py-2">${weight}</td>
    `;
  
    cartContainer.appendChild(row);
  };
  
  // Function to load data from localStorage on page load
  const loadCartFromLocalStorage = () => {
    const savedData = JSON.parse(localStorage.getItem('cartData')) || [];
    savedData.forEach(entry => {
      displayCart(entry.name, entry.age, entry.gender, entry.bloodgroup, entry.weight);
    });
  };
  
  // Function to handle form submission and save data
  const handleAddtoCart = (event) => {
    event.preventDefault();
  
    const userName = document.getElementById('user-name');
    const userAge = document.getElementById('user-age');
    const userGender = document.getElementById('user-gender');
    const userBloodGroup = document.getElementById('user-blood-group');
    const userBodyWeight = document.getElementById('user-body-weight');
  
    const name = userName.value;
    const age = userAge.value;
    const gender = userGender.value;
    const bloodgroup = userBloodGroup.value;
    const weight = userBodyWeight.value;
  
    const newEntry = { name, age, gender, bloodgroup, weight };
  
    // Save to localStorage
    let cartData = JSON.parse(localStorage.getItem('cartData')) || [];
    cartData.push(newEntry);
    localStorage.setItem('cartData', JSON.stringify(cartData));
  
    displayCart(name, age, gender, bloodgroup, weight);
  
    // Clear form
    userName.value = '';
    userAge.value = '';
    userGender.value = '';
    userBloodGroup.value = '';
    userBodyWeight.value = '';
  };
  
  // Event listeners
  document.getElementById('submit-btn').addEventListener('click', handleAddtoCart);
  window.addEventListener('DOMContentLoaded', loadCartFromLocalStorage);
  