const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/ECO_Transport", {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on("error", function() {
  console.log("CONNECTION FAILED");
});
db.once("open", function() {
  console.log("CONNECTION SUCCESS");
  console.log(
    "============================================================================================="
  );
});
// _____________________________________________________________________________________________________________

// Users Schema

const usersSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phone: Number,
  address: String,
  isAdmin: Boolean
});

const Users = mongoose.model("users", usersSchema);

// Bicycles Schema

const bicyclesSchema = new mongoose.Schema({
  model: String,
  color: String,
  motorPower: Number,
  price: Number,
  quantuty: Number
});

const Bikes = mongoose.model("e_bikes", bicyclesSchema);

//________________________________________________________________________________

const register = (cb, obj) => {
  console.log(obj);
  /// make sure if you recived email inside your object....
  
  Users.create(obj, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      cb(doc);
    }
  });

};
const vaidationforEmail = (email, cb )=>{
  const validation = User.findOne({'email' : email})
  cb( validation == null ? false : true)
}
const login = (cb, obj) => {
  let email = obj.email;
  let password = obj.password;
  // admin@gmail.com ??? 

  Users.findOne({ email, password }, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
    
      doc['admin'] = true;
      cb(doc);
    }
  });
};

const addBike = (cb, obj) => {
  Bikes.create(obj, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      cb(doc);
    }
  });
};

const getUser = (cb, obj) => {
  let _id = obj
  Users.findOne({ _id }, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      cb(doc);
    }
  });
};

module.exports = {
  register,
  addBike,
  login,
  getUser,
};
