import { FaHotel,FaBars} from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import logo from '../../../images/logo-removebg-preview.png'
import { BsList } from 'react-icons/bs';
import { useState } from 'react';
import { Link } from 'react-scroll'


function Navbar() {
    const [mobile, setismobile] = useState(false)
    const [selectedMenu,setMenu]=useState('')
    // const [phoneIcone,setphoneIcone]=useState('')
    return ( 
     
        <div>
     
            <div className='flex justify-between md:mx-10'>
                <div className='flex gap-2 mt-3'>
             <img className='w-14 h-10 md:w-20 md:h-16' src={logo} alt="" />
             <div className='mt-3 md:mt-5 md:text-2xl font-bold font-serif'>
                BETA<span className=' text-main-0'>HOUSE</span>
                </div>

                </div>
                <div className='text-2xl md:hidden mt-4'>
                <button>
                        <BsList onClick={() => {
                            setismobile(!mobile)
                            
                        }} className='text-3xl  block   md:hidden' />
                    </button>
                   
                </div>

                <div className="hidden md:block mt-5">
                    <ul className=" font-semibold text-xl text-gray-400 flex gap-5 me-16">
                        <Link to={'/'}>
                        <li className="nav-item">
                        
                            <a className="nav-link hover:border-b-2 border-blue-500" href="/">Home</a>
                        </li>
                        </Link>
                        <Link to="about" smooth={true} duration={500}>
                        <li className="nav-item">
                            <a className="nav-link hover:border-b-2 border-blue-500">About</a>
                        </li>
                        </Link>
                        <Link to="clients" smooth={true} duration={500}>
                        <li className="nav-item">
                            <a className="nav-link hover:border-b-2 border-blue-500">Clients</a>
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

            <div className={` ${mobile ? 'block' :  'hidden'} w-[100%] relative center top-5 shadow-sm h-[900px] md:hidden`}>
            <button className=' w-[100%] bg-gray-200 py-2 rounded-md text-gray-500'>Login</button>
            <button className=' w-[100%] bg-black p-2 rounded-md mt-5 text-white font-semibold'>Sing Up</button>

            <div className="mt-5">
                    <ul className=" font-semibold text-xl text-gray-400 flex flex-col gap-5">
                        <Link to={'/'} onClick={()=>{
                            this.hide();
                        }}>
                        <li className="nav-item">
                        
                            <a className="nav-link hover:border-b-2 border-blue-500" href="/">Home</a>
                        </li>
                        </Link>
                        <Link to={'about'} onClick={()=>{
                            this.hide();
                        }}>
                        <li className="nav-item">
                            <a className="nav-link hover:border-b-2 border-blue-500" href="about">About</a>
                        </li>
                        </Link>
                        <Link to={'service'} onClick={()=>{
                            this.hide();
                        }}>
                        <li className="nav-item">
                            <a className="nav-link hover:border-b-2 border-blue-500" href="#services">Services</a>
                        </li>
                        </Link>
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