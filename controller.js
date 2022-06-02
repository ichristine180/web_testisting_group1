import Stutudents from "./students.js";

export const create = async (req, res) => {
  const { first_name, last_name, age, gender, academic_year, student_id } =
    req.body;

  if (
    !first_name ||
    !last_name ||
    !age ||
    !gender ||
    !academic_year ||
    !student_id
  )
    return res.status(401).json({
      error: true,
      message: "All fields are required",
      result: [],
    });
  try {
    const student = await Stutudents.create({
      first_name,
      last_name,
      age,
      gender,
      academic_year,
      student_id,
    });
    return res.status(200).json({
      error: false,
      message: "student created successfully!",
      result: {
        "created student": student,
      },
    });
  } catch (error) {
    return res.status(401).json({
      error: true,
      message: error.message,
      result: [],
    });
  }
};

export const getAll = async(req,res)=>{
    try {
        const list = await Stutudents.find()
        return res.status(200).json({
            error:false,
            message:'success',
            result:list
        })
    } catch (error) {
        return res.status(401).json({
            error: true,
            message: error.message,
            result: [],
          });
    }
}

export const getStudentById = async(req,res)=>{
    try {
        const student = await Stutudents.findOne({student_id:req.params.id})
        return res.status(200).json({
            error:false,
            message:student?'success':"student not found!",
            result:student
        })
    } catch (error) {
        return res.status(401).json({
            error: true,
            message: error.message,
            result: [],
          });
    }
}