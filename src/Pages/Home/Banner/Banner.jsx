import React from "react";
import svg from "../../../assets/undraw_questions_re_1fy7.svg";
import ofc from "../../../assets/ofc.jpg";

import { FaDivide, FaLine } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="bg-base-200 ">
      <div className="bg-[#0a48b3] lg:rounded-b-[150px] h-48  lg:h-[600px] grid grid-cols-2 justify-center items-center">
        <div className="ms-4 lg:ms-24">
          <h2 className="text-white font-bold lg:text-5xl text-lg ">
            Run The Stack <br className="pt-4" /> is an QNA Type Website
          </h2>

          <div className="mt-2 lg:mt-8 ">
            <button className="btn btn-xs bg-white  text-sm lg:text-lg">
              Learn More
            </button>
            <button className="btn-success btn btn-xs text-sm lg:text-lg ms-4">
              Learn More
            </button>{" "}
          </div>
        </div>
        <div>
          <img className="w-24 lg:w-3/4" src={svg} alt="" />
        </div>
      </div>

      {/* Ask Question banner */}

      <div className="grid grid-cols-2 lg:my-20 my-4">
        <div className="">
          <img src={ofc} alt="" />
        </div>
        <div className="bg-[#172b4d]  flex text-start">
          <div className="my-auto mx-8">
            <h2 className=" text-green-400 font-bold uppercase text-lg ">
              Ask Question
            </h2>
            <h1 className="text-3xl my-2 text-white font-bold">
              Get Help From Professionals
            </h1>
            <p className="text-sm text-white opacity-60 mb-4">
              Sed commodo odio eu condimentum eleifend. Maecenas semper nisl a
              mattis semper. Quisque sodales laoreet interdum. Aliquam ut erat
              sit amet nisl lobortis maximus lorem ipsum Etiam congue, sem id
              vulputate condimentum, nibh arcu lobortis lorem ipsum...
            </p>
            <button className="btn btn-success">Ask a Question</button>
          </div>
        </div>
      </div>

      {/* Question */}
    </div>
  );
};

export default Banner;