import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { UserRoutes } from "./user.routes";
import { useAuth } from "../hooks/auth";
import { AuthRoutes } from "./auth.routes";

export  function Routes(){
    const {user}= useAuth()

    

    return(

        <BrowserRouter>
       {user ? (user.Admin === 1 ? <AppRoutes /> : <UserRoutes />) :(
        <AuthRoutes />)}
        
        </BrowserRouter>
    )
}