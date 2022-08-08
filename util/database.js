require('dotenv').config();
const password = process.env.OLD_PASS;

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    `mongodb+srv://RSchleck:${password}@cluster0.dyucjhi.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(result => {
      console.log('Connected!')
      callback(client);
    })
    .catch(err => console.log(err));
};

module.exports = mongoConnect;