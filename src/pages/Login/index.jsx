import React from "react";
import CustomInput from "../../components/CustomInput.jsx";
import CustomButton from "../../components/CustomButton.jsx";

function Login() {
  return (
    <main className=" max-w-80  mx-auto my-20">
      <div className="flex justify-center h-70 ">
        <img src="/images/logo_login.svg" alt="" srcset="" />
      </div>
      <h2 className=" text-third-brown font-fredoka font-semibold text-2xl text-center my-10">
        iniciar sesión
      </h2>
      <CustomInput
        className=""
        type="email"
        name="email"
        placeholder="Correo"
        onChange={(e) => setUsername(e.target.value)}
        maxLength="100"
        minLength="3"
        iconPath="/icons/user.png"
      />
      <CustomInput
        className="mt-12"
        type="password"
        name="pass"
        placeholder="Contraseña"
        onChange={(e) => setPassword(e.target.value)}
        maxLength="100"
        minLength="8"
        iconPath="/icons/key.svg"
      />
      <CustomButton className={"mt-12"}>ingresar</CustomButton>
      <CustomButton
        className={
          "mt-4  text-primary-brown bg-white border  border-secondary-black focus:text-white "
        }
      >
        Registrarme
      </CustomButton>
    </main>
  );
}

export default Login;
