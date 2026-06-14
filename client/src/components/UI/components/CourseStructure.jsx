import { useState,useEffect } from 'react'
import AddLesson from './AddLesson';
import AddModule from './AddModule';
import useCourseStore from '../../../store/courseStore';
import { uploadVideo, patchVideo } from '../../../api/courses';
import clsx from "clsx";
function CourseStructure() {
    const[showAddLesson,setShowAddLesson] = useState(false);
    const[showAddModule,setShowAddModule] = useState(false);
    const[isError,setIsError] = useState(false);
    const [progress,setProgress] = useState(0);
    const[lmid,setlmid] = useState('');
    const {modules,videosInfo,removeVideosInfo,deleteModule,removeVideo,dequeue,peek,updateVideo} = useCourseStore();
    console.log(modules);
    useEffect(()=>{
        while(peek()){
            (async () =>{ 
                const{file, _id, module} = dequeue();
                const formData = new FormData();
                formData.append("video", file);
                try{
                    await uploadVideo(formData, (progress)=>{
                    setProgress(progress);
                    updateVideo(module,_id,{progress:progress})
                    console.log(progress);
                    }, async (data)=>{
                        const {upload } = data;
                        if(upload){
                            await patchVideo('4358345', '4358345', _id, upload);
                            updateVideo(module,_id,upload,{isError:false});
                            return;
                        }
                        throw new Error("video not uploaded")
                    });
                } catch(err){
                    updateVideo(module,_id,{isError:true});
                    return null
                }
            })();
        }
        
    },[videosInfo]);
    return (
        <div className=''>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
                            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-medium text-gray-900">Modules</h3>
                                    <button onClick={()=>{setShowAddModule(true)}} type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-button bg-[var(--clr-accent-900)] text-white hover:bg-[var(--clr-accent-1000)] focus:outline-none whitespace-nowrap">
                                        <div className="w-4 h-4 mr-2 flex items-center justify-center">
                                            <i className="ri-add-line"></i>
                                        </div>
                                    Add Module
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4">
                                {Object.entries(videosInfo).map(([mid, module]) => (
                                    <div key={mid} className="module-item  border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="flex   items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
                                            <div className="flex items-center">
                                                <div className="drag-handle w-6 h-6 mr-3 flex items-center justify-center text-gray-400">
                                                    <i className="ri-drag-move-line"></i>
                                                </div>
                                                <h4 className="text-base font-medium capitalize text-gray-900">{module?.title}</h4>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <button type="button" className="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                                    <div className="w-6 h-6 flex items-center justify-center">
                                                        <i className="ri-edit-line"></i>
                                                    </div>
                                                </button>
                                                <button onClick={() => (removeVideosInfo(mid), deleteModule(mid))} type="button" className="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                                    <div className="w-6 h-6 flex items-center justify-center">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </div>
                                                </button>
                                                <button type="button" className="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                                    <div className="w-6 h-6 flex items-center justify-center">
                                                        <i className="ri-arrow-down-s-line"></i>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-white ">
                                            <div className="space-y-3">
                                                {module.videos.map((video) => (
                                                <div key={video._id} className="lesson-item flex items-center justify-between p-3 border border-gray-100 rounded-md">
                                                    <div className="flex items-center">
                                                        <div className="drag-handle w-6 h-6 mr-3 flex items-center justify-center text-gray-400">
                                                            <i className="ri-drag-move-line"></i>
                                                        </div>
                                                        <div className="w-6 h-6 mr-3 flex items-center justify-center text-primary bg-indigo-50 rounded-full">
                                                            <i className="ri-video-line"></i>
                                                        </div>
                                                        <span className="text-sm font-medium text-gray-800">{video?.title}</span>
                                                    </div>
                                                    
                                                    <div className="flex items-center space-x-2">
                                                        <div className="w-20">
                                                            <div className="relative w-full h-4 bg-gray-100 rounded-full overflow-hidden">
                                                                <div className={clsx( "h-full transition-all duration-300", video?.isError ? "bg-red-300" : "bg-green-200" )} style={{ width: `${video.progress}%` }} ></div>
                                                                <span className="absolute  inset-0 flex items-center justify-center text-xs font-semibold text-green-800">
                                                                {video?.progress!==100?`uploading`:video?.url?`success`:video?.isError?`error`:`processing`}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <span className="text-xs text-gray-500">{video?.duration?`${video.duration}`:`_____`}</span>
                                                        <button type="button" className="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                                            <div className="w-5 h-5 flex items-center justify-center">
                                                                <i className="ri-edit-line"></i>
                                                            </div>
                                                        </button>
                                                        <button onClick={()=>removeVideo(mid,video._id)}  type="button" className="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                                            <div className="w-5 h-5 flex items-center justify-center">
                                                                <i className="ri-delete-bin-line"></i>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                                ))} 
                                                <button onClick={()=>{setShowAddLesson(true);setlmid(mid)}} type="button" className="flex items-center justify-center w-full p-3 border border-dashed border-gray-300 rounded-md text-sm font-medium text-primary hover:bg-indigo-50 focus:outline-none">
                                                    <div className="w-5 h-5 mr-2 flex items-center justify-center">
                                                        <i className="ri-add-line"></i>
                                                    </div>
                                                    Add Lesson
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </div>
            </div>
            {showAddLesson && <AddLesson onClose={()=>{setShowAddLesson(false)}} lmid={lmid}/>}
            {showAddModule && <AddModule onClose={()=>{setShowAddModule(false)}}/>}
        </div>
    )
}

export default CourseStructure;