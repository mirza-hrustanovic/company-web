import { Parallax } from 'react-parallax';
import handymanService from "./Images/handyman-service.jpg";

const ImageHome = () => (
    <Parallax className='img' bgImage={handymanService}  strength={400}>
        <div className='content'>
            <span className='text'>Handwerker und Hausmeister Service</span>
        </div>
    </Parallax>
);
export default ImageHome;