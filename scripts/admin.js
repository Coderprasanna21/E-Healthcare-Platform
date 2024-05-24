
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
  location.assign("../index.html");
});
//Get html elemnt from setcbus.html
const $name = document.getElementById("findname");
const $email = document.getElementById("findemail");
const $find = document.getElementById("find");
const $resultBody = document.getElementById("result-body");
const $resultHead = document.getElementById("result-head");

//  loader
const $result = document.getElementById("result");
const $loader = document.getElementById("loader");
// no Data
const $noData = document.getElementById("no-data");
// for alert box
const alertBox = document.getElementById("alert");
const alertMessage = document.getElementById("alert-message");
const closeBtn = document.getElementById("close-btn");

document.addEventListener("DOMContentLoaded", tableCreate());

// add click listener to check bottom
$find.addEventListener("click", () => {
  $result.style.display = "none";
  $loader.style.display = "flex";
  const name =$name.value ;
  const email =$email.value ;
  console.log(email,name);

  const apiUrl = `http://localhost:8000/api/v1/admin/userfind`;
  fetch(`${apiUrl}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      name: name,
    }),
  })
    .then((response) => {
      $result.style.display = "flex";
      $loader.style.display = "none";
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.success) {
        const fields = ["S.No", "Name", "Email", "Options"];
        $resultHead.innerHTML = "";
        const headerRow = document.createElement("tr");
        $resultHead.appendChild(headerRow);
        fields.forEach((field) => {
          const heading = document.createElement("th");
          heading.innerHTML = `${field}`;
          $resultHead.appendChild(heading);
        });
        return data.userdetails;
      } else {
        alert(data.message);
        noData(1);
      }
    })
    .then((userDetails) => {
      let no = 0;
      if (userDetails.length == 0) {
        alert("Not avaiable");
        noData(1);
      } else {
        $resultBody.innerHTML=""
        noData(0);
        userDetails.forEach((user) => {
          const result = document.createElement("tr");
          result.innerHTML = `
          <td>${++no}</td>
          <td class="name">${user.name}</td>
          <td class="email">${user.email}</td>
          <td><button type="button" class="btn" id="delete">Delete</button></td>
          `;
          $resultBody.appendChild(result);
          userDelete()
        });
      }
    })
    .catch((err) => {
      if (err == "TypeError: Failed to fetch") {
        $result.style.display = "none";
        $loader.style.display = "none";
        alert(`check your Connection`);
        noData(1);
      }
    });
});
// Table Create
function tableCreate() {
  $result.style.display = "none";
  $loader.style.display = "flex";
  const email = localStorage.getItem("useremail");
  const password = localStorage.getItem("userpassword");

  const apiUrl = `http://localhost:8000/api/v1/admin`;
  fetch(`${apiUrl}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => {
      $result.style.display = "flex";
      $loader.style.display = "none";
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.success) {
        const fields = ["S.No", "Name", "Email", "Options"];
        $resultHead.innerHTML = "";
        const headerRow = document.createElement("tr");
        $resultHead.appendChild(headerRow);
        fields.forEach((field) => {
          const heading = document.createElement("th");
          heading.innerHTML = `${field}`;
          $resultHead.appendChild(heading);
        });
        return data.userdetails;
      } else {
        alert(data.message);
        noData(1);
        setTimeout(() => {
          backToHome();
        }, 1000);
      }
    })
    .then((userDetails) => {
      let no = 0;
      if (userDetails.length == 0) {
        alert("Not avaiable");
        noData(1);
      } else {
        noData(0);
        userDetails.forEach((user) => {
          const result = document.createElement("tr");
          result.innerHTML = `
          <td>${++no}</td>
          <td class="name">${user.name}</td>
          <td class="email">${user.email}</td>
          <td><button type="button" class="delete btn" id="delete">Delete</button></td>
          `;
          $resultBody.appendChild(result);
        });
         userDelete();
      }
    })
    .catch((err) => {
      if (err == "TypeError: Failed to fetch") {
        $result.style.display = "none";
        $loader.style.display = "none";
        alert(`check your Connection`);
        noData(1);
      }
    });
}
// delete user
function userDelete(){
  const $delete = document.querySelectorAll(".delete");
  console.log($delete);
  $delete.forEach((btn)=>{
    btn.addEventListener("click", (e) => {
    $loader.style.display = "flex";
    const email =e.target.closest('tr').querySelector('.email').textContent;
    const deletedUser=e.target.closest('tr');
    deletedUser.remove();
    const apiUrl = `http://localhost:8000/api/v1/admin/userdelete`;
    fetch(`${apiUrl}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email
      }),
    })
    .then((response) => {
      $loader.style.display = "none";
      return response.json();
    })
    .then((data) => {
      console.log(data);
      alert(data.message);
    })
    .catch((err) => {
      if (err) {
        $loader.style.display = "none";
        alert(`check your Connection`);
        noData(1);
      }
    });
  });
})
}

// Custom Alert
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

// loader
function loader(check) {
  if (check == 1) {
    $loader.style.display = "flex";
    $result.style.display = "none";
  } else if (check == 0) {
    $loader.style.display = "none";
    $result.style.display = "flex";
  } else {
    $result.style.display = "none";
    $loader.style.display = "none";
  }
}

// No data
function noData(check) {
  if (check == 1) {
    $noData.style.display = "block";
    $result.style.display = "none";
  } else if (check == 0) {
    $noData.style.display = "none";
    $result.style.display = "block";
  }
  // default
  else {
    $noData.style.display = "block";
    $result.style.display = "none";
  }
}
function backToHome() {
  location.assign("../index.html");
}
