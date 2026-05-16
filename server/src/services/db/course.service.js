import Course from "../../models/course.model.js";
import Category from "../../models/category.model.js";

export const findAllCourses = async (page,limit,skip) => {
  const courses = await Course.find()
  .skip(skip)
  .limit(limit)
  .sort({ createdAt: -1 });
  const  total = await Course.countDocuments();
  const totalPages = Math.ceil(total / limit);
  return {courses,currentpage: page,totalPages:totalPages,totalCourses:total}
};


export const insertIntoCourse = async (CourseData) => {
  return await Course.create(CourseData);
};

export const findCourseById = async (CourseId) => {
  return await Course.findById(CourseId).populate({
    path:'module',
    populate:{
      path:'video',
      model: 'Video'
    }
  })
  .populate({
    path: 'instructor',
    select: 'user socialLinks',
    populate: {
    path: 'user',
    model: 'User',
    select: 'name'
  }
  });
};

export const updateCourseById = async (CourseId, updateData) => {
  return await Course.findByIdAndUpdate(CourseId, {$set:updateData}, { new: true });
};

export const deleteCourseById = async (CourseId) => {
  return await Course.findByIdAndDelete(CourseId);
};
