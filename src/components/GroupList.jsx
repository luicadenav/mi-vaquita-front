import GroupCard from "./GroupCard";

const GroupsList = ({ groupsList }) => {
  return (
    <div className="flex flex-wrap">
      {groupsList.groups?.map((group) => (
        <GroupCard key={group.id} groupData={group} />
      ))}
    </div>
  );
};

export default GroupsList;
