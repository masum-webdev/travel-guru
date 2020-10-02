import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import './Place.css'
import { UserContext } from '../../App';
const Place = () => {

    const history = useHistory();

    const { id } = useParams();

    const places = fakeData.find(item => item.id === id);
    const { name, details } = places;
    let [loggedInUser, setLoggedInUser, placeName, setPlaceName] = useContext(UserContext);
    setPlaceName(name);
    const handleLoginRoute = () => {

        history.push("/details");
    };
    return (


        <main className="background tg-hero d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="home-info mb-md-0 mb-5">
                            <h1>{name}</h1>
                            <p>{details}</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="place-form">
                            <div>

                                <div className="form-group">
                                    <label>Origin</label>
                                    <input name="origin" type="text" className="form-control" placeholder="e.g Dhaka" />
                                </div>
                                <div className="form-group">
                                    <label>Destination</label>
                                    <input name="destination" type="text" className="form-control" placeholder="e.g Cox’s Bazar" />
                                </div>
                                <div className="form-group row booking-date">
                                    <div className="col-6">
                                        <label htmlFor="date-input">From</label>
                                        <input name="dateFrom" className="form-control" type="date" id="dateFrom" />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="dateTo">To</label>
                                        <input name="dateTo" className="form-control" type="date" id="dateTo" />
                                    </div>
                                </div>
                                <input
                                    onClick={handleLoginRoute}
                                    type="submit"
                                    className="btn btn-warning tg-primary btn-block"
                                />
                                        Start Booking


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
};

export default Place;