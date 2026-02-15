import React from "react";

import { useNavigate } from "react-router-dom";

const SearchItemCard = ({ item }) => {

  const navigate = useNavigate();
  const handlenav = () => {
 
    navigate(`/detailspage/${item._id}`)
  };
  return (
    <div>
      <div className="bg-white p-2 flex flex-col gap-2 rounded-sm">
        <img
          src={item.image}
          className="h-52 w-52 object-fill self-center"
        ></img>
        <p className="text-md font-semibold capitalize">{item.name}</p>
        <p className={`text-green capitalize tracking-tight`}>
          {item.description}
        </p>

        <button
          className="bg-blue-950 text-white font-semibold p-2 capitalize rounded-md hover:opacity-80 active:bg-red-500"
          onClick={handlenav}
          
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default SearchItemCard;
