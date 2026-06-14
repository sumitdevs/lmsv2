import { axiosClient } from "./axiosClient";

export const fetchCourses = async ({page,limit})=>{
    const res = await axiosClient.get('/courses',{params: {page,limit}});
    return res.data;
}

export const fetchCourseByID = async (id)=>{
    const res = await axiosClient.get(`/courses/${id}`);
    return res.data;
}

export const postCourse = async (data)=>{
    const res = await axiosClient.post('/courses',data);
    return res.data;
}

export const patchCourse = async (ID, data)=>{
    const res = await axiosClient.patch(`/courses/${ID}`, data);
    return res;
}

export const fetchModules = async (ID)=>{
    const res = await axiosClient.get(`courses/${ID}/modules`);
}

export const postModule = async (data,ID)=>{
    const res = await axiosClient.post(`courses/${ID}/modules`,data);
    return res.data;
}

export const patchModule = async (data,cid,mid)=>{
    const res = await axiosClient.patch(`courses/${cid}/modules/${mid}`,data);
}

export const fetchVideos = async (cid, mid)=>{
    const res = await axiosClient.get(`courses/${cid}/modules/${mid}/videos`);
}

export const postVideos = async (data,cid,mid)=>{
    const res= await axiosClient.post(`courses/${cid}/modules/${mid}/videos`, data);
    return res.data;
}

export const uploadVideo = async (data,onProgress,onComplete)=>{
    const res = await axiosClient.post('/video/upload',data, {onUploadProgress: (event) => { const progress = Math.round((event.loaded * 100) / event.total); if (onProgress) onProgress(progress); },});
    onComplete(res.data);
}

export const uploadImage = async (data,onProgress,onUpload)=>{
    const res = await axiosClient.post('/video/upload/image',data,{onUploadProgress: (event) => { const progress = Math.round((event.loaded * 100) / event.total); if (onProgress) onProgress(progress); },});
    onUpload(res.data);
}

export const patchVideo = async (cid,mid,vid, data)=>{
    const res = await axiosClient.put(`courses/${cid}/modules/${mid}/videos/${vid}`, data);
    return res.data;
}


export const fetchCategory = async () =>{
    const res = await axiosClient.get('/category');
    return res.data;
}

