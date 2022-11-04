import {
  PresentationChartBarIcon,
  ArrowLongUpIcon,
} from "@heroicons/react/24/outline";
export const StatuCard = ({ titulo, color, numero, visitas, fecha, w, h ,mtt,icono}) => {
  return (
    <>
      <div className={`ml-10 ${w} ${h} shadow-lg bg-fondoCard2`}>
        <div
          className={`relative ml-5 -top-7 ${color} left-0 w-24 h-24 rounded-xl flex justify-center`}
        >
          {icono}
        </div>
        <div className={`text-end  h-full ${mtt}`}>
          <p className="opacity-70">{titulo}</p>
          <p className="text-3xl">{numero}</p>
          <div className="relative flex gap-2 items-center mt-4 py-2 px-2">
            <ArrowLongUpIcon className=" w-4 h-4 text-check" />
            <p className="text-check">{visitas}</p>
            <p className="opacity-70">{fecha}</p>
          </div>
        </div>
      </div>
    </>
  );
};
