const userDetails = document.querySelector(".user-details");
const userDetailsContainer  = document.querySelector(".users-details-container");
const closeUserDetailsBtn = userDetails.querySelector(".close-user-details");
const ageNextBtn = document.querySelector("#age-next-btn");
const alertBox = document.querySelector("#alert-box");
const closeBtn = document.querySelector("#close");
const welcomeContainer = document.querySelector(".welcome-container");
const popupContent = welcomeContainer.querySelector(".popup-content");
welcomeContainer.style.transform="translateY(0px)";

//user profile dashboard
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



let dietOption =""
let dietPlanGender  =""
let foodOption =""
//Close Welcome Popup Container
const welcomePopupCloseBtn  = document.querySelector("#wm-popoup-close");
welcomePopupCloseBtn.addEventListener("click",()=>{
  welcomeContainer.style.transform="translateY(-700px)";

})


//Close User Inputs Container 
function closeUserInputContainer(){
  location.href="diet_plan_index.html";
}
closeUserDetailsBtn.addEventListener("click",()=>{
  closeUserInputContainer();
})

//Show Alert box when the does not enter details
const  showAlert = ()=>{
  alertBox.classList.add("actives");
  setTimeout(function(){
  alertBox.classList.remove("actives");
  },1500)
  closeBtn.addEventListener("click",()=>{
  alertBox.classList.remove("actives");
  })
}

const alertMsg = userDetails.querySelector(".alert-msg");
ageNextBtn.addEventListener("click",()=>{
    const userAge  = userDetails.querySelector("#user-age").value.trim();
    if(userAge===""){
      showAlert();
    }
    else if(15>userAge){
      alertMsg.textContent  = "Age must be 15 or older";
      setTimeout(function(){
        alertMsg.textContent  = "";
      },1500)
    }
    else{
      userDetails.innerHTML  =`<div class="user-details">
      <div class="close-btn-container">
              <span class="close-user-details">&times;</span>
      </div>
      <div class="content">
        <h2>What is your Height?</h2>
        <p>Your height will help us calculate important body states to help you reach your goals faster</p>
      </div>
      <div class="input-field">
        <input type="number" class="user-height" name="user-height" id="user-height"  placeholder="eg. 150cm" autofocus>
      </div>
      <div class="btns">
        <button class="next-btn" id="height-next-btn" type="submit">Next</button>
      </div>
    </div>`
    }
    
    // Close userdetails Container

    const closeUserDetailsBtn = userDetails.querySelector(".close-user-details");
    closeUserDetailsBtn.addEventListener("click",()=>{
      closeUserInputContainer();
    })

  const heightNextBtn = userDetails.querySelector("#height-next-btn");
  heightNextBtn.addEventListener("click",()=>{
    const userHeight  = userDetails.querySelector("#user-height").value.trim();
    if(userHeight===""){
      showAlert();
    }
    else{
      userDetails.innerHTML  =`<div class="user-details ">
      <div class="close-btn-container">
        <span class="close-user-details">&times;</span>
      </div>
      <div class="content">
        <h2>What is your Weight?</h2>
        <p>Your weight will help us calculate important body states to help you reach your goals faster</p>
      </div>
      <div class="input-field">
        <input type="number" class="user-weight" name="user-weight" id="user-weight" placeholder="eg. 55kg" autofocus>
      </div>
      <div class="btns">
        <button class="next-btn" id="weight-next-btn" type="submit">Next</button>
      </div>
    </div>`
    }

  // Close userdetails Container
  const closeUserDetailsBtn = userDetails.querySelector(".close-user-details");
  closeUserDetailsBtn.addEventListener("click",()=>{
    closeUserInputContainer();
  })
    
  const weightNextBtn = userDetails.querySelector("#weight-next-btn");
  weightNextBtn.addEventListener("click",()=>{
    const userWeight = userDetails.querySelector("#user-weight").value.trim();
    if(userWeight===""){
      showAlert();
    }
    else{
      userDetails.innerHTML = `<div class="user-details">
      <div class="close-btn-container">
        <span class="close-user-details">&times;</span>
      </div>
      <div class="content">
        <h2>Any Medical Condition we should be aware of?</h2>
        <p>This info will hellp us guide you to your fitness goals safely an quickly</p>
        <p class="mc-alert-msg"></P>
        </div>
      <div class="input-fields">
        <div class="input-field">
          <input type="checkbox" class="medical-condition" name="user-mc-none" id="user-mc-none"  value="none">
          <label for="user-mc-none">None</label>
        </div>
  
        <div class="input-field">
          <input type="checkbox" class="medical-condition" name="user-mc-diabetes" id="user-mc-diabetes"  value="diabetes">
          <label for="user-mc-diabetes">Diabetes</label>
        </div>
  
        <div class="input-field">
          <input type="checkbox" class="medical-condition" name="user-mc-cholesterol" id="user-mc-cholesterol"  value="cholesterol">
          <label for="user-mc-cholesterol">Cholesterol</label>
        </div>
  
        <div class="input-field">
          <input type="checkbox" class="medical-condition" name="user-mc-sleep_issues" id="user-mc-sleep_issues"  value="sleep issues">
          <label for="user-mc-sleep_issues">Sleep Issues</label>
        </div>
      </div>
      <div class="btns">
        <button class="next-btn" id="mc-next-btn" type="submit">Next</button>
      </div>
    </div>`
    }

    // Close userdetails Container
    const closeUserDetailsBtn = userDetails.querySelector(".close-user-details");
    closeUserDetailsBtn.addEventListener("click",()=>{
      closeUserInputContainer();
    })

    const errorMsg  = ()=>{
      setTimeout(function (){
        mcAlertMsg.textContent = "";
      },1500)
    }
    
  const mcNextBtn  = userDetails.querySelector("#mc-next-btn");
  const mcAlertMsg = userDetails.querySelector(".mc-alert-msg");
  mcNextBtn.addEventListener("click",()=>{
    const userMcNone = userDetails.querySelector("#user-mc-none");
    const userMcDiabetes = userDetails.querySelector("#user-mc-diabetes");
    const userMcCholesterol = userDetails.querySelector("#user-mc-cholesterol");
    const userMcSleepissues = userDetails.querySelector("#user-mc-sleep_issues");
    if((userMcNone.checked) && (userMcDiabetes.checked || userMcCholesterol.checked || userMcSleepissues.checked)){
      mcAlertMsg.textContent = "wrong input";
      errorMsg();
    }
   
    else if(userMcDiabetes.checked || userMcCholesterol.checked || userMcSleepissues.checked){
      mcAlertMsg.textContent = "You affected to health issues.";
     errorMsg();
    }
    else if(userMcNone.checked){
      userDetails.innerHTML = `<div class="user-details">
      <div class="close-btn-container">
        <span class="close-user-details">&times;</span>
      </div>
      <div class="content">
        <h2>Which specific aspect of a diet plan are you interested in?</h2>
        <p>Understanding diet focus for efficient fitness goal attainment.</p>
      </div>
      <form action="#" class="input-fields">
          <div class="input-field">
            <input type="radio" class="diet-option" name="diet-option" id="diet-option-weightgain"  value="weightgain">
            <label for="diet-option-weightgain">Weight Gain</label>
          </div>
  
          <div class="input-field">
            <input type="radio" class="diet-option" name="diet-option" id="diet-option-weightloss"  value="weightloss">
            <label for="diet-option-weightloss">Weight Loss</label>
          </div>

      </form>

      <div class="btns">
        <button class="next-btn" id="weightgain-next-btn" type="submit">Next</button>
      </div>
    </div>`
    }
    else{
      showAlert();
    }
   
     // Close userdetails Container
     const closeUserDetailsBtn = userDetails.querySelector(".close-user-details");
     closeUserDetailsBtn.addEventListener("click",()=>{
       closeUserInputContainer();
     })

    const weightNextBtn  = userDetails.querySelector("#weightgain-next-btn")
    weightNextBtn.addEventListener("click",()=>{
   
      const userWeightGain = userDetails.querySelector("#diet-option-weightgain");
      const userWeightLoss = userDetails.querySelector("#diet-option-weightloss");
         
      if(userWeightGain.checked || userWeightLoss.checked){
      dietOption  = userDetails.querySelector("input[name='diet-option']:checked").value.trim().toLowerCase();
        console.log(dietOption);
      userDetails.innerHTML = `<div class="user-details">
      <div class="close-btn-container">
        <span class="close-user-details">&times;</span>
      </div>
      <div class="content">
        <h2>Are you looking for a diet plan designed for men or women?</h2>
      </div>
      <form action="#" class="input-fields">
        <div class="input-field">
          <input type="radio" class="weightgain-option" name="gender-option" id="weightgain-option-men"  value="men">
          <label for="weightgain-option-men">Men</label>
        </div>
        <div class="input-field">
          <input type="radio" class="weightgain-option" name="gender-option" id="weightgain-option-women"  value="women">
          <label for="weightgain-option-women">Women</label>
        </div>
      </form>
      <div class="btns">
        <button class="next-btn" id="food-option-next-btn" type="submit">Next</button>
      </div>
    </div>`
    }
    else{
      showAlert();
    }

     // Close userdetails Container
     const closeUserDetailsBtn = userDetails.querySelector(".close-user-details");
     closeUserDetailsBtn.addEventListener("click",()=>{
       closeUserInputContainer();
     })
     
  const foodOptionBtn = userDetails.querySelector("#food-option-next-btn");
  foodOptionBtn.addEventListener("click",()=>{
    const weightGainMen = userDetails.querySelector("#weightgain-option-men");
    const weightGainWomen = userDetails.querySelector("#weightgain-option-women");
    if(weightGainMen.checked || weightGainWomen.checked){
     dietPlanGender = userDetails.querySelector("input[name='gender-option']:checked").value.trim().toLowerCase();
      console.log(dietPlanGender);
      userDetails.innerHTML = `<div class="user-details ">
      <div class="close-btn-container">
        <span class="close-user-details">&times;</span>
      </div>
      <div class="content">
        <h2>Prefer non-veg or veg plan?</h2>
      </div>
      <form action="#" class="input-fields">
        <div class="input-field">
          <input type="radio" class="food-option" name="food-option" id="food-option-nonveg"  value="nonveg">
          <label for="food-option-nonveg">Nonveg Plan</label>
        </div>
        <div class="input-field">
          <input type="radio" class="food-option" name="food-option" id="food-option-veg"  value="veg">
          <label for="food-option-veg">Veg Plan</label>
        </div>
      </form>
      <div class="btns">
        <button class="next-btn" id="sumbit-btn" type="submit">Submit</button>
      </div>
    </div>`
    }
    else{
      showAlert();
    }

    const closeUserDetailsBtn = userDetails.querySelector(".close-user-details");
    closeUserDetailsBtn.addEventListener("click",()=>{
      closeUserInputContainer();
    })
    
  

    // const foodOption =  userDetails.querySelector(".food-option");
    const submitBtn = userDetails.querySelector("#sumbit-btn");
    const blurContainer = document.querySelector(".blur-container");
    const dietPlanContainer = document.querySelector(".diet-plan-container");
    // let foodOption  = "";
    submitBtn.addEventListener("click",()=>{
        const foodOptionNonveg = userDetails.querySelector("#food-option-nonveg");
        const foodOptionVeg = userDetails.querySelector("#food-option-veg");

        
        if(foodOptionNonveg.checked || foodOptionVeg.checked){
           foodOption  = userDetails.querySelector("input[name='food-option']:checked").value.trim().toLowerCase();
          console.log(foodOption);
          userDetailsContainer.style.display="none";
          blurContainer.style.display="grid";
          setTimeout(function(){
            blurContainer.style.display="none";
            dietPlanContainer.style.display = "grid";
            onTableCreate(dietOption,foodOption,dietPlanGender);
          },2000)
        }
        else{
          showAlert();
        }

      });

                const $dietPlanFoodsContainer  = document.querySelector(".diet-plan-foods");
                const $title = $dietPlanFoodsContainer.querySelector("#title");
                const $dtplnCloseBtn  =document.querySelector(".dtpln-close-btn");
                const $table  = document.querySelector("table");
                const apiKey="http://localhost:8000/api/v1";

                function onTableCreate(dietOption,foodOption,dietPlanGender){
                    fetch(`${apiKey}/${dietOption}/${foodOption}/${dietPlanGender}`)
                    .then((res)=> res.json())
                    .then((jsonData)=>jsonData[dietOption + foodOption + dietPlanGender])
                    .then((details)=>{
                        console.log(details);
                        details.forEach(data => {
                            const foods=data.foods;
                            foods.forEach(food=>{
                            const tableRow =document.createElement('tr')
                            tableRow.innerHTML= `
                            <td>${data.time}</td>
                            <td>${food.name}</td>
                            <td>${food.measure}</td>
                            <td>${food.calories}</td>`
                            data.time="";
                            $table.append(tableRow);

                        })
                        })
                        dietOption =  dietOption.charAt(0).toUpperCase()+dietOption.slice(1);
                        dietPlanGender =  dietPlanGender.charAt(0).toUpperCase()+dietPlanGender.slice(1);
                        foodOption =  foodOption.charAt(0).toUpperCase()+foodOption.slice(1);
                        $title.innerHTML  = `<h2> ${dietOption} ${dietPlanGender} ${foodOption} - Diet Plan </h2>`

                        // Close Diet Plan
                        $dtplnCloseBtn.addEventListener("click",()=>{
                          location.href = "../html/diet_plan_index.html"
                        })
                    })

                }
       
  })
  
  })
  })
  })
  }) 
})




