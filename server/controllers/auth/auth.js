import bcrypt from "bcrypt"
import User from "../../models/User.js";
import { ERROR_MSG } from "../../config/messages.js";
import _ from "lodash";
import jwt from "jsonwebtoken";
import Student from "../../models/Student.js";
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ message: "Invalid Credential" });
        const id = user._id.toString();
        const isPassword = await bcrypt.compare(password, user.password);
        if (!isPassword) return res.status(401).json({ messages: "Invalid Credential" });
        console.log(" userId: id", id)
        const token = jwt.sign({ userId: id }, "secretKey", { expiresIn: "2h" });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ errorTitle: ERROR_MSG.SOMETHING_WENT, message: error.message });
    }
};

export const register = async (req, res) => {
    // const { error = {}, value = {} } = registerValidator(req.body);
    // if (error) return res.status(400).json({ message: error.details });
    const { email, password, collegeId } = req.body;
    const credentials = _.cloneDeep(req.body);
    const profileDetails = _.omit(credentials, ["password", "confirmPassword"]);
    try {
        if (!password) {
            return res.status(400).json({ message: "password field required" });
        }
        if (!collegeId) {
            return res.status(400).json({ message: "collegeId field required" });
        }
        if (!email) {
            return res.status(400).json({ message: "email field required" });
        }
        const isExists = await User.findOne({ email });
        if (isExists) return res.status(409).json({ message: ERROR_MSG.ALREADY_EXISTS });
        const hashedPassword = await bcrypt.hash(password, 1);
        const result = await User.create({ ...profileDetails, password: hashedPassword });
        const student = await Student.create({ user: result._id, collegeId: collegeId });
        if (!result) return res.status(400).json({ message: ERROR_MSG.PROFILE_NOT });
        const token = jwt.sign({ userId: result._id, email }, "secretKey", { expiresIn: "2h" });
        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ errorTitle: ERROR_MSG.SOMETHING_WENT, message: error.message });
    }
};