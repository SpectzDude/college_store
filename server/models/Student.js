import mongoose from "mongoose"
const studentSChema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    collegeId: {
        type: String,
        required: true
    },
    orderItems: {

    },



})
const Student = mongoose.model('Student', studentSChema)
export default Student;