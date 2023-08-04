import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getHouse } from "../../redux/actions";
import CharacterCard from "../CharacterCard/CharacterCard";

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
const HouseDetail = ({match}) => {
  // match.params.houseid = 1, 2 o 3
  const dispatch = useDispatch()

  React.useEffect(()=>{
    dispatch(getHouse(match.params.houseid))
  },[match.params.houseid,dispatch])

  const house = useSelector((state)=>{return state.house})
  return (
    <div>
      <h1>{house?.name}</h1>
      <h1>{house?.words}</h1>
      {house?.characters?.map((c) => (
        <CharacterCard
          key={c.id}
          id={c.id}
          fullName={c.fullName}
          title={c.title}
          imageUrl={c.imageUrl}
          family={c.family}
          houseId={c.houseId}
        />
      ))}
    </div>
  );
};

export default HouseDetail;
