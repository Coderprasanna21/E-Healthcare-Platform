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

const popUpContainer = document.querySelector(".pop-up-container");
const blurContainer = document.querySelector(".blur-container");
const exercises = document.querySelectorAll(".exercises");
exercises.forEach((e)=>{
    e.addEventListener("click",()=>{
        blurContainer.style.display="grid";
        popUpContainer.style.display ="grid";
        popUpContainer.style.transition="8s ease-in-out";
        const title = e.querySelector(".title");
        const procedure = e.querySelector(".procedure");
        const benefits = e.querySelector(".benefits");
        const sets = e.querySelector(".sets");
        const gif = e.querySelector(".gif");

        let pcTitle = popUpContainer.querySelector(".title");
        let pcProcedure = popUpContainer.querySelector(".procedure");
        let pcBenefits = popUpContainer.querySelector(".benefits");
        let pcSets = popUpContainer.querySelector(".sets");
        let pcGif  = popUpContainer.querySelector(".gif");
        pcTitle.innerHTML = title.innerHTML;
        pcProcedure.innerHTML = procedure.innerHTML;
        pcBenefits.innerHTML = benefits.innerHTML;
        pcSets.innerHTML = sets.innerHTML;
        pcGif.innerHTML = gif.innerHTML;
        // popUpContainer.closest(".title") = title;
        console.log(pcTitle)
        // console.log(title);
        // console.log(procedure);
        // console.log(benefits);
        // console.log(sets);
        // console.log(imgSrc);
        blurContainer.addEventListener("click",() =>{
            blurContainer.style.display="none";
            popUpContainer.style.display="none";
        })
        
    })
    

})

// console.log(exercises);