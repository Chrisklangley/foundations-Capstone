require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  seedDB: (req, res) => {
    sequelize
      .query(
        ` 
        DROP TABLE IF EXISTS justForFun_attendance;
        DROP TABLE IF EXISTS family_attendance;
        DROP TABLE IF EXISTS pet_attendance;
        DROP TABLE IF EXISTS review;
         DROP TABLE IF EXISTS users;
         DROP TABLE IF EXISTS events;
        
        CREATE TABLE users(
            user_id SERIAL PRIMARY KEY,
            name VARCHAR(400) NOT NULL,
            email VARCHAR(400) NOT NULL,
            password VARCHAR(400) NOT NULL
        );
        CREATE TABLE events(
            event_id SERIAL PRIMARY KEY,
            event_name VARCHAR(60),
            location VARCHAR(100),
            event_type VARCHAR(60)
        );

        CREATE TABLE review(
            review_id SERIAL PRIMARY KEY,
            user_id INT REFERENCES users(user_id),
            event_id INT REFERENCES events(event_id),
            rating INT

        );

        CREATE TABLE pet_attendance(
          joined VARCHAR(60)
          
        );
       
        CREATE TABLE family_attendance(

          joined VARCHAR(60)

        );

        CREATE TABLE justForFun_attendance(
          joined VARCHAR(60)
        );




        INSERT INTO users(name, email, password)
        VALUES('Beyoncé', 'Beyoncé@gmail.com', 'écnoyeb'),
        ('Three-kids-in-a-trench-coat-prending-to-be-an-adult', 'imanadult@gmail.com', 'ilovecake'),
        ('A-Black-bear', 'wheresthehoney@aol.com', 'theRightToMyArms');

        INSERT INTO events(event_name, location, event_type)
        VALUES('Dog Brunch', '220 Rose Ave, Venice, CA 90291', 'pets'),
        ('Ice at Santa Monica', '1324 5th St Santa Monica, CA 90401', 'family');

        INSERT INTO pet_attendance(joined)
        VALUES('AMY'),
        ('John'),
        ('Kate'),
        ('Mckenna'),
        ('Sam'),
        ('Nick'),
        ('Bobby'),
        ('Frank'),
        ('Kenny');

        INSERT INTO family_attendance(joined)
        VALUES('AMY'),
        ('John'),
        ('Kate'),
        ('Mckenna'),
        ('Sam'),
        ('Nick'),
        ('Bobby'),
        ('Frank'),
        ('Kenny');


        INSERT INTO justForFun_attendance(joined)
        VALUES('AMY'),
        ('John'),
        ('Kate'),
        ('Mckenna'),
        ('Sam'),
        ('Nick'),
        ('Bobby'),
        ('Frank'),
        ('Kenny');




    
      `
      )
      .then(() => {
        console.log("DB seeded!");
        res.sendStatus(200);
      })
      .catch((err) => console.log("error seeding DB", err));
  },
};
