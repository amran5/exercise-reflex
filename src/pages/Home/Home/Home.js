import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../../Services/Service/Service';
import Banner from '../Banner/Banner';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <Banner></Banner>
            <div className="bg-color">
                <h1 className="text-center py-5">Special Packages</h1>
                <Container>
                    <Row xs={1} md={2} lg={2} className="g-4">
                        {
                            services.slice(0, 4).map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </Row>
                </Container>
                <div className="py-5">
                    <button style={{ backgroundColor: "black", color: "white", borderRadius: "5px" }}>All Services</button>
                </div>
            </div>
        </div>
    );
};

export default Home;