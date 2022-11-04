import React from "react";
import { useForm } from "../../hooks/useForm";

export const RegisterPage = () => {

    const {formState,onInputChange} =useForm({
        name:'',
        email:'',
        password:''
    })


    const {name,password,email} = formState


  return (
    <div>
      <h1>Registrar</h1>
      <form>
        <input
          type="text"
          placeholder="ingresa tu nombre"
          className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm mb-4"
          name="name"
          value={name}
          onChange={onInputChange}
        />
        <input
          type="text"
          placeholder="Example@gmail.com"
          className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm mb-4"
          name="email"
          value={email}
          onChange={onInputChange}
        />
        <input
          type="password"
          placeholder="password"
          className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm mb-4"
          name="password"
          value={password}
          onChange={onInputChange}
        />
        <button
          type="submit"
          className=" text-xs m-auto  rounded-full bg-btn text-whiteC px-10 py-3  mt-8 lg:w-1/2 mb-8 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          Registrarse
        </button>
        <p className="mb-2 cursor-pointer">¿Ya tienes cuente? <span>Login</span></p>

        <p className="cursor-pointer font-semibold text-btn">
          ¿Olvidaste tu contraseña?
        </p>
      </form>
    </div>
  );
};
