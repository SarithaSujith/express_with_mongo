import mongoose from 'mongoose';
const {Schema} = mongoose

const studentSchema = new Schema({
	name: String,
	first_name: String,
	email: String,
});

const student = mongoose.model("student", studentSchema);


export default student;
