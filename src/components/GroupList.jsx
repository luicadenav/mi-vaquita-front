import GroupCard from "./GroupCard";

const GroupsList = ({ groupsList }) => {
  return (
    <div className="flex flex-wrap gap-4 ">
      {groupsList.groups?.map((group) => (
        <GroupCard key={group.id} groupData={group} />
      ))}
    </div>
  );
};

export default GroupsList;
