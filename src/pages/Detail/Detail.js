import React from 'react';
import { useParams } from 'react-router';

const Detail = () => {
    const { serviceid } = useParams();
    return (
        <div>
            <h2>this is detail: {serviceid}</h2>
            {/* <img src={img} alt="" /> */}
        </div>
    );
};

export default Detail;