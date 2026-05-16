// Importing Schema and model from mongoose to define the schema for the Course model
import { Schema, model, } from "mongoose";


// Defining the schema structure for the Course collection

const courseSchema = new Schema({
  courseInfo: {
    title:{type: String},
    description: {type : String},
    category: {type: String},
    skillLevel: { type: String, enum: ['beginner', 'intermediate', 'advanced'], default: 'beginner' },
    instructor: { type: Schema.Types.ObjectId, ref: 'Instructor' },
  },
  modules: [{ type: Schema.Types.ObjectId, ref: 'Module'},],
  pricing: {
    price: Number,
    currency: { type: String, default: 'INR' },
    discount:[{dtype:{type:String},amount:{type:Number},valadity:{type:Date}}],
    isFree: { type: Boolean, default: false },
    saleEndsAt: Date
  },
  lifecycle: {
    visibility: { type: String, enum: ['private','public','unlisted'], default: 'public' },
    status: { type: String, enum: ['draft', 'published'], default: 'draft' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  },
  metadata: {
     metaDesc:String,
     keyword:[String],
     slug:String,
     thumbnailUrl:String,
     previewVideoUrl:String
  },
  metrics: {
    enrollments: { type: Number, default: 0 },
    avgRating: { type: Number, default: 0 },
    ratingCount: { type: Number, default: 0 },
    totalVideos: { type: Number, default: 0 },
    totalQuizzes: { type: Number, default: 0 },
    readTimeMinutes: { type: Number, default: 0 },
  }
},
{timestamps: true}
);

/*For Now I am commenting it 
// Middleware to clean up related modules and videos before deleting a course
courseSchema.pre("findOneAndDelete", async function (next) {
  try {
    // Get the course ID from the query
    const courseId = this.getQuery()._id;
    // Find all modules related to this course
    const modules = await model("Module").find({ course: courseId });
    // Extract the IDs of those modules
    const modulesIds = modules.map((m) => m._id);
    // Delete all videos related to the found modules
    await model("Video").deleteMany({ module: { $in: modulesIds } });
    // Delete all modules related to the course
    await model("Module").deleteMany({ course: courseId });
    // Proceed to next middleware or operation
    next();
  } catch (error) {
    // Pass any errors to the next middleware
    next(error);
  }
});

*/

// Creating the Course model based on the schema
const Course = model("Course", courseSchema);

// Exporting the Course model for use in other parts of the application
export default Course;




