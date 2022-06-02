import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/chris");

const stutudent_schema = new mongoose.Schema({
  student_id: { type: String, required: true, unique: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  academic_year: { type: String, required: true },
});
const Stutudents = mongoose.model("students", stutudent_schema);
export default Stutudents;
