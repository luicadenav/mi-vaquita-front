import GroupCard from '../GroupCard';

import styles from './groupsList.module.css';

const GroupsList = ({ groupsList }) => {
  return (
    <div className={styles.list_container}>
      {groupsList?.map((group) => (
        <GroupCard key={group.id} groupData={group} />
      ))}
    </div>
  );
};

export default GroupsList;
