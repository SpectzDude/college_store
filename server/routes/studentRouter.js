import express from 'express';
import { login } from "../contollers/student/student.js"
const router = express.Router();

/* GET home page. */
router.get('/login', function (req, res, next) {
  res.send("employee");
});
router.post('/login', login);
export default router;
