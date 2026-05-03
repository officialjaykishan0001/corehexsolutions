const express = require("express");
require("dotenv").config({});
const cookieParser = require("cookie-parser");

const emailRoutes = require("./routes/email.routes");


const app = express();
const port = 3000 || process.env.PORT;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/email', emailRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Api is working",
  });
});



app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});