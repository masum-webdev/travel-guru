import React from 'react';

const HotelsInfo = (props) => {
    const { image, name, price, rating } = props.hotel;
    return (
        <div className="hotel-card d-flex my-4 align-items-lg-center">
            <div className="img mr-4">
                <img src={image} alt="" style={{ maxWidth: "270px" }} />
            </div>
            <div className="info">
                <h4>{name}</h4>
                <p>
                    4 guest, 2 rooms, 2 beds,{" "}
                    2 bathrooms
				</p>
                <p>With Air conditioning Kitchen</p>
                <p>Cancellation flexibility available</p>
                <p className="ratings d-flex">
                    <small>
                        <strong>
                            {rating}
                        </strong>
                    </small>
                    <strong>${price}</strong>
                    <del>$99 discount</del>
                </p>
            </div>
        </div>
    );
};

export default HotelsInfo;