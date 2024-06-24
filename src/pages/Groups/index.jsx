import { useState, useEffect } from "react";
import GroupsList from "../../components/GroupList.jsx";
import CreateGroup from "../../components/CreateGroup.jsx";
import Modal from "../../components/Modal.jsx";
import { getGroups } from "../../services/groupsApiService";

const Groups = () => {
  const [openModalForm, setOpenModalForm] = useState(false);
  const [groups, setGroups] = useState([]);

  const fetchDataGroups = async () => {
    try {
      const GroupsData = await getGroups();
      setGroups(GroupsData);
    } catch (error) {
      console.error("Error al obtener los grupos:", error);
    }
  };

  useEffect(() => {
    fetchDataGroups();
  }, []);

  return (
    <div>
      <Modal
        isOpenModal={openModalForm}
        onClose={() => setOpenModalForm(false)}
      >
        <CreateGroup
          groupsList={groups}
          onClose={() => setOpenModalForm(false)}
          fetchDataGroups={fetchDataGroups}
        />
      </Modal>

      <button onClick={() => setOpenModalForm(true)}>Nuevo grupo</button>
      <p>debes</p>
      <p>45000</p>
      <GroupsList groupsList={groups} />
    </div>
  );
};

export default Groups;
