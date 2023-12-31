import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors'
import employeeRouter from './routes/studentRouter.js';
import authRouter from './routes/authRouter.js';
import adminRouter from "./routes/admin.js"
import studentRouter from './routes/studentRouter.js';
import mongoose from "mongoose"
import dotenv from "dotenv";
import { verifyToken } from './middlewares/index.js';
import bodyParser from 'body-parser';
dotenv.config()
const app = express();
const CONNECTION_URL = process.env.MONGODB_CONNECTION || "mongodb://localhost:27017/college_store";

const port = 4000;

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.raw({ type: 'application/octet-stream', limit: '10mb' }));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/auth', authRouter);
app.use('/student', verifyToken, studentRouter);
app.use('/admin', verifyToken, adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ message: err.message });
});
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // Check if the database already exists
    const db = mongoose.connection.db;
    db.listCollections({ name: 'orders' }).toArray((err, collections) => {
      if (err) {
        console.log('Error checking database existence:', err);
        return;
      }

      if (collections.length > 0) {
        console.log('DB Connected');
        app.listen(port, () => console.log("Server running on port " + port));
      }
    });
  })
  .catch((err) => console.log("Error connecting DB \n" + err.message));

