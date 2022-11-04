import image from "../../assets/plato.png";

import { MenuItem } from "../components/MenuItem";
import { PlatoList } from "../components/PlatoList";
import { getPlatos } from "../helpers/getPlatos";

import { PresentacionHero } from "../components/PresentacionHero";

export const HeroPage = () => {
  const platos = getPlatos("plato");

  return (
    <>
      <div className="animate__animated animate__fadeIn flex justify-between lg:flex-row md:flex-row flex-col lg:items-center mb-4">
        <PresentacionHero />
        <div>
          <img
            className="lg:object-cover lg:h-96 lg:w-[100%] object-contain scale-100 h-80 w-80"
            src={image}
            alt="pescado"
          />
        </div>
      </div>

      <div className="flex mb-4">
        <PlatoList title={""} listas={platos} />
      </div>
    </>
  );
};
