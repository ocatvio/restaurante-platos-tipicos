import { Visitas } from "../components/Visitas";

export const PresentacionHero = () => {
  return (
    <div className="lg:mt-2 mt-4">
      <h2 className="lg:font-bold font-semibold lg:text-3xl ">
        Un restaurante <br /> que fomenta las relaciones <br /> y alimenta
        corazones
      </h2>

      <button className="rounded-full bg-btn text-whiteC lg:px-10 lg:py-2 px-8 py-2 lg:text-base text-xs  mt-8 lg:mr-0 mr-2   focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        Menu
      </button>
      <button className="rounded-full bg-whiteC  lg:px-10 lg:py-2 lg:ml-4 px-8 py-2  lg:text-base text-xs focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        ver mas
      </button>

      <p className="mt-4  text-sm">Visitas</p>
      <Visitas />
    </div>
  );
};
