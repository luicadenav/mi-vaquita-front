import styles from './groups.module.css';
import GroupsList from '../../components/GroupsList';

const Groups = () => {
  return (
    <div className={styles.main}>
      <button>Nuevo grupo</button>
      <p>debes</p>
      <p>45000</p>
      <GroupsList />
    </div>
  );
};

export default Groups;
