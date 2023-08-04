import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllHouses } from "../../redux/actions";
import mainImage from "../../img-cp2/main-image-cp2.jpg";
import HouseCard from "../HouseCard/HouseCard";

// CUIDADOOOO. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR EL METODO CONNECT DE REDUX, JUNTO A MAP_STATE_TO_PROPS
// Y MAP_DISPATCH_TO_PROPS!! <3
export class Houses extends Component {
  componentDidMount() {
    this.props.getAllHouses();
  }
  render() {
    
    const { houses } = this.props;
    return (
      <div>
        <h1>Game of Thrones</h1>
        <img src={mainImage} alt="main-img" />
        <h3>Houses</h3>
        {houses &&
          houses.map((house) => (
              <HouseCard
                key={house.id}
                id={house.id}
                name={house.name}
                region={house.region}
                words={house.words}
                characters={house.characters}
              />
            )
          )}
      </div>
    );
  }
}

export const mapStateToProps = ({ houses }) => ({ houses: houses });

export const mapDispatchToProps = { getAllHouses };

export default connect(mapStateToProps, mapDispatchToProps)(Houses);
