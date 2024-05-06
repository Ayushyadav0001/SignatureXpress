import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="mt-20 grid justify-center">
        <p className="text-center text-4xl font-bold">
          Create your digital Signature!
        </p>
        <Link
          to={"/signature"}
          className=" m-3 grid h-56 w-11/12 items-center justify-center rounded-lg shadow-2xl  hover:border-2  hover:border-red-900    "
        >
          <div className="text-center text-xl font-medium">
            <img src="./images/draw.png" className="mx-auto" alt="" />
            Draw signature.
          </div>
        </Link>
      </div>
    </>
  );
}

export default Landing;
