import { useState, useEffect } from "react";
import { createGroup } from "../services/groupsApiService";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import ReactLoading from "react-loading";

const CreateGroup = ({ onClose, groupsList, fetchDataGroups }) => {
  const [color, setColor] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const colorsGroup = [
    "#A75293",
    "#65B04C",
    "#9A5037",
    "#4F7FA3",
    "#FFFFFE",
    "#FFA62F",
    "#FFE3E2",
    "#FF2630",
  ];

  const validateErrors = () => {
    const newErrors = {};
    if (name.trim() === "") {
      newErrors.name = "Elige un nombre para continuar";
    } else if (
      groupsList.groups.some(
        (item) => item.name.toLowerCase() == name.toLowerCase()
      )
    ) {
      newErrors.name = "El nombre del grupo ya existe";
    } else if (name.length > 30) {
      newErrors.name = "Máximo 30 caracteres";
    }
    return newErrors;
  };

  const handleSuccesful = async () => {
    console.log("pase en sucessful");
    await fetchDataGroups();
    onClose();
  };

  const handleInputChange = (event) => {
    setErrors({});
    setName(event.target.value);
  };

  const handleColorChange = (color) => {
    setColor(color);
  };

  const defaultColor = () => {
    return colorsGroup[Math.floor(Math.random() * 8)];
  };

  const handlePostGroup = async (e) => {
    const newErrors = validateErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setIsLoading(true);
      try {
        let selectedColor = color;
        if (!selectedColor) {
          selectedColor = defaultColor();
          setColor(selectedColor);
        }
        const resp = await createGroup({ name: name, color: selectedColor });
        if (resp.name) {
          setColor("");
          setName("");
          setErrors({});
          handleSuccesful();
        } else {
          setErrors({ errorCreate: "Error al crear grupo" });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="bg-white rounded-lg flex  flex-col items-center px-4 ">
      <button
        onClick={onClose}
        className="block ml-auto text-secondary-black font-bold"
      >
        X
      </button>
      <h2 className="text-2xl text-primary-brown font-bold mb-4 text-center">
        Nuevo Grupo
      </h2>
      <CustomInput
        className="mb-6 w-full"
        type="text"
        name="name"
        placeholder="Nombre del grupo"
        onChange={handleInputChange}
        maxLength="100"
        minLength="3"
        iconPath="/icons/people.svg"
      />
      <div className="border p-3 w-full mb-6 gap-2 border-secondary-gray rounded-md grid grid-cols-4 grid-rows-2">
        {colorsGroup.map((colorDiv, index) => (
          <div
            className="mx-auto rounded-md"
            key={index}
            style={{
              backgroundColor: colorDiv,
              width: "47px",
              height: "45px",
              border:
                colorDiv === color
                  ? "2px solid black"
                  : colorDiv === "#FFFFFE"
                  ? "2px solid lightgray"
                  : `2px solid ${colorDiv}`,
              cursor: "pointer",
            }}
            name="color"
            onClick={() => handleColorChange(colorDiv)}
          ></div>
        ))}
      </div>

      <CustomButton
        className={" w-full"}
        variant={"primary"}
        size={"large"}
        onClick={handlePostGroup}
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
          "Crear"
        )}
      </CustomButton>
      {errors && <span className="text-red-error">{errors.name}</span>}
      {errors.errorCreate && (
        <span className="text-red-error">{errors.errorCreate}</span>
      )}
    </div>
  );
};
export default CreateGroup;
