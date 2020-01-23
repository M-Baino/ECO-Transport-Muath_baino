const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const DB = require("./database");
const app = express();
app.use(fileUpload());
app.use(cors());
app.use((request, response, next) => {
  response.header(`Access-Control-Allow-Origin`, `*`);
  response.header(
    `Access-Control-Allow-Headers`,
    `Origin, X-Requested-with, Content-Type, Accept`
  );
  next();
});
app.use(express.json());

app.get("/", (req, res) => res.json("test working"));

//SERVER AND DATABASE RESPONSE AND BEHAVIOR

// app.get("/getTransfers", (req, res) => {
//   DB.getTransfers(transfers => res.json(transfers))
// })

app.post("/register", (req, res) => {
  DB.register(user => {
    res.json(user);
  }, req.body);
});

app.post("/addBike", (req, res) => {
  DB.addBike(bike => {
    res.json(bike);
  }, req.body);
});

app.post("/login", (req, res) => {
  DB.login(user => {
    res.json(user);
  }, req.body);
});

app.post("/getUser", (req, res) => {
  DB.getUser(user => {
    res.json(user);
  }, req.body);
});

app.post("/upload", (req, res) => {
  if(req.files === null){
    res.status(400).json({msg: 'No file uploaded!'});
  }
  const file = req.files.file;
  file.mv(`${__dirname}/upload/${file.name}`, err => {
    if(err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({fileName: file.name, filePath: `/upload/${file.name}`})
  });
})

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
