const radioBtns = document.getElementsByName("radio");
const finderForm = document.querySelector("form");

const findPartner = (e) => {
  e.preventDefault();
  const userChoice = document.querySelector(
    'input[name="radio"]:checked'
  ).value;
  console.log(userChoice);

  const body = {
    userChoice,
  };

  axios.post("http://localhost:4292/findfriend", body).then().catch();
};

finderForm.addEventListener("submit", findPartner);
