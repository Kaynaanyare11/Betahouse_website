import { useEffect, useState } from 'react';
import {GetData} from '../Shared/ApiCrud'
function HeroSection() {

    const [HeroSectionTitle, setHeroSection] = useState('');
    const [HeroSectionDiscription, setHeroSectionDiscription] = useState('');

    useEffect(() => {

        const GetHero = async () => {
            try {
        const { data } = await GetData('info')
        setHeroSection(data[0]?.HeroSectionTitle)
        setHeroSectionDiscription(data[0]?.HeroSectionDescription)
    
            }catch (error) {
                console.log(error.message)
                
            }

    
        }
        GetHero();
    
      }, [])
    return (
        <div className="md:columns-2 mt-28">
            <div className="flex flex-col md:ms-10">
                <div className="text-black text-4xl md:text-6xl font-bold font-serif">
                    {HeroSectionTitle} </div>
                <div className="text-2xl md:text-3xl mt-10">
                    {HeroSectionDiscription}
                </div>
            </div>
            <div className="w-auto mt-10 md:w-3/4 md:ms-20">
               <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=875&q=80" alt="" />
            </div>

        
        </div>
      );
}

export default HeroSection;