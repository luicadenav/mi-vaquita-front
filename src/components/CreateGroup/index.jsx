import { useState, useEffect } from 'react';
import styles from './addGroup.module.css';

const CreateGroup = ({ onClose }) => {
  const [color, setColor] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});

  const colorsGroup = [
    '#A75293',
    '#65B04C',
    '#9A5037',
    '#4F7FA3',
    '#FFFFFE',
    '#FFA62F',
    '#FFE3E2',
    '#FF2630',
  ];

  const validateErrors = () => {
    const newErrors = {};
    if (name.trim() === '') {
      newErrors.name = 'Elige un nombre para continuar';
    }
    return newErrors;
  };

  const handleInputChange = (event) => {
    setErrors({});
    setName(event.target.value);
  };
  const handleColorChange = (color) => {
    setColor((prevColor) => (prevColor === color ? '' : color));
  };

  const handlePostGroup = async (e) => {
    const newErrors = validateErrors();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        const resp = await fetch('http://localhost:3000/api/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: name, color: color }),
        });
        const data = await resp.json();
        console.log(data);
        setColor('');
        setName('');

        setErrors({});
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={styles.create_group_container}>
      <button onClick={onClose}>X</button>
      <h2>Nuevo Grupo</h2>
      <input
        type='text'
        placeholder='Nombre del grupo'
        name='name'
        value={name}
        onChange={handleInputChange}
      />
      <div className={styles.colors_container}>
        {colorsGroup.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              width: '40px',
              height: '40px',
              margin: '10px',
            }}
            name='color'
            onClick={() => handleColorChange(color)}
          ></div>
        ))}
      </div>
      <button type='button' onClick={() => handlePostGroup()}>
        crear
      </button>
      {errors && <span>{errors.name}</span>}
    </div>
  );
};
export default CreateGroup;
