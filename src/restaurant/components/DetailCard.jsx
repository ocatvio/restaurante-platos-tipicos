import {  useNavigate } from "react-router-dom";


export const DetailCard = ({name,description,price,url}) => {


  const navigate = useNavigate()

  const onRegresar = () => {
      

    navigate(-1)
  }
 
  return (

   

    <div className="animate__animated animate__fadeInLeft grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:m-20 gap-8">
      <div className="">
        <img className="w-full object-cover scale-80 rounded-lg shadow-lg" src={url} alt="" />
      </div>
      <div className="">
        <h2 className="text-2xl font-semibold mb-8">{name}</h2>
        <div className="flex gap-4 my-4">
          <p>$ {price}</p>
          <p>Icono de estrellas</p>
        </div>
        <p className="opacity-80 my-10">
          {
            description
          }
        </p>
       <div className="text-center">
       <button onClick={onRegresar} className="bg-btn py-2 px-14 rounded-full text-whiteC text-center">Volver...</button>
       </div>
      </div>
    </div>
  );
};
