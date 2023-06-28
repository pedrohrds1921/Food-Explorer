import { createContext,useContext,useState,useEffect} from "react";
import { api } from "../services/api";

export const AuthContext= createContext({})


function AuthProvider({children}){
    const [data,setData]=useState({})

    async function singIn({email,password}){

        try{  
            const response= await api.post("/session",{email ,password})
            
            const {user,token}=response.data 
            localStorage.setItem("@foodExemplorer:user",JSON.stringify(user))
            localStorage.setItem("@foodExemplorer:token",token)
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
             setData({user})
             return 
        }catch(error){
            if(error.response){
              return alert(error.response.data.message)
            }
        }

    }
   function singOut(){
        localStorage.removeItem("@foodExemplorer:token")
        localStorage.removeItem("@foodExemplorer:user") 
        setData({})
    }
   
    function Search(){
        const [search, setSearch] = useState("");

    }

    useEffect (()=>{
       const token= localStorage.getItem("@foodExemplorer:token")
       const user= localStorage.getItem("@foodExemplorer:user")
       if(token&&user){
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        setData({
            token,
            user:JSON.parse(user)
        })
       }
    },[])
    return(
        <AuthContext.Provider value={{singIn,user:data.user,singOut,Search}}>
            {children}
        </AuthContext.Provider>
    )
}


function useAuth(){
    const context= useContext(AuthContext)

    return context
}


export {AuthProvider, useAuth}