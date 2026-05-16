import {
  insertIntoCourse,
  findAllCourses,
  findCourseById,
  updateCourseById,
  deleteCourseById,
} from "../services/db/course.service.js";


export const getAllCourses = async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const skip = (page-1)*limit;
    
    const courses = await findAllCourses(page,limit,skip);
    res.status(200).json(courses);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal error", error });
  }
};


export const createCourse = async (req, res) => {
  try {
    const courseData = req.body;
    console.log(courseData); 
    const newCourse = await insertIntoCourse(courseData);
    res.status(201).json(newCourse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal error", error });
  }
};

export const getCourse = async (req, res) => {
  try {
    const courseId = req.params.courseid;
    const course = await findCourseById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Sorry! No course found." });
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: "internal error", error });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const id = req.params.courseid;
    const updateData = req.body;
    const updatedCourse = await updateCourseById(id, updateData);
    res.status(200).json(updatedCourse);
  } catch (error) {
    console.log(error);
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const id = req.params.courseid;
    const deletedCourse = await deleteCourseById(id);
    res.status(200).json(deletedCourse);
  } catch (error) {
    res.status(500).json({ message: "internal error", error });
  }
};
