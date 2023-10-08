import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { toast } from "react-toastify";

const Details = () => {
  const { id } = useParams();
  const datas = useLoaderData();
  const dublicate = datas.find((data) => data.id === id);
  const { name, price, details, image } = dublicate;
  return (
    <div>
      <div className="sticky top-0 z-10">
        <Navbar></Navbar>
      </div>
      <div className="hero w-full py-10 md:py-20  bg-base-200">
        <div className="flex flex-col lg:flex-row mx-5 lg:mx-20 gap-5">
          <div>
            <img src={image} className="lg:max-w-lg rounded-lg shadow-2xl" />
          </div>
          <div className="w-full text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold">{name}</h1>
            <p className="py-6">{details}</p>
            <p className="pb-6 font-medium">Price: {price} $</p>
            <button
              onClick={() => toast(`${name} Joined Successfully !`)}
              className="btn btn-primary bg-[#013E62] border-none text-white hover:bg-slate-400 hover:text-black"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
