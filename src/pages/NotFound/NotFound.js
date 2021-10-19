import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png';

const NotFound = () => {
    return (
        <div>
            <div>
                <img style={{ width: "100%", height: "600px" }} src={notFound} alt="" />
            </div>
            <Link to="/"><button className="my-5 bg-black text-white rounded-3">back home</button></Link>
        </div>
    );
};

export default NotFound;