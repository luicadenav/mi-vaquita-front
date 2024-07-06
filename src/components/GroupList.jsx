import GroupCard from "./GroupCard";

const GroupsList = ({ groupsList, fetchDataGroups }) => {
  return (
    <div className="flex flex-wrap gap-4 ">
      {groupsList.groups?.map((group) => (
        <GroupCard
          key={group.id}
          groupData={group}
          fetchDataGroups={fetchDataGroups}
        />
      ))}
    </div>
  );
};

export default GroupsList;
