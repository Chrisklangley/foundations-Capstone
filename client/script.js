const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");
const userNameData = document.getElementById("user-signUp");
const emailSignUpData = document.getElementById("email-signUp");
const passwordSignUpData = document.getElementById("password-signUp");
const emailSignIn = document.getElementById("email-signIn");
const passwordSignIn = document.getElementById("password-signIn");

const signIn = (event) => {
  event.preventDefault();
  const email = emailSignIn.value;
  const password = passwordSignIn.value;

  const body = {
    email,
    password,
  };
  axios
    .post("http://localhost:4292/api/signin", body)
    .then((res) => {
      const [{ email: dbEmail, password: dbPassword }] = res.data;
      if (dbEmail === email && dbPassword === password) {
        window.location.replace("/Home");
      } else {
        alert("email or password is incorrect");
      }
    })
    .catch((err) => console.log(err));
};

const signUp = (event) => {
  event.preventDefault();
  const userData = userNameData.value;
  const emailData = emailSignUpData.value;
  const passwordData = passwordSignUpData.value;

  const body = {
    userData,
    emailData,
    passwordData,
  };

  axios
    .post("http://localhost:4292/api/signup", body)
    .then((res) => {
      alert("User regestered :)");
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(userData, emailData, passwordData);
};

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", signUp);
secondForm.addEventListener("submit", signIn);
