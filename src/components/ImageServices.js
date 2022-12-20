import handymanServices from "./Images/handymanServices.jpg";
import { Parallax } from "react-parallax";

const ImageServices = () =>{
    return(<Parallax className='img' bgImage={handymanServices}  strength={250}>
    <div className='content'>
        <span className='text'>Die Leistungen von Handwerker und Hausmeister Service</span>
    </div>
</Parallax>)
}
export default ImageServices;