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
  

// Get Html Elements
// SignIn And SignUp Page 
const signup = document.querySelector('.sign-up-btn');
const signin = document.querySelector('.sign-in-btn');
const overlaysignin = document.querySelector('.overlay-sign-in');
const overlaysignup = document.querySelector('.overlay-sign-up');
const formsignin = document.querySelector('.sign-in');
const formsignup = document.querySelector('.sign-up');
const sibtn = document.querySelector('.sibtn');
const subtn = document.querySelector('.subtn');
const overlaycontainer = document.querySelector('.overlay-container');
const small = document.querySelector('small');
const input=document.querySelectorAll('.input')
//signin
const siemail = document.getElementById('siEmail');
const sipassword = document.getElementById('siPassword');
//signup
const suemail = document.getElementById('suEmail');
const uname = document.getElementById('name');
const supassword = document.getElementById('suPassword');
const supassword2 = document.getElementById('suPassword2');
// 
const backToPage= document.getElementById("back-btn");
const apiEndPoint="http://localhost:8000/api/v1";
signup.addEventListener('click', () => {
    formsignup.classList.add('active');
    formsignin.classList.add('active');
    overlaysignin.classList.add('active');
    overlaysignup.classList.add('active');
    overlaycontainer.classList.add('active');
    setDefult(siemail, sipassword);
});
signin.addEventListener('click', () => {
    formsignup.classList.remove('active');
    formsignin.classList.remove('active');
    overlaysignin.classList.remove('active');
    overlaysignup.classList.remove('active');
    overlaycontainer.classList.remove('active');
    setDefult(suemail, uname, supassword, supassword2);
});

sibtn.addEventListener('click', (e) => {
    e.preventDefault();
    sicheckinput();
});

subtn.addEventListener('click', (e) => {
    e.preventDefault();
    sucheckinput();
});
input.forEach(e=>{
    e.addEventListener('focus',(e)=>{
        setInputDefult(e); 
    });
})
/*Form validation*/
//signin
function sicheckinput() {
    const siemailvalue = siemail.value;
    const sipasswordvalue = sipassword.value;
    let email = ""
    let password = ""
    //email
    if (siemailvalue === '') {
        setError(siemail, `Email can't be blank`);
    }
    else if (!isEmail(siemailvalue)) {
        setError(siemail, `Not a valid Email`)
    }
    else {
        email =siemailvalue;
    }
    //password
    if (sipasswordvalue === '') {
        setError(sipassword, `Password can't be blank`);
    }
    else {
        password =sipasswordvalue;
    }
    if(email && password){
        fetch(apiEndPoint+`/userLogin`,{
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          })
          .then((res)=>res.json())
          .then((data)=>{
            const user=data.userdatails;
            if(user){
                console.log(user);
                console.log(data);
                const userName=user.name;
                const userEmail=user.email;
                const userPassword=user.password;
                const userType=data.userType;
                localStorage.setItem("username", userName);
                localStorage.setItem("useremail", userEmail);
                localStorage.setItem("userpassword", userPassword);
                localStorage.setItem("usertype", userType);
                setSuccess(siemail,sipassword)          
                setDefult(siemail,sipassword) 
                alert(data.message);
                if(userType=="admin"){
                    setTimeout(() => {
                        location.assign('./admin.html')
                    }, 2000);
                }
                else{
                    setTimeout(() => {
                        location.assign('../index.html')
                    }, 2000); 
                }         
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
//signup
function sucheckinput() {
    const namevalue = uname.value;
    const suemailvalue = suemail.value;
    const supasswordvalue = supassword.value;
    const supassword2value = supassword2.value;
    let name =""
    let email =""
    let password =""
    //name
    if (namevalue === '') {
        setError(uname, `Name can't be blank`);
    }
    else {
        name=namevalue;
    }
    //email
    if (suemailvalue === '') {
        setError(suemail, `Email can't be blank`);
    }
    else if (!isEmail(suemailvalue)) {
        setError(suemail, `Not a valid Email`);
    }
    else {
        email=suemailvalue;
    }
    //password
    if (supasswordvalue === '') {
        setError(supassword, `Password can't be blank`);
    }
    else if (!isPassword(supasswordvalue)) {
        setError(supassword, 'weak')
    }
    else {
        //
    }
    //password2
    if (supassword2value === '') {
        setError(supassword2, `Password can't be blank`);
    }
    else if (supassword2value != supasswordvalue) {
        setError(supassword2, `Password doesn't match`)
    }
    else {
        password=supassword2value;
    }
    if(name && email && password){
        fetch(apiEndPoint+`/userRegister`,{
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              password,
            }),
          })
          .then((res)=>res.json())
          .then((data)=>{
            const user=data.userdetails;
            if (data.userdetails) {  
                const userName=user.name
                const userEmail=user.email
                localStorage.setItem("username", userName);
                localStorage.setItem("useremail", userEmail);
                alert(data.message)
                setSuccess(uname,suemail,supassword,supassword2);
                setDefult(uname,suemail,supassword,supassword2);
                setTimeout(() => {
                    location.assign('../index.html')
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
function setError(input, message) {
    let formControl = input.parentElement;
    formControl.querySelector('small').innerHTML = message;
    formControl.classList.add('error');
    formControl.classList.remove('success');
}
function setSuccess(input) {
    let formControl = input.parentElement;
    formControl.classList.add('success');
    formControl.classList.remove('error');
    let Success = "Correctly";
    formControl.querySelector('small').innerHTML = Success;
}
function setDefult(...arguments) {
    if(arguments.length > 0){
        for (let i = 0; i < arguments.length; i++) {
            let formControl = arguments[i].parentElement;
            input.value = "";
            formControl.classList.remove('success');
            formControl.classList.remove('error');
        }
    }
}
function setInputDefult(e){
    let formControl = e.target.parentElement;
    formControl.classList.remove('success');
    formControl.classList.remove('error');
}
function isEmail(email) {
    return /[a-z0-9]+@[a-z]+.[a-z]{2,3}/.test(email);
}
function isPassword(password) {
    return /(?=.*[a-z]{1})(?=.*[A-Z]{1})(?=.*[0-9]{1})(?=.*[!@#\$%\^&\*]){1}.{8,12}/.test(password);
}


// Custom Alert
// for alert box
const alertBox = document.getElementById("alert");
const alertMessage = document.getElementById("alert-message");
const closeBtn = document.getElementById("close-btn");

function alert(message) {
    alertBox.classList.add("active");
    alertMessage.innerHTML = message;
    setTimeout(() => {
      alertBox.classList.remove("active");
    }, 6000);
    closeBtn.addEventListener("click", () => {
      alertBox.classList.remove("active");
    });
  }