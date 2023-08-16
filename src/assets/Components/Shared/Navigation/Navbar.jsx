import { FaHotel,FaBars} from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Navbar() {
    return ( 
     
        <div className="">
            <div className='flex justify-between md:mx-10'>
                <div className='flex gap-2 font-serif mt-5'>
                <div className='text-blue-500 text-2xl md:text-3xl'>
                    <FaHotel/>
                </div>
                <div>
                    <a className="text-xl md:text-2xl">BETA_HOUSE</a>
                </div>
                </div>
                <div className='text-2xl md:hidden'>
                    <FaBars/>
                </div>

                <div className="hidden md:block mt-5">
                    <ul className=" font-semibold text-xl text-gray-400 flex gap-5 me-16">
                        <Link to={'/'}>
                        <li className="nav-item">
                        
                            <a className="nav-link hover:border-b-2 border-blue-500" href="/">Home</a>
                        </li>
                        </Link>
                        <Link to={'about'}>
                        <li className="nav-item">
                            <a className="nav-link hover:border-b-2 border-blue-500" href="about">About</a>
                        </li>
                        </Link>
                        <li className="nav-item">
                            <a className="nav-link hover:border-b-2 border-blue-500" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link hover:border-b-2 border-blue-500" href="#portfolio">Guryaha</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link hover:border-b-2 border-blue-500" href="#contact">Contact</a>
                        </li>
                    </ul>


                </div>


            </div>



        </div>
     );
}

export default Navbar;