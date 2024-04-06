import { useState, useEffect } from 'react';
import GroupCard from '../GroupCard';
import { getGroups } from '../../services/GroupsApiService';
import styles from './groupsList.module.css';

const GroupsList = () => {
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
  }, []);

  return (
    <div className={styles.main}>
      {groups.map((group) => (
        <GroupCard key={group.id} groupData={group} />
      ))}
    </div>
  );
};

export default GroupsList;
