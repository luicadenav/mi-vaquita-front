import React, { useState, useEffect } from "react";
import CustomInput from "../../components/CustomInput.jsx";
import CustomButton from "../../components/CustomButton.jsx";
import { createUser } from "../../services/authApiService.js";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";

function Register() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  console.log("🚀 ~ Register ~ errors:", errors);
  const [body, setBody] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  useEffect(() => {
    console.log("🚀 ~ Login ~ body:", body);
  }, [body]);

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBody((body) => ({ ...body, [name]: value }));
  };

  useEffect(() => {
    console.log(body.password.trim() != "");
    const newError = {};
    if (
      body.password.trim() != "" &&
      body.password.trim() != "" &&
      body.password != body.password2
    ) {
      newError.samePass = "contraseñas no coinciden";
    } else if (
      body.password.trim() != "" &&
      body.password.trim() != "" &&
      body.password == body.password2
    ) {
      newError.samePass = "contraseñas identicas";
    }
    setErrors(newError);
  }, [body]);

  const handlePost = async () => {
    setIsLoading(true);
    try {
      const response = await createUser(body);
      console.log("🚀 ~ handlePost ~ response:", response);

      /*  if (response.token) {
        sessionStorage.setItem("token", response.token);
        navigate("/");
      } else {
        setError("Correo ó contraseña inválida");
      } */
    } catch (error) {
      console.error("Error al iniciar sesion", error);
      //setErrors();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className=" max-w-80  mx-auto my-20">
      <div className="flex justify-center h-70 ">
        <img src="/images/logo_login.svg" alt="" srcset="" />
      </div>
      <h2 className=" text-third-brown font-fredoka font-semibold text-2xl text-center my-10">
        Registro
      </h2>
      <CustomInput
        className=""
        type="text"
        name="name"
        placeholder="Nombre"
        onChange={handleInputChange}
        maxLength="100"
        minLength="3"
        iconPath="/icons/user.png"
      />
      <CustomInput
        className=""
        type="email"
        name="email"
        placeholder="Correo electrónico"
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
      <CustomInput
        className="mt-12"
        type="password"
        name="password2"
        placeholder="Confirmar contraseña"
        onChange={handleInputChange}
        maxLength="100"
        minLength="8"
        iconPath="/icons/key.svg"
      />

      {errors.samePass && (
        <span className="text-red-error font-fredoka block font-semibold text-center mx-auto}">
          {errors.samePass}
        </span>
      )}
      <CustomButton
        className={"mt-4 w-full"}
        variant={"primary"}
        size={"medium"}
        onClick={handlePost}
      >
        Registrarme
      </CustomButton>
    </main>
  );
}

export default Register;
