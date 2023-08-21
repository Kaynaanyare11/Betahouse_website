import { FaHotel,FaBars,FaPhoneAlt, FaFacebook, FaInstagram} from 'react-icons/fa';
import { FaLocationDot, FaSquareTwitter } from "react-icons/fa6";
import { BsEnvelope } from "react-icons/bs";
function Footer() {
    return ( 
        <div id='about' className="bg-main-0 mt-20 h-full md:h-[300px]">
        <div className='flex flex-col md:flex-row gap-10 mx-10'>
        <div className="text-main-1 mt-10">
            <h1 className="text-4xl">About Us</h1>
            <p className=" text-lg text-justify mt-5">Beta House Company is a leading provider of real estate services, <br></br>
              with a focus on delivering exceptional value to our clients. <br></br>
             Our team of experts has deep industry knowledge and a proven <br></br>
             track record of success.</p>

        </div>
        <div className='text-main-1 mt-10'>
            
            <h1 className=" text-4xl">Contact info</h1>
            <p className=" text-lg text-justify mt-5">
            <div className='flex gap-1'><FaLocationDot className='mt-1'/>Address:Maka Al Mukarama Road, Mogadishu, Somalia<br></br></div>

            <div className='flex gap-1'><FaPhoneAlt className='mt-1'/>Telephone: +252-615000000<br></br></div> 
            <div className='flex gap-1'><BsEnvelope className='mt-1'/>Email: customercare@betahouse.com<br></br></div>
            </p>
        </div>
        <div className='text-main-1 mt-10'>
            
            <h1 className=" text-4xl">Social Media Links</h1>
            <p className=" text-lg text-justify mt-5">
            <div className='flex gap-1'><FaFacebook className='mt-1 '/>Facebook<br></br></div>

            <div className='flex gap-1'><FaSquareTwitter className='mt-1'/>Twitter<br></br></div> 
            <div className='flex gap-1'><FaInstagram className='mt-1'/>Instagram<br></br></div>
            </p>
        </div>
        </div>
      </div>
     );
}

export default Footer;