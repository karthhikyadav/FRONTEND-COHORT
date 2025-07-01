let generatedOTP = "";
let currentAction = "";

function sendOTP(action) {
  const phone = action === "signup"
    ? document.getElementById("phone").value
    : document.getElementById("login-phone").value;

  if (!phone || phone.length < 10) {
    alert("Please enter a valid phone number.");
    return;
  }

  currentAction = action;
  generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

  alert(`OTP sent to ${phone}: ${generatedOTP}`); // simulate SMS

  document.getElementById("otp-section").style.display = "block";
}

function verifyOTP() {
  const enteredOTP = document.getElementById("otp-input").value;

  if (enteredOTP === generatedOTP) {
    if (currentAction === "signup") {
      alert("Signup successful!");
    } else {
      alert("Login successful!");
    }
    document.getElementById("otp-section").style.display = "none";
  } else {
    alert("Invalid OTP, try again.");
  }
}
