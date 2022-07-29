const express = require("express");
const mongoose = require("mongoose");
const app = express();
const MONGO_DB_CONFIG = require("./config/app.config");
const errors = require("./middleware/errors");

mongoose.Promise = global.Promise;
mongoose
  .connect(MONGO_DB_CONFIG, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database connected");
    },
    (error) => {
      console.log(error);
    }
  );

app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api", require("./routes/app.routes"));
app.use(errors.errorHandler);

app.listen(process.env.port || 4000, () => {
  console.log("Ready to go");
});
