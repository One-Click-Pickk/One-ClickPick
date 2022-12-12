const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());

const db = 'mongodb+srv://root:root@one-click-pick.d0yoawz.mongodb.net/test';
mongoose.set('strictQuery', true);

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log('Database temchi jawha ahla jaw ..');
  })
  .catch((err) => console.log(err));

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});
