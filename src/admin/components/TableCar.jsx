import {
  TrashIcon,
  PencilSquareIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

import Team1 from "../../assets/img/team-1-800x800.jpg";
import Team2 from "../../assets/img/team-2-800x800.jpg";
import Team3 from "../../assets/img/team-3-800x800.jpg";
import Team4 from "../../assets/img/team-4-470x470.png";

export const TableCar = ({color}) => {


  return (
    <div className="mx-8 overflow-y-auto h-[35vh]  ">
      <table className=" my-4 rounded-xl items-center w-full bg-whiteC shadow-lg">
        <thead>
          <tr>
            <th className={`px-2 ${color}  py-3 text-sm  whitespace-nowrap font-semibold text-left`}>
              Nombre
            </th>
            <th className={`px-2 ${color}  py-3 text-sm  whitespace-nowrap font-semibold text-left`}>
              Monto por Compra
            </th>
            <th className={`px-2 ${color}  py-3 text-sm  whitespace-nowrap font-semibold text-left`}>
              Estado
            </th>
            <th className={`px-2 ${color}  py-3 text-sm  whitespace-nowrap font-semibold text-left`}>
              Foto
            </th>

            <th className={`px-2 ${color}  py-3 text-sm  whitespace-nowrap font-semibold text-left`}>
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="  align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
              Argon Design System
            </th>
            <th className="  align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
              $2,500 USD
            </th>
            <th className="  align-middle  px-2 py-4 text-left">
             <p className="font-semibold text-xs shadow-md w-20 text-center rounded-full p-1  bg-opacity-80   text-check ">despachado</p>
              
            </th>
            <th className="  align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
              <div className="flex">
                <div className="w-10 h-10 rounded-full ">
                  <img className="rounded-full" src={Team1} rounded alt="..." />
                </div>
                <div className="w-10 h-10 rounded-full -ml-4">
                  <img className="rounded-full" src={Team2} rounded alt="..." />
                </div>
                <div className="w-10 h-10 rounded-full  -ml-4">
                  <img className="rounded-full" src={Team3} rounded alt="..." />
                </div>
                <div className="w-10 h-10 rounded-full  -ml-4">
                  <img className="rounded-full" src={Team4} rounded alt="..." />
                </div>
              </div>
            </th>
            <th>
              <div className="flex gap-2">
                <button>
                  <TrashIcon className="w-6 h-6 text-btn" />
                </button>
                <button>
                  <PencilSquareIcon className="w-6 h-6 text-purpura" />
                </button>
                <button>
                  <InformationCircleIcon className="w-6 h-6 text-check" />
                </button>
              </div>
            </th>
            <th className="  align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
              {/* <Progress color="red" value="60" /> */}
            </th>
          </tr>
          <tr>
            <th className="  align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
              Black Dashboard Sketch
            </th>
            <th className="  align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
              $1,800 USD
            </th>
            <th className="  align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
            <p className="font-semibold text-xs shadow-md w-20 text-center rounded-full p-1  bg-opacity-80   text-btn ">pendiente</p>
            </th>
            
            <th className="  align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
              <div className="flex">
                <div className="w-10 h-10 rounded-full ">
                  <img className="rounded-full" src={Team1} rounded alt="..." />
                </div>
                <div className="w-10 h-10 rounded-full -ml-4">
                  <img className="rounded-full" src={Team2} rounded alt="..." />
                </div>
                <div className="w-10 h-10 rounded-full  -ml-4">
                  <img className="rounded-full" src={Team3} rounded alt="..." />
                </div>
                <div className="w-10 h-10 rounded-full  -ml-4">
                  <img className="rounded-full" src={Team4} rounded alt="..." />
                </div>
              </div>
            </th>
            
            <th>
              <div className="flex gap-2">
                <button>
                  <TrashIcon className="w-6 h-6 text-btn" />
                </button>
                <button>
                  <PencilSquareIcon className="w-6 h-6 text-purpura" />
                </button>
                <button>
                  <InformationCircleIcon className="w-6 h-6 text-check" />
                </button>
              </div>
            </th>
            <th className="  align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
              {/* <Progress color="green" value="100" /> */}
            </th>
          </tr>
          <tr>
            <th className="  align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
              React Material Dashboard
            </th>
            <th className="  align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
              $4,400 USD
            </th>
            <th className="  align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
            <p className="font-semibold text-xs shadow-md w-20 text-center rounded-full p-1  bg-opacity-80   text-hover-text ">pendiente</p>
            </th>
            <th className="  align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
              <div className="flex">
                <div className="w-10 h-10 rounded-full ">
                  <img className="rounded-full" src={Team1} rounded alt="..." />
                </div>
                <div className="w-10 h-10 rounded-full -ml-4">
                  <img className="rounded-full" src={Team2} rounded alt="..." />
                </div>
                <div className="w-10 h-10 rounded-full  -ml-4">
                  <img className="rounded-full" src={Team3} rounded alt="..." />
                </div>
                <div className="w-10 h-10 rounded-full  -ml-4">
                  <img className="rounded-full" src={Team4} rounded alt="..." />
                </div>
              </div>
            </th>
            <th>
              <div className="flex gap-2">
                <button>
                  <TrashIcon className="w-6 h-6 text-btn" />
                </button>
                <button>
                  <PencilSquareIcon className="w-6 h-6 text-purpura" />
                </button>
                <button>
                  <InformationCircleIcon className="w-6 h-6 text-check" />
                </button>
              </div>
            </th>
            <th className="  align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
              {/* <Progress color="teal" value="90" /> */}
            </th>
          </tr>
          <tr>
            <th className="  align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
              React Material Dashboard
            </th>
            <th className="  align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
              $2,200 USD
            </th>
            <th className="  align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
            <p className="font-semibold text-xs shadow-md w-20 text-center rounded-full p-1  bg-opacity-80   text-check ">despachado</p>
            </th>
            <th className="  align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
              <div className="flex">
                <div className="w-10 h-10 rounded-full ">
                  <img className="rounded-full" src={Team1} rounded alt="..." />
                </div>
                <div className="w-10 h-10 rounded-full -ml-4">
                  <img className="rounded-full" src={Team2} rounded alt="..." />
                </div>
                <div className="w-10 h-10 rounded-full  -ml-4">
                  <img className="rounded-full" src={Team3} rounded alt="..." />
                </div>
                <div className="w-10 h-10 rounded-full  -ml-4">
                  <img className="rounded-full" src={Team4} rounded alt="..." />
                </div>
              </div>
            </th>
            <th>
              <div className="flex gap-2">
                <button>
                  <TrashIcon className="w-6 h-6 text-btn" />
                </button>
                <button>
                  <PencilSquareIcon className="w-6 h-6 text-purpura" />
                </button>
                <button>
                  <InformationCircleIcon className="w-6 h-6 text-check" />
                </button>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
