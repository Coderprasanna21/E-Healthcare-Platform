// get html elements
const alertBox = document.querySelector("#alert-box");
const getStdBtn = document.querySelector("#getstd-btn");


// alert box
const  showAlert = ()=>{
    alertBox.classList.add("actives");
    setTimeout(function(){
    alertBox.classList.remove("actives");
    },1500)
    closeBtn.addEventListener("click",()=>{
    alertBox.classList.remove("actives");
    })
  }

getStdBtn.addEventListener("click",()=>{
    const userName = localStorage.getItem('username');
    const userEmail = localStorage.getItem('useremail');
    if(userName != null && userEmail != null){
        location.href = "./diet_plans.html";
        console.log(userName);
    }
    else{
        setTimeout(()=>{
            location.href = "./signin.html";
        },1000)
        showAlert();
    }
})

// user profile
document.addEventListener("DOMContentLoaded", () => {
  checkUserProfile();
});

const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const profileBtn = document.getElementById("profile-btn");
const signInBtn = document.getElementById("signin");
const signOutBtn = document.getElementById("sign-out");
const closeProfileBtn = document.getElementById("close-btn");
const userProfileContainer = document.getElementById("user-profile-container");
let check = 0;

function toggleProfileContainer() {
  if (check == 0) {
    userProfileContainer.classList.add("active");
    check = 1;
  } else {
    userProfileContainer.classList.remove("active");
    check = 0;
  }
}
profileBtn.addEventListener("click", toggleProfileContainer);
closeProfileBtn.addEventListener("click", toggleProfileContainer);

function checkUserProfile() {
  const name = localStorage.getItem("username");
  const email = localStorage.getItem("useremail");
  if (name != null && email != null) {
    userName.innerHTML = name;
    userEmail.innerHTML = email;
    profileBtn.classList.add("active");
    signInBtn.classList.remove("active");
  } else {
    signInBtn.classList.add("active");
    profileBtn.classList.remove("active");
  }
}

signOutBtn.addEventListener("click", () => {
  localStorage.removeItem("username");
  localStorage.removeItem("useremail");
  location.reload();
});

// BMI Calculation
const bmiCalculator = document.querySelector("#bmi-calculator");
const bmiCalculateBtn  = bmiCalculator.querySelector("#calculate");
const bmiValue = bmiCalculator.querySelector("#bmi-value");
const clearBtn =  bmiCalculator.querySelector("#clear");
function calculateBMI(){
  const height = bmiCalculator.querySelector("#height").value;
  const weight = bmiCalculator.querySelector("#weight").value;
  var heightInMeters  = height/100;
  var bmi = weight / (heightInMeters * heightInMeters);
  return bmi.toFixed(2);
}
function clearInputs(){
   bmiCalculator.querySelector("#height").value = "";
   bmiCalculator.querySelector("#weight").value = "";
   bmiValue.textContent = "";

}
bmiCalculateBtn.addEventListener("click",()=>{
  var bmiRate =  calculateBMI();
  console.log(bmiRate);
  bmiValue.textContent = `:${bmiRate}`;
})
clearBtn.addEventListener("click",()=>{
  clearInputs();
})

const bmrContainer = document.querySelector(".bmr-container");
const calculateBMRBtn = bmrContainer.querySelector("#calculateBMR");
const clearBmrBtn = bmrContainer.querySelector("#clearBmrBtn");
function clearBmr(){
  bmrContainer.querySelector('#age').value = "";
  bmrContainer.querySelector('#gender').value = "";
  bmrContainer.querySelector('#weight').value = "";
  bmrContainer.querySelector('#height').value = "";
}
calculateBMRBtn.addEventListener("click",()=>{
  calculateBMRValue();
})
clearBmrBtn.addEventListener("click",()=>{
  clearBmr();
})
function calculateBMRValue() {
  // Retrieve values from the form
  const userAge = parseInt(bmrContainer.querySelector('#age').value);
  const gender = bmrContainer.querySelector('#gender').value;
  const userWeight = parseFloat(bmrContainer.querySelector('#weight').value);
  const userHeight = parseFloat(bmrContainer.querySelector('#height').value);
  
  // Calculate BMR based on gender
  var bmr;
  if (gender === 'male') {
    bmr = 10 * userWeight + 6.25 * userHeight - 5 * userAge + 5;
  } else {
    bmr = 10 * userWeight + 6.25 * userHeight - 5 * userAge - 161;
  }

  // Display the result
  document.getElementById('result').innerText = "Your Basal Metabolic Rate (BMR) is: " + bmr.toFixed(2) + " calories per day.";
}