import perfil from "../../assets/perfil.jpg";

export const Visitas = () => {
  return (
    <div className="flex absolute">
    <img
      src={perfil}
      className="z-0   w-12 h-12 object-cover rounded-full  "
    />
    <img
      src={perfil}
      className="z-10 -ml-4  w-12 h-12 object-cover rounded-full  "
    />
    <img
      src={perfil}
      className="z-20 -ml-4  w-12 h-12 object-cover  rounded-full "
    />
    <img
      src={perfil}
      className="z-30 -ml-4  w-12 h-12 object-cover rounded-full  "
    />
  </div>
  )
}
