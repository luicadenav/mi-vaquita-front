import { useState, useEffect } from 'react';
import GroupsList from '../../components/GroupsList';
import CreateGroup from '../../components/CreateGroup';
import Modal from '../../components/Modal';
import styles from './groups.module.css';
import { getGroups } from '../../services/GroupsApiService';

const Groups = () => {
  const [openModalForm, setOpenModalForm] = useState(false);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const GroupsData = await getGroups();
        setGroups(GroupsData);
      } catch (error) {
        console.error('Error al obtener los grupos:', error);
      }
    }
    fetchData();
  }, [groups]);

  return (
    <div className={styles.main}>
      <Modal
        isOpenModal={openModalForm}
        onClose={() => setOpenModalForm(false)}
      >
        <CreateGroup onClose={() => setOpenModalForm(false)} />
      </Modal>

      <button onClick={() => setOpenModalForm(true)}>Nuevo grupo</button>
      <p>debes</p>
      <p>45000</p>
      <GroupsList groupsList={groups} />
    </div>
  );
};

export default Groups;
