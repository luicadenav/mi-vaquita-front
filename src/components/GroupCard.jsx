const GroupCard = ({ groupData }) => {
  return (
    <div className='flex justify-start items-center min-w-[300px] shadow-md mx-auto p-6'>
      <div>
        <img src='/images/logo_groups.svg' alt='logo mi vaquita' />
      </div>
      <div>
        <p>{groupData.name}</p>
        <p>Debes: $12000</p>
        <div>
          <button>Editar</button>
          <button>Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
