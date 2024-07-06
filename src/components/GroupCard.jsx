import { useNavigate } from "react-router-dom";
import Logo from "/images/logo_groups.svg";
import CustomButton from "../components/CustomButton";

const GroupCard = ({ groupData }) => {
  const navigate = useNavigate();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="flex gap-7 border-b-2 max-w-[400px] shadow-card-shadow p-4 w-full mx-auto">
      <div
        style={{ backgroundColor: groupData.color }}
        className={` w-[90px] border rounded-lg h-[90px] flex justify-center items-center `}
      >
        <img src={Logo} alt="" className=" w-[65px] " />
      </div>
      <div className="flex flex-col justify-between ">
        <p className="font-bold">{capitalizeFirstLetter(groupData.name)}</p>
        <p className="font-bold mb-2">Debes: $12000</p>
        <div className="flex gap-2">
          <CustomButton
            className={""}
            variant={"primary"}
            size={"small"}
            onClick={() => navigate(`/groups/${groupData.id}`)}
          >
            Ver
          </CustomButton>
          <CustomButton
            className={""}
            variant={"primary"}
            size={"small"}
            onClick={() => navigate(`/groups/${groupData.id}`)}
          >
            Abandonar
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
