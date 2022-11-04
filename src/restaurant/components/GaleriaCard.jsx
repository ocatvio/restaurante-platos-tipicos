import { platos } from "../data/heroes";



export const GaleriaCard = () => {
  return (
    <>
    <h2  className="my-8">Galeria</h2>
    <div className="grid lg:grid-cols-5 md:grid-cols-3  gap-2 ">
        {
            platos.map(image => (
                <img
                className="w-full h-52  object-cover scale-100 rounded-sm shadow-lg"
                key={image.id}
                src={image.url}
                alt=""
              />
            ))
        }
     
    </div>
    </>
  );
};
