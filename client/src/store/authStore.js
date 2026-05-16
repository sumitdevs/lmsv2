import { create } from "zustand";
import { persist } from "zustand/middleware";
import { loginUser, logoutUser, registerUser } from "../api/auth";
import { getUser } from "../api/user";
const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      loading: false,
      error: 'first',
      login: async (credentials) => {
        set({ loading: true, error: null });
        try {
          const data = await loginUser(credentials);
          set({
            user: data,
            isAuthenticated: true,
            loading: false,
          });
          return {success:true,error:null}
        } catch (err) {
          set({ error: err.response.data.errors || err.response.data.message, loading: false });
          return {success:false,error:err.response.data.errors || err.response.data.message};
        }
      },
      logout: async () => {
        set({ loading: true, error: null });
        try {
          const data = await logoutUser();
          set({
            user: null,
            isAuthenticated: false,
            loading: false,
          });
          return {success:true,error:null}
        } catch (err) {
          set({ error: err.response.data.errors || err.response.data.message, loading: false });
          return {success:false,error:err.response.data.errors || err.response.data.message};
        }
      },
      cookieLogin: async ()=>{
        set({ loading: true, error: null });
        try {
            const data = await getUser();
            data && set({
            user: data,
            isAuthenticated: true,
            loading: false,
          });
        } catch(err) {
            set({ error: err.message, loading: false,isAuthenticated:false});
        }
      },
      signup: async (userdata)=>{
        set({loading:true,error:null});
        try{
          const data = await registerUser(userdata);
          set({loading:false})
          return {success:true, error:null}
        } catch(err){
          set({ error: err.response.data.errors || err.response.data.message, loading: false });
          return {success:false, error:err.response.data.errors || err.response.data.message};
        }
      }
    }),
    {
      name: "auth-storage",
      storage: {
        getItem: (name) => {
          const value = sessionStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: (name, value) => {
          sessionStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          sessionStorage.removeItem(name);
        },
      },
      // optional: use this to persist only selected fields
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

export default useAuthStore;
