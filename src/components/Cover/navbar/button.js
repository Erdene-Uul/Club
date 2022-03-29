import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div>
      <Link to="/contact">
        <button className="  mr-16 text-white bg-gradient-to-tr from-buttonColor1 to-buttonColor2 py-1 px-2 rounded-t-3xl rounded-l-3xl text-sm font-normal transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:border-none">
          Холбоо барих
        </button>
      </Link>
    </div>
  );
};
export default Button;
