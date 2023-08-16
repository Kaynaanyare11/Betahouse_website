import { useEffect, useState } from "react";
import Navbar from "../Shared/Navigation/Navbar";
import { GetData } from "../Shared/ApiCrud";
function About() {
  const [FewDesc, setFewDesc] = useState("");
  const [moreDesc, SetMoreDesc] = useState("");

  useEffect(() => {
    const GetAbout = async () => {
      try {
        const { data } = await GetData("about");
        console.log(data);
        setFewDesc(data[0]?.FewDescription);
        SetMoreDesc(data[0]?.MoreDescription);
      } catch (error) {
        console.log(error.message);
      }
    };
    GetAbout();
  }, []);
  return (
    <>
      <div className="mx-10">
      
        <Navbar />
        <div className="mx-10">
          <div className="md:columns-2 font-bold mt-32">
            <div className="">
              <div className="w-auto md:w-3/4">
                <img
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlJTVDfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
            </div>

            <div className="md:flex flex-row gap-20 md:me-16">
              <div>
                <h1 className="mt-10 md: text-2xl font-bold">Our Mission</h1>

                <p className="text-gray-700 text-lg">
                  <div dangerouslySetInnerHTML={{ __html: FewDesc }}></div>
                </p>
              </div>
              <div>
                <h1 className="mt-10 md: text-2xl font-bold">Our Vision</h1>
                <p className="text-gray-700 text-lg">
                  <div dangerouslySetInnerHTML={{ __html: moreDesc }}></div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
