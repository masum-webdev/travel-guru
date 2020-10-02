import React, { useContext } from 'react';
import { UserContext } from '../../App';
import fakeData from '../../fakeData';
import HotelsInfo from '../HotelsInfo/HotelsInfo';

const Details = () => {
    const [loggedInUser, setLoggedInUser,placeName,setPlaceName] = useContext(UserContext)
    const hotel = fakeData.slice(3, 6);
    return (
        <div className="tg-destination container">
            <div className="section-top text-left pt-3">
                <p>252 stays Apr 13-17 3 guests</p>
                <h3>{loggedInUser.name} Stay in {placeName} </h3>
            </div>
            <div className="row">
                <div className="col-lg-7">
                    <div className="hotel-card-wrap mb-lg-0 mb-4">
                        {
                            hotel.map((hotel) => (
                                <HotelsInfo hotel={hotel} key={hotel.id}></HotelsInfo>
                            ))
                        }
                    </div>
                </div>
                <div className="col-lg-5">


                </div>
            </div>
        </div>
    );
};

export default Details;