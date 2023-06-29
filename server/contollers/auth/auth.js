import mongoose from "mongoose"
import bcrypt from "bcrypt"
import User from "../../models/User";
export const login = async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    try {
        const userExists = await User.findOne({ email })
        console.log(userExists)
        if (!userExists) return res.status(404).json({ message: "User doesn't exists" })
        const isPassword = await bcrypt.compare(password, userExists.password)
        if (!isPassword) return res.status(403).json({ message: "invalid credentials" })
        const token = jss
        res.status(200).json({ token })

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}