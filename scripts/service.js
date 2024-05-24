const dietPlan = document.querySelector("#diet_plan");
dietPlan.addEventListener("click", () => {
  location.href = "./diet_plan_index.html";
});

const personalTrainer = document.querySelector("#personal_trainer");
personalTrainer.addEventListener("click", () => {
  location.href = "./personal_trainer.html";
});


const simpleExcercise = document.querySelector("#simple_excercises");
simpleExcercise.addEventListener("click", () => {
  location.href = "./simple_exercise.html";
});


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
