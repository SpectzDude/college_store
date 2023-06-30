import bcrypt from "bcrypt"
import Student from "../../models/Student.js";

export const getProfile = (async (req, res) => {
    const user = req.user;
    try {
        const userExists = await Student.findOne({ _id: user._id })
        if (!userExists) return res.status(404).json({ message: "user doesn't exists" })
        const studentExists = await Student.findOne({ _id: user._id })
        let result1 = _.omit(userExists, ["password"]);
        res.status(200).json({ result1 })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
})

export const login = async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    try {
        const userExists = await User.findOne({ email })
        console.log(userExists)
        if (!userExists) return res.status(404).json({ message: "user dosen't exists" })
        const isPassword = await bcrypt.compare(password, userExists.password)
        if (!isPassword) return res.status(403).json({ message: "invalid credentials" })
        console.log(userExists)

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}