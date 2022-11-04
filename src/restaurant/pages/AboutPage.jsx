import restaurantImg from "../../assets/res2.jpg";
import { GaleriaCard } from "../components/GaleriaCard";
import { InformacionCard } from "../components/informacionCard";

export const AboutPage = () => {

  
  return (
    <div className="animate__animated animate__fadeInLeft">
      <InformacionCard  restaurantImg={restaurantImg}/>

      <GaleriaCard/>
    </div>
  );
};
