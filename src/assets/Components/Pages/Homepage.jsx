import Navbar from "../Shared/Navigation/Navbar";
import HeroSection from "../Body/HearoSection";
function Dashboard() {
  return (
    <div className="mx-10">
      <Navbar />
      <HeroSection />
      <div className="items-center w-full min-h-screen p-2 mt-20">
        <p className="text-3xl md:text-4xl font-bold font-serif text-center border-dotted border-b-4 border-white">Same Of Our Houses List</p>
      <div id="feature" className="flex flex-col mx-10 md:mx-24 md:flex-row gap-20 mt-10">
        <div className="w-[330px] h-[430px] bg-white  rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <div>
            <img
              className="w-full rounded-md"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuyNtCEUpBwtxmWh9T6MT7r9-eKRpeWFHmVw&usqp=CAU"
            />
          </div>
          <div className="mt-5 flex flex-col ms-10">
            <span className="text-2xl">Hodan Warshadaha street</span>
            <span className="text-gray500 text">
              4-Rooms | 2-Pathrooms | 1-Parking
            </span>
            <span className="text-3xl">$300</span>
          </div>
          <button className=" bg-main-0 text-main-1 rounded-md py-2 p-4 mt-4 items-center ms-10">
            View Details
          </button>

          <div></div>
        </div>

        <div className="w-[330px] h-[430px] bg-white  rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <div>
            <img
              className="w-full rounded-md"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuyNtCEUpBwtxmWh9T6MT7r9-eKRpeWFHmVw&usqp=CAU"
            />
          </div>
          <div className="mt-5 flex flex-col ms-10">
            <span className="text-2xl">Hodan Warshadaha street</span>
            <span className="text-gray500 text">
              4-Rooms | 2-Pathrooms | 1-Parking
            </span>
            <span className="text-3xl">$300</span>
          </div>
          <button className=" bg-main-0 text-main-1 rounded-md py-2 p-4 mt-4 items-center ms-10">
            View Details
          </button>

          <div></div>
        </div>

        <div className="w-[330px] h-[430px] bg-white  rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <div>
            <img
              className="w-full rounded-md"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuyNtCEUpBwtxmWh9T6MT7r9-eKRpeWFHmVw&usqp=CAU"
            />
          </div>
          <div className="mt-5 flex flex-col ms-10">
            <span className="text-2xl">Hodan Warshadaha street</span>
            <span className="text-gray500 text">
              4-Rooms | 2-Pathrooms | 1-Parking
            </span>
            <span className="text-3xl">$300</span>
          </div>
          <button className=" bg-main-0 text-main-1 rounded-md py-2 p-4 mt-4 items-center ms-10">
            View Details
          </button>

          <div></div>
        </div>
        

      </div>
      <button className="bg-main-0 py-3 px-5 rounded-md text-center text-white text-xl ms-[35%] md:ms-[42%] mt-14 mb-10">See More</button>
      </div>


    {/* What Our client say*/}
      <div id="clients" className=" bg-main-0 rounded-md py-10">
        <div className=" items-center h-full text-center mt-10">
            <h1 className="text-3xl text-white">Our Clients</h1>
            <p className="text-white text-2xl mt-5">What Our Clients Say About Us</p>
            
        </div>
        <div className="mx-10 md:mx-20 item-center flex flex-col md:flex-row gap-5">
        <div className="w-[100%] h-[320px] md:w-[400px] md:h-[300px] bg-white mt-10 rounded-md shadow-md shadow-[#040c16] ">
          <div className="flex gap-3">  
            <img
              className="ms-10 w-24 h-24 rounded-full mt-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuyNtCEUpBwtxmWh9T6MT7r9-eKRpeWFHmVw&usqp=CAU"
            />
            <div className=" bg-gray-50 mt-10 text-2xl font-semibold font-serif">Raadsan Company</div>
          </div>
          <div className="mt-5 flex flex-col ms-10">
            
            <span className="text-gray500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, 
              voluptates fuga porro cum dolorum natus accusamus 
              reprehenderit architecto numquam neque tempore reiciendis officiis dolore 
             
            </span>
           
          </div>

          <div></div>
        </div>



        <div className="w-[100%] h-[320px] md:w-[400px] md:h-[300px] bg-white mt-10 rounded-md shadow-md shadow-[#040c16] ">
          <div className="flex gap-3">  
            <img
              className="ms-10 w-24 h-24 rounded-full mt-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuyNtCEUpBwtxmWh9T6MT7r9-eKRpeWFHmVw&usqp=CAU"
            />
            <div className=" bg-gray-50 mt-10 text-2xl font-semibold font-serif">Raadsan Company</div>
          </div>
          <div className="mt-5 flex flex-col ms-10">
            
            <span className="text-gray500 text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, 
              voluptates fuga porro cum dolorum natus accusamus 
              reprehenderit architecto numquam neque tempore reiciendis officiis dolore 
             
            </span>
           
          </div>

          <div></div>
        </div>




        <div className="w-[100%] h-[320px] md:w-[400px] md:h-[300px] bg-white mt-10 rounded-md shadow-md shadow-[#040c16] ">
          <div className="flex gap-3">  
            <img
              className="ms-10 w-24 h-24 rounded-full mt-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuyNtCEUpBwtxmWh9T6MT7r9-eKRpeWFHmVw&usqp=CAU"
            />
            <div className=" bg-gray-50 mt-10 text-2xl font-semibold font-serif">Raadsan Company</div>
          </div>
          <div className="mt-5 flex flex-col ms-10">
            
            <span className="text-gray500 text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, 
              voluptates fuga porro cum dolorum natus accusamus 
              reprehenderit architecto numquam neque tempore reiciendis officiis dolore 
             
            </span>
           
          </div>

          <div></div>
        </div>
        </div>

      </div>


    </div>
  );
}

export default Dashboard;
