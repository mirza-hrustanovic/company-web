import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { datas } from "./components/HomeData";
const AppRouter = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path ="/services" element={<Services/>}/>
                <Route path="/services/:id" element={datas}/>
                <Route exact path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter;