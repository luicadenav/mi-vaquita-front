import { useState, useEffect } from "react";
import GroupsList from "../../components/GroupList.jsx";
import CreateGroup from "../../components/CreateGroup.jsx";
import Modal from "../../components/Modal.jsx";
import { getGroups } from "../../services/groupsApiService";

const GroupDetail = () => {
  return (
    <div>
      <div>
        <button>Nuevo Gasto </button>
        <button>Nuevo amigo</button>
        <button>Editar grupo</button>
      </div>
    </div>
  );
};

export default GroupDetail;
