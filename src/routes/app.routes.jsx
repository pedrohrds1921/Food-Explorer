import { Routes, Route } from "react-router-dom";

import { CreateFood } from "../Pages/AdminPages/CreateFood";
import { EditFood } from "../Pages/AdminPages/EditFood";
import FoodDetails from "../Pages/AdminPages/FoodDetails";
import Home from "../Pages/AdminPages/Home/Index";
import Menu from "../Pages/AdminPages/Menu";




export function AppRoutes(){

 

return(
    <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/create"element={<CreateFood/>}/>
        <Route path="/details/:id"element={<FoodDetails/>}/>
        <Route path="/edit/:id"element={<EditFood/>}/>
        <Route path="/menu"element={<Menu/>}/>
    </Routes>
)

}