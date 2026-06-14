// media.controller.js
import cloudinary from "../config/cloudinary.config.js";
import { updateVideoById } from "../services/db/video.service.js";
import path from "path";
import { fileURLToPath } from "url";

// For __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Upload media controller
// export const uploadMedia = async (req, res) => {
//   try {
//     const files = req.files?.video;
//     console.log(files);
//     if (!files || files.lenght === 0) {
//       return res.status(400).json({ error: "No file uploaded" });
//     }

//     const filesArray = Array.isArray(files) ? files : [files];

//     const uploadPromises = filesArray.map((file)=>{
//       const base64String = `data:${file.mimetype};base64,${file.data.toString(
//       "base64"
//       )}`;

//       return cloudinary.uploader.upload(base64String, {
//         resource_type: "video",
//         folder: "videos", 
//       });
//     });

//     const results = await Promise.all(uploadPromises);

//     res.status(200).json({
//       message: "Media uploaded successfully",
//       uploads: results.map((r)=>({
//         url: r.secure_url,
//         public_id:r.public_id,
//         duration:r.duration,
//       }))
//     });
//   } catch (err) {
//     console.error("Cloudinary Upload Error:", err);
//     res.status(500).json({ error: "Upload failed" });
//   }
// };

export const uploadMedia = async (req, res) => {
  try {
    const file = req.files?.video; // single file expected
    if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const base64String = `data:${file.mimetype};base64,${file.data.toString(
      "base64"
    )}`;

    // Upload single file to Cloudinary
    const result = await cloudinary.uploader.upload(base64String, {
      resource_type: "video",
      folder: "videos",
    });

    res.status(200).json({
      message: "Video uploaded successfully",
      upload: {
        secUrl: result.secure_url,
        playUrl: result.playback_url,
        duration: result.duration,
      },
    });
  } catch (err) {
    console.error("Cloudinary Upload Error:", err);
    res.status(500).json({ error: "Upload failed" });
  }
};


export const uploadImage = async (req, res) => {
  try {
    const file = req.files?.image; // single file expected

    if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const base64String = `data:${file.mimetype};base64,${file.data.toString(
      "base64"
    )}`;

    // Upload single file to Cloudinary
    const result = await cloudinary.uploader.upload(base64String, {
      resource_type: "image",
      folder: "images",
    });

    res.status(200).json({
      message: "Video uploaded successfully",
      upload: {
        url: result.secure_url,
        public_id: result.public_id,
        duration: result.duration,
      },
    });
  } catch (err) {
    console.error("Cloudinary Upload Error:", err);
    res.status(500).json({ error: "Upload failed" });
  }
};


export const uploadAssignment = async (req, res) => {
  try {
    const files = req.files.videos;
    if (!files || files.lenght === 0) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const filesArray = Array.isArray(files) ? files : [files];

    const uploadPromises = filesArray.map((file)=>{
      const base64String = `data:${file.mimetype};base64,${file.data.toString(
      "base64"
      )}`;

      return cloudinary.uploader.upload(base64String, {
        resource_type: "auto",
        folder: "assignment", 
      });
    })

    const results = await Promise.all(uploadPromises);

    res.status(200).json({
      message: "Media uploaded successfully",
      uploads: results.map((r)=>({
        url: r.secure_url,
        public_id:r.public_id,
      }))
    });
  } catch (err) {
    console.error("Cloudinary Upload Error:", err);
    res.status(500).json({ error: "Upload failed" });
  }
};





// Delete media controller
export const deleteMedia = async (req, res) => {
  const { publicId } = req.params;
  try {
    const result = await cloudinary.uploader.destroy(publicId, {
      resource_type: "auto", // optional: make it dynamic if needed
    });
    res.status(200).json({
      message: "Media deleted successfully",
      result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete from Cloudinary" });
  }
};

// Get media (video) by publicId
// Get video URL by publicId
export const getMediaByPublicId = async (req, res) => {
  try {
    const { publicId } = req.params; // assuming publicId is sent as a URL param

    const result = await cloudinary.api.resource(publicId, {
      resource_type: "video", // specify video resource type
    });

    res.status(200).json({
      message: "Video details fetched successfully",
      videoDetails: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Can't fetch video details" });
  }
};
export const getVideoUrlByPublicId = async (req, res) => {
  try {
    const { publicId } = req.params;

    const result = await cloudinary.api.resource(publicId, {
      resource_type: "video",
    });

    // Only pick url and secure_url from result
    const videoDetails = {
      url: result.url,
      secure_url: result.secure_url,
    };

    res.status(200).json({
      message: "Video details fetched successfully",
      videoDetails,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Can't fetch video URL" });
  }
};
