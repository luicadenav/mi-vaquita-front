import React, { useState, useEffect } from "react";
import CustomInput from "../../components/CustomInput.jsx";
import CustomButton from "../../components/CustomButton.jsx";
import { login } from "../../services/authApiService.js";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import { loginSchema } from "../../validations/loginValidations.js";

function Login() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");
  const [body, setBody] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setErrors({});
    const { name, value } = e.target;
    setBody((body) => ({ ...body, [name]: value }));
  };

  const handlePost = async () => {
    const newErrors = {};
    const { email, password } = body;
    const { error, value } = loginSchema.validate(
      {
        email,
        password,
      },
      {
        abortEarly: false,
      }
    );
    if (error) {
      console.log("🚀 ~ handlePost ~ error:", error.details);
      const newError = error.details.map((detail) => detail.message);
      newErrors.fieldsErrors = newError;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setIsLoading(true);
      try {
        const response = await login(body);

        if (response.token) {
          sessionStorage.setItem("token", response.token);
          setErrors({});
          navigate("/");
        } else {
          setErrors({ errorLogin: "Correo o contraseña incorrecto" });
        }
      } catch (error) {
        setErrors({ errorLogin: "Error al iniciar sesion" });
      } finally {
        setIsLoading(false);
      }
    }
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

      {errors.errorLogin && (
        <span className="text-red-error font-fredoka block font-semibold text-center mx-auto}">
          {errors.errorLogin}
        </span>
      )}
      {errors.fieldsErrors && (
        <div className="text-red-error font-fredoka block font-semibold text-left mx-auto">
          <p>Error:</p>
          <ul>
            {errors.fieldsErrors.map((error, index) => (
              <li key={index} className="text-red-error font-fredoka text-left">
                &bull; {error}
              </li>
            ))}
          </ul>
        </div>
      )}
      <CustomButton
        className={"mt-12 w-full"}
        variant={"primary"}
        size={"large"}
        onClick={handlePost}
      >
        {isLoading ? (
          <ReactLoading
            type={"bars"}
            color="#fff"
            height={25}
            width={25}
            className="mx-auto"
          />
        ) : (
          "ingresar"
        )}
      </CustomButton>
      <CustomButton
        className={"mt-4 w-full"}
        variant={"secondary"}
        size={"large"}
        onClick={() => navigate("/register")}
      >
        Registrarme
      </CustomButton>
    </main>
  );
}

export default Login;
