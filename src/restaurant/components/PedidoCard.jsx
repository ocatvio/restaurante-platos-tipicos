import { TrashIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { RestContext } from "../context/RestContext";

export const PedidoCard = ({
  remove = false,
  name,
  url,
  description,
  price,
  id,
}) => {
  const { removeCar } = useContext(RestContext);

  const removePlato = () => {
    removeCar(id);
  };
  return (
    <div className="bg-fondoCard2 shadow-md flex lg:w-64 w-72 py-2 px-2 rounded-md mb-1">
      <div>
        <img
          className="w-14 h-12  object-cover rounded-full "
          src={url}
          alt=""
        />
      </div>
      <div className="w-full p-1">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-grayfont text-sm">{name}</h2>
          <p>${price}</p>
        </div>
        <p className="my-1 overflow-hidden opacity-60 text-sm">{description}</p>
        <div className="flex justify-between text-grayfont2 font-medium">
          <p>Unit: {"0"}</p>

          { 
          remove 
          ? ''
        :<button onClick={removePlato} className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 rounded-full">
        <TrashIcon className="w-6 h-6 text-btn" />
      </button>
          
        
        }
        </div>
      </div>
    </div>
  );
};
