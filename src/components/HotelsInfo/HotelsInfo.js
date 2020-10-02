import React from 'react';
import star from '../../fakeData/resource/Icon/star_1_.png';

const HotelsInfo = (props) => {
    const { image, name, price, rating } = props.hotel;
    return (
        <div className="hotel-card d-flex my-4 align-items-lg-center">
            <div className="img mr-4">
                <img src={image} alt="" style={{ maxWidth: "270px" }} />
            </div>
            <div className="info">
                <h5>{name}</h5>
                <p>
                    4 guest, 2 rooms, 2 beds, 2 bathrooms
				</p>
                <p>With Air conditioning Kitchen</p>
                <p>Cancellation flexibility available</p>
                <p className="ratings d-flex">
                    <img style={{ width: '20px', height: '20px' }} src={star} alt="" />;
                    <small>
                        <strong>
                            {rating}
                        </strong>
                    </small>
                    &nbsp; &nbsp;
                    <strong>${price}</strong>  &nbsp; &nbsp;
                </p>
            </div>
        </div>
    );
};

export default HotelsInfo;