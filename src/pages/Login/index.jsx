import React, { useState } from "react";
import CustomInput from "../../components/CustomInput.jsx";
import CustomButton from "../../components/CustomButton.jsx";
import { login } from "../../services/authApiService.js";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [body, setBody] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBody((body) => ({ ...body, [name]: value }));
  };

  const handlePost = async () => {
    const response = await login(body);
    sessionStorage.setItem("token", response.token);
    navigate("/");
  };

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
        onChange={handleInputChange}
        maxLength="100"
        minLength="3"
        iconPath="/icons/user.png"
      />
      <CustomInput
        className="mt-12"
        type="password"
        name="password"
        placeholder="Contraseña"
        onChange={handleInputChange}
        maxLength="100"
        minLength="8"
        iconPath="/icons/key.svg"
      />
      <CustomButton
        className={"mt-12"}
        variant={"primary"}
        size={"medium"}
        onClick={handlePost}
      >
        ingresar
      </CustomButton>
      <CustomButton className={"mt-4"} variant={"secondary"} size={"medium"}>
        Registrarme
      </CustomButton>
    </main>
  );
}

export default Login;
