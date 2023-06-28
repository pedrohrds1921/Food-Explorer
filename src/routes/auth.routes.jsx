import { Routes, Route } from "react-router-dom";


import { SingIn } from "../Pages/SingIn";
import { SingUp } from "../Pages/SingUP";

export function AuthRoutes(){

return(
    <Routes>
        <Route path="/singup"element={<SingUp/>}/>
        <Route path="/"element={<SingIn/>}/>
    </Routes>
)

}