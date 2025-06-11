const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModel = require("./models/todo");
const UserModel = require("./models/user");

const app = express();
app.use(cors());
app.use(express.json());

const Db_Path = "mongodb+srv://yernikumar1912:ywy5dSzztucM8WUv@cluster0.etu2sod.mongodb.net/todoApp?retryWrites=true&w=majority&tls=true";

mongoose.connect(Db_Path);

app.listen(3001, () => {
  console.log("Server Is Running");
});

app.post("/addtask", (req, res) => {
  const { task } = req.body;
  TodoModel.create({ task: task })
    .then((result) => res.json("task added"))
    .catch((err) => res.json(err));
});

app.get("/", (req, res) => {
  TodoModel.find({})
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { done } = req.body; // take done value from frontend

  TodoModel.findByIdAndUpdate(id, { done: done })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  TodoModel.findByIdAndDelete(id)
    .then((result) => res.json("Task deleted"))
    .catch((err) => res.json(err));
});

// app.post("/adduser", (req, res) => {
//   const { name } = req.body;
//   UserModel.create({ name: name })
//     .then((result) => res.json(result))
//     .catch((err) => res.json(err));
// });

// app.get("/getusers", (req, res) => {
//   UserModel.find({})
//     .then((users) => res.json(users))
//     .catch((err) => res.json(err));
// });
