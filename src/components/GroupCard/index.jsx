import styles from './groupCard.module.css';

const GroupCard = ({ groupData }) => {
  return (
    <div className={styles.card_container}>
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
