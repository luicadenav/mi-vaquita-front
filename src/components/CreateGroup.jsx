import { useState, useEffect } from "react";
import { createGroup } from "../services/groupsApiService";

const CreateGroup = ({ onClose, groupsList, fetchDataGroups }) => {
  const [color, setColor] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});

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
      try {
        let selectedColor = color;
        if (!selectedColor) {
          selectedColor = defaultColor();
          setColor(selectedColor);
        }
        const resp = await createGroup({ name: name, color: selectedColor });
        console.log("🚀 ~ handlePostGroup ~ resp:", resp);
        setColor("");
        setName("");
        setErrors({});
        handleSuccesful();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="bg-white w-90vw max-w-400px rounded-lg flex flex-col items-center">
      <button onClick={onClose}>X</button>
      <h2>Nuevo Grupo</h2>
      <input
        type="text"
        placeholder="Nombre del grupo"
        name="name"
        value={name}
        onChange={handleInputChange}
      />
      <div className="border border-secondary-gray rounded-none grid grid-cols-4 grid-rows-2">
        {colorsGroup.map((colorDiv, index) => (
          <div
            key={index}
            style={{
              backgroundColor: colorDiv,
              width: "40px",
              height: "40px",
              margin: "10px",
              border: colorDiv === color ? "2px solid gray" : "none",
              cursor: "pointer",
            }}
            name="color"
            onClick={() => handleColorChange(colorDiv)}
          ></div>
        ))}
      </div>
      <button type="button" onClick={() => handlePostGroup()}>
        crear
      </button>
      {errors && <span className="text-red-error">{errors.name}</span>}
    </div>
  );
};
export default CreateGroup;
