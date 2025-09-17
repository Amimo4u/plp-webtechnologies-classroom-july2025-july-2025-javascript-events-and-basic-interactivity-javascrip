
// Part 1: Variables & Conditionals

let num = 8;
if (num > 5) {
  console.log("Number is greater than 5");
} else {
  console.log("Number is 5 or less");
}


// Part 2: Functions

function greet(name) {
  return "Hello " + name;
}
function add(a, b) {
  return a + b;
}

// Part 3: Loops

for (let i = 1; i <= 3; i++) {
  console.log("For loop: " + i);
}
let x = 1;
while (x <= 2) {
  console.log("While loop: " + x);
  x++;
}

// Part 4: DOM Interactions & Events

document.getElementById("btnChange").onclick = function() {
  document.getElementById("message").innerText = "Message Changed!";
};
document.getElementById("btnCount").onclick = function() {
  let numbers = "";
  for (let i = 1; i <= 5; i++) {
    numbers += i + " ";
  }
  alert("Counting: " + numbers);
};
document.getElementById("btnCalc").onclick = function() {
  let result = add(10, 20);
  document.getElementById("message").innerText = "Sum is " + result;
};

// Interactive Features

// Dark mode toggle
document.getElementById("btnToggle").onclick = function() {
  document.body.classList.toggle("dark-mode");
};

// Collapsible FAQ
document.getElementById("faqBtn").onclick = function() {
  let answer = document.getElementById("faqAnswer");
  answer.style.display = (answer.style.display === "none") ? "block" : "none";
};


// Form Validation

document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop form from submitting
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let msg = "";

  if (name === "") {
    msg = "Name is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    msg = "Enter a valid email.";
  } else if (password.length < 6) {
    msg = "Password must be at least 6 characters.";
  } else {
    msg = "Form submitted successfully! ✅";
  }

  document.getElementById("formMsg").innerText = msg;
});
