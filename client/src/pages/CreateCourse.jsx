import CourseInfo from '../components/UI/components/CourseInfo';
import CourseStructure from '../components/UI/components/CourseStructure';
import QuizAssignment from '../components/UI/components/QuizAssignment';
import CoursePublish from '../components/UI/components/CoursePublish';
import SuccessPublished from '../components/UI/components/SuccessPublished';
import { useEffect, useState } from 'react';
import toast from "react-hot-toast";
import {useNavigate } from "react-router-dom";
import clsx from 'clsx';
import useCourseStore from '../store/courseStore';
import useAuthStore from '../store/authStore';

function CreateCourse() {
    const [btnTitle,setBtnTitle] = useState({});
    const [CreateCourseComponent, setCreateCourseComponent] = useState(()=>CourseInfo);
    const {courseInfo,resetCourseStore,updateLifecycle,updateCourse,isCourseCreated,componentCount,setComponentCount, createCourse,updateCourseInfo } = useCourseStore();
    const {user} = useAuthStore();
    const navigate = useNavigate();
    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(isCourseCreated){
            if(componentCount===4){
                updateLifecycle({status:'published'});
                if(!await updateCourse()){
                    toast.success("course published");
                } else{
                    toast.error("Failed to publish course");
                    return
                }
            }
         increaseComponentCount();
        } else {
            const res = await createCourse(courseInfo);
            console.log(res);
            res && increaseComponentCount();
        }
    }

    const handlePrevBtn = ()=>{
        decreaseComponentCount();
        if(componentCount===1){
            resetCourseStore();
            if(isCourseCreated){
                updateCourse();
                toast.success("save to draft");
            }
            navigate("/dashboard");
        }
    }
    const handleSaveProgress = async ()=>{
        if( isCourseCreated && btnTitle?.nxt ){
            if(!await updateCourse())
            toast.success("progress saved");
            else
            toast.error('updation failed');
            return
        } 
        if(!btnTitle?.nxt){
            navigate("/mycourses");
        }
    }
    useEffect(()=>{
        return ()=>{
            resetCourseStore();
        }
    },[]);
    useEffect(()=>{
        switch(componentCount){
            case 1:
                setCreateCourseComponent(()=>CourseInfo);
                setBtnTitle({prev:'Back to Dashboard',this:'Course Information', nxt:'Continue to Module & Videos'});
                !isCourseCreated && updateCourseInfo({instructor:user.userId});
                break;
            case 2:
                setCreateCourseComponent(()=>CourseStructure);
                setBtnTitle({prev:'Back to Course Info',this:'Module & Videos',nxt:'Continue to Quiz & Assignment'});
                break;
            case 3: 
                setCreateCourseComponent(()=>QuizAssignment);
                setBtnTitle({prev:'Back to Module & Videos',this:'Quiz & Assignment',nxt:'Continue to Publish'});
                break;
            case 4:
                setCreateCourseComponent(()=>CoursePublish);
                setBtnTitle({prev:'Back to Quiz & Assignment',this:'Publish', nxt:'Publish'});
                break;
            case 5:
                setCreateCourseComponent(()=>SuccessPublished);
                setBtnTitle({prev:'',this:'Published successfully', nxt:''});
                break;
                
        }
    },[componentCount]);


    const increaseComponentCount = ()=>{
        if(componentCount<=4) setComponentCount(prev=>prev+1);
    }

    const decreaseComponentCount = ()=>{
        if(componentCount>1) setComponentCount(prev=>prev-1);
    }

  return (
    <div className=' bg-white text-gray-800'>
        <div className="bg-white sticky top-4 z-10  ">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between py-4">
                    <div className={clsx('w-1/4 progress-step',componentCount<=1? componentCount===1 &&'active':'completed')}>
                        <div className="flex flex-col items-center">
                            <div className=" w-7 h-7 flex items-center justify-center rounded-full border-2 border-gray-300  text-gray-500 text-sm font-medium progress-step-number">1</div>
                            <div className="mt-2 text-xs font-medium text-gray-900">Course Info</div>
                        </div>
                    </div>
                    <div className={clsx('w-1/4 progress-step',componentCount<=2? componentCount===2 && 'active':'completed')}>
                        <div className="flex flex-col items-center">
                            <div className=" w-7 h-7 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-500 text-sm font-medium progress-step-number">2</div>
                            <div className="mt-2 text-xs font-medium text-gray-900">Modules & Videos</div>
                        </div>
                    </div>
                    <div className={clsx('w-1/4 progress-step',componentCount<=3? componentCount===3 && 'active':'completed')}>
                        <div className="flex flex-col items-center">
                            <div className=" w-7 h-7 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-500 text-sm font-medium progress-step-number">3</div>
                            <div className="mt-2 text-xs font-medium text-gray-500">Quiz & Assignment</div>
                        </div>
                    </div>
                    <div className={clsx('w-1/4 progress-step',componentCount<=4? componentCount===4  && 'active':'completed')}>
                        <div className="flex flex-col items-center">
                            <div className=" w-7 h-7 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-500 text-sm font-medium progress-step-number">4</div>
                            <div className="mt-2 text-xs font-medium text-gray-500">Publish</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <form onSubmit={handleSubmit} className='mx-4 mt-6 mb-14'>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">{btnTitle.this}</h2>
                    <p className="text-sm text-gray-500 mt-1">Last edited: July 5, 2025</p>
                </div>
                <div className="flex space-x-3">
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-button bg-white text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                        <div className="w-4 h-4 mr-2 flex items-center justify-center">
                            <i className="ri-eye-line"></i>
                        </div>
                       {btnTitle?.nxt && `preview`||`view`}
                    </button>
                    <button onClick={handleSaveProgress} type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-button bg-[var(--clr-accent-900)] text-white hover:bg-[var(--clr-accent-1000)] focus:outline-none whitespace-nowrap">
                        <div className="w-4 h-4 mr-2 flex items-center justify-center">
                            <i className="ri-save-line"></i>
                        </div>
                        {btnTitle?.nxt && `save progress`||`back to mycourse`}
                    </button>
                </div>
            </div>
             <CreateCourseComponent/>
            { btnTitle?.nxt && btnTitle?.prev && (<div className="flex justify-between mt-8">
                <button onClick={handlePrevBtn} type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-button bg-white text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                    <div className="w-4 h-4 mr-2 flex items-center justify-center">
                        <i className="ri-arrow-left-line"></i>
                    </div>
                    {btnTitle.prev}
                </button>
                <button  type="submit" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-button bg-[var(--clr-accent-900)] text-white hover:bg-[var(--clr-accent-1000)] focus:outline-none whitespace-nowrap">
                    {btnTitle.nxt}
                    <div className="w-4 h-4 ml-2 flex items-center justify-center">
                        <i className="ri-arrow-right-line"></i>
                    </div>
                </button>
            </div>)}
        </form>
    </div>
  )
}

export default CreateCourse;