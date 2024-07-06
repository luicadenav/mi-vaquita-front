import { useState, useEffect } from "react";
import GroupsList from "../../components/GroupList.jsx";
import CreateGroup from "../../components/CreateGroup.jsx";
import Modal from "../../components/Modal.jsx";
import { getGroups } from "../../services/groupsApiService";
import CustomButton from "../../components/CustomButton.jsx";

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
    <div className="p-3 flex-col">
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
      <CustomButton
        className={"ml-auto block"}
        variant={"primary"}
        size={"medium"}
        onClick={() => setOpenModalForm(true)}
      >
        Nuevo grupo
      </CustomButton>
      <p className="pl-6 text-secondary-black font-bold text-base ">Debes</p>
      <p className="pl-6 text-red-error font-bold text-2xl mb-8">$45.000</p>
      <GroupsList groupsList={groups} fetchDataGroups={fetchDataGroups} />
    </div>
  );
};

export default Groups;
