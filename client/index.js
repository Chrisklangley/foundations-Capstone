const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navBarLinks = document.getElementsByClassName("navbar-links")[0];
const petBtn = document.querySelector(".button-81");
const famBtn = document.querySelector(".button-82");
const justForFunBtn = document.querySelector(".button-83");
const petAttendance = document.querySelector(".pet-atendance");
const familyAttendace = document.querySelector(".fam-atendance");
const funAttendace = document.querySelector(".justforfun-atendance");

const forFunBtnJoin = () => {
  axios
    .post("http://localhost:4292/forfunbtn")
    .then(() => {})
    .catch((err) => console.log(err));
  funAttendace.textContent++;
  alert("We'll See you There");
};
axios
  .get("http://localhost:4292/getJFfAtt")
  .then((res) => {
    const JFfAtt = +res.data.length;
    funAttendace.textContent = JFfAtt;
  })
  .catch((err) => {
    console.log(err);
  });

const famBtnJoin = () => {
  axios
    .post("http://localhost:4292/fambtn")
    .then(() => {})
    .catch((err) => console.log(err));
  familyAttendace.textContent++;
  alert("yeahhh");
};

axios
  .get("http://localhost:4292/getfamAtt")
  .then((res) => {
    console.log(res);
    const famAtt = +res.data.length;
    familyAttendace.textContent = famAtt;
  })
  .catch((err) => {
    console.log(err);
  });
axios
  .get("http://localhost:4292/getPetAtt")
  .then((res) => {
    const peopleAtt = +res.data.length;
    petAttendance.textContent = peopleAtt;
  })
  .catch((err) => {
    console.log(err);
  });
const petBtnJoin = () => {
  axios
    .post("http://localhost:4292/petbtn")
    .then(() => {})
    .catch((err) => console.log(err));
  alert("We'll See you There");
  petAttendance.textContent++;
};

if (justForFunBtn) {
  justForFunBtn.addEventListener("click", forFunBtnJoin);
}

if (famBtn) {
  famBtn.addEventListener("click", famBtnJoin);
}
if (petBtn) {
  petBtn.addEventListener("click", petBtnJoin);
}

toggleButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});
