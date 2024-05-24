// user profile dashboard
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

// Membership Apllications shows and close 
const joinBtn  = document.querySelectorAll(".join-btn");
const clientDetailsContainer = document.querySelector(".client-details-container");
joinBtn.forEach((e)=>{
e.addEventListener("click",()=>{
  clientDetailsContainer.style.display="block";
  const closeBtn = clientDetailsContainer.querySelector("#close-btn");
    closeBtn.addEventListener("click",()=>{
      clientDetailsContainer.style.display="none";
          })
        })
      })
       
// Alert Box
const alertBox = document.querySelector("#alert-box");
const  showAlert = ()=>{
    alertBox.classList.add("actives");
    setTimeout(function(){
    alertBox.classList.remove("actives");
    },1500)
    closeBtn.addEventListener("click",()=>{
    alertBox.classList.remove("actives");
    })
  }
 
const emailAlertBox  = document.querySelector("#email-alert-box");  
const  emailAlert = ()=>{
    emailAlertBox.classList.add("actives");
    setTimeout(function(){
        emailAlertBox.classList.remove("actives");
    },1500)
    closeBtn.addEventListener("click",()=>{
        emailAlertBox.classList.remove("actives");
    })
  }

const phoneNoAlertBox  = document.querySelector("#phoneno-alert-box");  
const  phoneAlert = ()=>{
    phoneNoAlertBox.classList.add("actives");
    setTimeout(function(){
        phoneNoAlertBox.classList.remove("actives");
    },1500)
    closeBtn.addEventListener("click",()=>{
        phoneNoAlertBox.classList.remove("actives");
    })
  }
// Membership form Validation

const clientForm = document.querySelector("#client-form");

// Add event listener for form submission
clientForm.addEventListener('submit', submitForm);

function sendMail(clientEmail,clientName,trainersList,trainersContactsList){
  const RandomTrainer =  Math.floor(Math.random()*trainersList.length);
  const trainer  = trainersList[RandomTrainer];
  const RandomContacts = Math.floor(Math.random()*trainersContactsList.length);
  const tContactNumber = trainersContactsList[RandomContacts];

  var clientEmail = email.value;
  var name = document.getElementById('name');
  var clientName  = name.value;
  var body = ` <b> Dear ${clientName}</b>, <br>

            We are  hope this email finds you well.
            We are pleased to inform you that your booking for our Personal Trainer Membership has been successfully processed. We are thrilled to welcome you to our fitness community and excited to embark on this journey with you to achieve your health and wellness goals.
            As a member, you will have access to our state-of-the-art facilities and personalized training sessions tailored to your individual needs. <br> <br>
            <b> Trainers Details:  <br>
            Name : ${trainer}, <br>
            Contact Number : ${tContactNumber}  </b> <br>  <br>
            Our Trainer will be in touch within 24 hours  <br> <br>
            Our team of experienced trainers is dedicated to providing you with the guidance and support you need to reach your fitness aspirations.
            Should you have any questions or need further assistance, please do not hesitate to reach out to us. We are here to help you every step of the way. <br>
            <center>  Thank you for choosing HealthAdvisor for your fitness journey. We look forward to seeing you at your first session! </center>  <br>
            Warm regards, <br>
            fitness trainer,
            from Health Advisor
            `
          Email.send({
      SecureToken: "4e2c2bba-4aae-4072-991c-3b6e180374da",
      To : clientEmail,
      From : "healthadvisorypro@gmail.com",
      Subject : "Confirmation of Personal Trainer Membership",
      Body : body
  }).then(
    message => alert(message)
  );
        }


    // Function to handle form submission
    function submitForm(event) {
        event.preventDefault(); // Prevent form submission

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var age = document.getElementById('age').value;
        var memPlan = document.querySelector("input[name='mem-plans']:checked").value;
        var genderSelect = document.querySelector("#gender").value;
        const apiEndPoint="http://localhost:8000/api/v1";

        console.log(name)
        console.log(email)
        console.log(phone);
        console.log(age);
        console.log(memPlan);
        console.log(genderSelect);

        // Validation checks
        if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || age.trim() === '') {
            showAlert();
        } 
        else if (!validateEmail(email)) {
            emailAlert();
        } 
        else if (!validatePhone(phone)) {
            phoneAlert();
        } 
        else if(genderSelect=="male") {
            var trainersList = ["Michael","David","John","James","Robert","William","Christopher","Daniel","Matthew","Joseph"];
            var trainersContactsList  = [9876543210,8765432109,7654321098,9543210987,9432109876,9321098765,9210987654,9109876543,9098765432,9876543210];
            sendMail(email,name,trainersList,trainersContactsList); // If all validations pass, send the email
            setTimeout(function(){
                location.href = "../html/membership_confirm.html";
            },1000);
        }
        else {
          var trainersList = ["Aaradhya","Kiara","Ishani","Anaya","Amara","Tara","Riya","Nisha","Zara","Sia"];
          var trainersContactsList  = [9876543210,8765432109,7654321098,9543210987,9432109876,9321098765,9210987654,9109876543,9098765432,9876543210];
          sendMail(email,name,trainersList,trainersContactsList); // If all validations pass, send the email
          setTimeout(function(){
              location.href = "../html/membership_confirm.html";
          },1000);
      }
        if(name && email && phone && memPlan){
            fetch(apiEndPoint+`/ClientDetails`,{
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({
                  name,
                  email,
                  phone,
                  memPlan,
                }),
              })
              .then((res)=>res.json())
              .then((data)=>{
                const user=data.clientdetails;
                if (data.clientdetails) {  
                    setTimeout(() => {
                        location.assign('../html/membership_confirm.html')
                    }, 2000);
                }
                else{
                    alert(data.message);
                }
              })
              .catch((error)=>{
                console.error(error);
              })
        }
        else{
            alert("input empty or invaild");
        }
    }

    // Function to validate email
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // Function to validate phone number
    function validatePhone(phone) {
        var re = /^\d{10}$/;
        return re.test(phone);
    }
