import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/index.js';

const main = async () => {
  const app = express();
  app.use(express.static('public'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.set('view engine', 'ejs');

  await mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qlg2b.mongodb.net/justorder?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((result) => {
      console.log('Connected to db');
    })
    .catch((err) => {
      console.log(err.message);
    });

  app.use('/', routes);

  app.listen(process.env.PORT || 3000, function () {
    console.log('Server started');
  });
};

main().catch((err) => {
  console.log(err);
});
