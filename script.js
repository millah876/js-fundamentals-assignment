/* =====================================
   Part 1: JavaScript Basics
   Variables, Conditionals, and Input
===================================== */

// Capture user input and greet them
document.getElementById("greet-btn").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();

  if (username) {
    document.getElementById("greeting").textContent = `Hello, ${username}! Welcome to JavaScript Fundamentals! 🎉`;
  } else {
    document.getElementById("greeting").textContent = "Please enter your name first.";
  }
});

/* =====================================
   Part 2: Functions — Reusability
===================================== */

// Function to calculate total price (example of reusable logic)
function calculateTotal(price, quantity) {
  return price * quantity;
}

document.getElementById("calc-btn").addEventListener("click", () => {
  const total = calculateTotal(20, 3); // Example: price = 20, quantity = 3
  document.getElementById("calc-result").textContent = `Total: $${total}`;
});

// Function to toggle message visibility
function toggleMessage() {
  const message = document.getElementById("toggle-message");
  message.classList.toggle("hidden");
}

document.getElementById("toggle-btn").addEventListener("click", toggleMessage);

/* =====================================
   Part 3: Loops — Repetition & Iteration
===================================== */

const fruits = ["Apple", "Banana", "Mango", "Strawberry", "Pineapple"];

document.getElementById("list-btn").addEventListener("click", () => {
  const listContainer = document.getElementById("fruit-list");
  listContainer.innerHTML = ""; // Clear previous items

  // Use a loop to generate list items dynamically
  for (let i = 0; i < fruits.length; i++) {
    const li = document.createElement("li");
    li.textContent = fruits[i];
    listContainer.appendChild(li);
  }
});

/* =====================================
   Part 4: DOM Manipulation
===================================== */

// Change background color randomly
document.getElementById("color-btn").addEventListener("click", () => {
  const colors = ["#f9c74f", "#90be6d", "#f94144", "#577590", "#43aa8b"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
