"use client";

import { useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

interface IForm {
  name: string;
  last_name: string;
  birth_date: string;
  email: string;
  password: string;
}

const Register = () => {
  const InitialForm: IForm = {
    name: "",
    last_name: "",
    birth_date: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState<IForm>(InitialForm);
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const handleVisiblePassword = () => {
    setIsVisiblePassword((prev) => !prev);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value.trimStart(),
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(formData).some((v) => v === "")) {
      console.log("completa todos los datos");
      return;
    }
    console.log(formData);
  };

  return (
    <div className="w-2xl h-[600px] flex justify-center items-center bg-black">
      <form
        className="w-96 h-[500px] flex flex-col justify-evenly items-center  bg-header-blue text-black rounded-2xl"
        onSubmit={handleSubmit}>
        <h2 className="text-2xl">Bienvenido ingresa tus datos</h2>
        <label htmlFor="register_name">Escribe tu nombre</label>
        <input
          id="register_name"
          name="name"
          value={formData.name}
          type="text"
          placeholder="Nombre"
          className="w-52 h-7 pl-3 rounded-sm bg-primary-white"
          onChange={handleInputChange}
        />
        <label htmlFor="register_last_name">Escribe tu Apellido</label>
        <input
          id="register_last_name"
          name="last_name"
          value={formData.last_name}
          type="text"
          placeholder="Apellido"
          className="w-52 h-7 pl-3 rounded-sm bg-primary-white"
          onChange={handleInputChange}
        />
        <label htmlFor="register_birt_date">Fecha de Nacimiento</label>
        <input
          id="register_birth_date"
          name="birth_date"
          value={formData.birth_date}
          type="date"
          className="w-52 h-7 pl-3 rounded-sm bg-primary-white"
          onChange={handleInputChange}
        />
        <label htmlFor="register_email">Escribe tu email</label>
        <input
          id="register_email"
          name="email"
          value={formData.email}
          type="text"
          placeholder="Email"
          className="w-52 h-7 pl-3 rounded-sm bg-primary-white"
          onChange={handleInputChange}
        />
        <label htmlFor="register_password">Escribe tu password</label>
        <div className="relative">
          <input
            id="register_password"
            name="password"
            autoComplete="false"
            value={formData.password}
            type={!isVisiblePassword ? "password" : "text"}
            placeholder="Password"
            className="w-52 h-7 pl-3 rounded-sm bg-primary-white"
            onChange={handleInputChange}
          />

          {!isVisiblePassword ? (
            <IoEyeOffOutline
              className="absolute text-lg right-2 top-1/5 "
              onClick={handleVisiblePassword}
            />
          ) : (
            <IoEyeOutline
              className="absolute text-lg right-2 top-1/5 "
              onClick={handleVisiblePassword}
            />
          )}
        </div>
        <button className="w-52 h-9 rounded-md bg-primary-green">
          Registrate
        </button>
      </form>
    </div>
  );
};
export default Register;
