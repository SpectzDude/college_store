import mongoose from "mongoose"
const userSChema = mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    phoneNumber: String,
    isAdmin: {
        type: Boolean,
        default: false,
        required: true
    },
    status: {
        type: Boolean,
        default: true,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: new Date()
    }

})
const User = mongoose.model('User', userSChema)
export default User;