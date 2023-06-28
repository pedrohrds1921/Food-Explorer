import { Routes, Route } from "react-router-dom";


import Home from "../Pages/Userpages/Home/Index"
import Menu from "../Pages/Userpages/Menu";
import FoodDetails from "../Pages/Userpages/FoodDetails";


export function UserRoutes(){

return(
    <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/details/:id"element={<FoodDetails/>}/>
        <Route path="/menu"element={<Menu/>}/>

    </Routes>
)

}