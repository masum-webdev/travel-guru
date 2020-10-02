import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import EachPlace from '../EachPlace/EachPlace';





const Home = () => {
    const places = fakeData.slice(0, 3);

    return (
        <main className="background d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="home-info mb-md-0 mb-5">
                            <h1>Cox's Bazar</h1>
                            <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                            <br />
                            <Link to={`/place/${places[0].id}`} className="login">Booking ➜</Link>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="home-img">
                            <div className="row">
                                {
                                    places.map(item => <EachPlace places={item} key={item.id}></EachPlace>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>



    );
};

export default Home;