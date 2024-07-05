import React, { useState, useEffect } from "react";
import CustomInput from "../../components/CustomInput.jsx";
import CustomButton from "../../components/CustomButton.jsx";
import { createUser } from "../../services/authApiService.js";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import { registerSchema } from "../../validations/registerValidations.js";

function Register() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [body, setBody] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  //pass132L*
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBody((body) => ({ ...body, [name]: value }));
  };

  const handlePost = async () => {
    const newErrors = {};
    const { name, email, password, password2 } = body;
    const { error, value } = registerSchema.validate(
      {
        name,
        email,
        password,
        password2,
      },
      {
        abortEarly: false,
      }
    );
    if (error) {
      const errorFields = error.details.map((detail) => detail.message);
      newErrors.fieldsErrors = errorFields;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        const response = await createUser(body);

        if (response.status == 201) {
          newErrors.success = "usuario creado con éxito";
          setTimeout(() => {
            navigate("/login");
          }, 2500);
        } else if (response.status == 409) {
          newErrors.email = "Este correo ya existe";
        }
        setErrors(newErrors);
      } catch (error) {
        console.error("Error al iniciar sesion", error);
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
      {errors.email && (
        <span className="text-red-error font-fredoka block font-semibold text-center mx-auto}">
          {errors.email}
        </span>
      )}
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
      {errors.success && (
        <span className="text-green-sucess font-fredoka block font-semibold text-center mx-auto}">
          {errors.success}
        </span>
      )}
      {errors.passStrength && (
        <div className="text-red-error font-fredoka block font-semibold text-left mx-auto">
          <p>Error:</p>
          <ul>
            {errors.passStrength.map((error, index) => (
              <li key={index} className="text-red-error font-fredoka text-left">
                &bull; {error}
              </li>
            ))}
          </ul>
        </div>
      )}
      {errors.fieldsErrors && (
        <div className="text-red-error font-fredoka block font-semibold text-left mx-auto">
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
        className={"mt-4 w-full"}
        variant={"primary"}
        size={"medium"}
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
          "Registrarme"
        )}
      </CustomButton>
    </main>
  );
}

export default Register;
