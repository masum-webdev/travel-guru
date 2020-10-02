import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import './EachPlace.css'



const EachPlace = (props) => {
    const { name, image, id } = props.places;
    
    return (
        <div className="col-4">
            <Link to={`/place/${id}`}>
                <div>
                    <img src={image} style={{ maxWidth: "100%" }} alt="" />
                    <h3>{name}</h3>
                </div>
            </Link>
        </div>
    );
};

export default EachPlace;