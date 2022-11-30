const path = require("path");
const bcrypt = require("bcrypt");
const { seedDB } = require("./seed.js");
require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");
const { query } = require("express");
const { url } = require("inspector");
const { name } = require("ejs");
const { send } = require("process");

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
module.exports = {
  addToFun: (req, res) => {
    sequelize
      .query(
        `
      INSERT INTO justforfun_attendance(joined)
      VALUES('chris');
      `
      )
      .then(() => {
        res.status(200);
      })
      .catch((err) => console.log(err));
  },

  getFunAtt: (req, res) => {
    sequelize
      .query(
        `
    SELECT *
    FROM  justforfun_attendance
    `
      )
      .then((users) => {
        res.status(200).send(users[0]);
      })
      .catch((err) => console.log(err));
  },

  addToFam: (req, res) => {
    sequelize
      .query(
        `
    INSERT INTO family_attendance(joined)
    VALUES('chris');
    `
      )
      .then(() => {
        res.status(200);
      })
      .catch((err) => console.log(err));
  },

  getFamAtt: (req, res) => {
    sequelize
      .query(
        `
    SELECT *
    FROM family_attendance
    `
      )
      .then((users) => {
        res.status(200).send(users[0]);
      })
      .catch((err) => console.log(err));
  },

  addToPets: (req, res) => {
    sequelize
      .query(
        `
    INSERT INTO pet_attendance(joined)
    VALUES('a new request');
    `
      )
      .then(() => {
        res.status(200);
      })
      .catch((err) => console.log(err));
  },
  getPetAtt: (req, res) => {
    sequelize
      .query(
        `
    SELECT *
    FROM pet_attendance
    `
      )
      .then((users) => {
        res.status(200).send(users[0]);
      })
      .catch((err) => console.log(err));
  },

  signIn: (req, res) => {
    const { email, password } = req.body;

    console.log(email);

    sequelize
      .query(
        `
        SELECT * 
        FROM users
        WHERE (email = '${email}' AND password= '${password}' );
    `
      )
      .then((user) => {
        const userLogin = user[0];

        res.status(200).send(userLogin);
      })
      .catch((err) => console.log(err));
  },

  signUp: (req, res) => {
    const {
      userData: user,
      emailData: email,
      passwordData: password,
    } = req.body;
    // const hashedPassword = await bcrypt.hashSync(password, 10);

    sequelize
      .query(
        `
    INSERT INTO users(name, email, password)
    VALUES('${user}','${email}', '${password}');`
      )
      .then(() => {
        console.log(`user was added!`);
        res.redirect("http://localhost:4292/home");
      })
      .catch((err) => console.log("user was not added", err));
  },
};

// setTimeout(() => {
//     res.status(200).send(sercetInfo);
//   }, 2000)
