const express = require("express");
const app = express();
//replace with .env port at some point
const PORT = 5001;
const path = require("path");

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

//Routes in router folder
app.use("/api/members", require("./routes/members"));

app.listen(PORT, () => console.log(`Server Listening on Port: ${PORT}`));
