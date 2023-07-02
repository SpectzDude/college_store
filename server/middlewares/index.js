/* eslint-disable indent */
import jwt from "jsonwebtoken";
import { ERROR_MSG, ERROR_CODE } from "../config/messages.js";
import User from "../models/User.js";

const config = process.env;
// TODO :- check JWT_SECRET
// TODO :- bearer token
export const verifyToken = async (req, res, next) => {
    try {
        let token = req.query.token || req.headers.authorization;
        if (!token) return res.status(401).json({ message: "Token Required for accessing this resource", errorCode: ERROR_CODE.TOKEN_REQUIRED });
        if (!token.length) return res.status(403).json({ message: "Invalid token", errorCode: ERROR_CODE.INVALID_TOKEN });
        token = token.split(" ")[1];
        const decodedToken = jwt.verify(token, "secretKey");
        const { userId = "" } = decodedToken;
        const user = await User.findOne({ _id: userId });
        if (!user) return res.status(404).json(ERROR_MSG.USER_NOT);
        if (!user.status) return res.status(401).json({ message: "User blocked from accessing resources" });
        req.userId = userId;
        next();
    } catch (error) {
        let code = ERROR_CODE.INVALID_TOKEN;
        if (error.message === "jwt expired") {
            code = ERROR_CODE.EXPIRED;
        }
        res.status(401).json({ message: error.message, errorCode: code });
    }
};