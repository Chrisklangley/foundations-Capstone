const radioBtns = document.getElementsByName("radio");
const finderForm = document.querySelector("form");
const yourPartner = document.getElementById("your-partner");
const interest = document.getElementById("interest");

const findPartner = (e) => {
  e.preventDefault();
  const userChoice = document.querySelector(
    'input[name="radio"]:checked'
  ).value;
  console.log(userChoice);

  const body = {
    userChoice,
  };

  axios
    .post("http://localhost:4292/findfriend", body)
    .then((res) => {
      console.log(res.data);
      let randomIndex = Math.floor(Math.random() * res.data.length);
      let user = res.data[randomIndex];
      user = user.joined;
      yourPartner.innerText = `your new friend for your the event you selected is ${user}! `;
      interest.innerText = `${user} loves Doja Cat and committing tax exasion`;
    })
    .catch((err) => {
      console.log(err);
    });
};

finderForm.addEventListener("submit", findPartner);
