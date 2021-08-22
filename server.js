var PORT = process.env.PORT || 5000;
const http = require("http");

const express = require("express");

const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const user = require("./routes/userRoutes");

const cors = require("cors");

const server = http.Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const corsOpts = {
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));

io.on("connection", (client) => {
  console.log("User connected " + client.id);
  client.on("join", (data) => {
    console.log(data);
  });
  client.on("pythonQuiz", (data) => {
    console.log(data);
  });
});

try {
  app.use(bodyParser.json());
} catch (error) {
  console.log(error);
}

app.use("/api/user", user);

mongoose
  .connect(
    "mongodb+srv://test_user_54:jfPAPJK37A3x7PU@cluster0.hnxum.mongodb.net/quizdb?retryWrites=true&w=majority"
  )
  .then(() => {
    server.listen(PORT, function () {
      console.log("Server started on port " + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
