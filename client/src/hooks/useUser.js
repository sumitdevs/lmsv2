import { useState,useEffect } from "react";
import { getUser } from "../api/user";
import toast from "react-hot-toast";
export const useUser = ()=>{
    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');
    
    //fetch user
    const fetchUser = async ()=>{
        setLoading(true);
        try{
            const response = await getUser();
            setUser(response.data);
            setError(null);
        } catch(err){
            setError(err?.response?.data?.error ||"envalid");
        } finally{
            setLoading(false);
        }
    };

    return {user,fetchUser,loading,error};
}