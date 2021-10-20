import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Detail.css';
const Detail = () => {
    const { serviceid } = useParams();
    const [services, setServices] = useState([]);

    const singleService = [];

    for (const service of services) {
        if (service.id == serviceid) {
            singleService.push(service);
        }
    }



    useEffect(() => {
        fetch('https://amran5.github.io/service/service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className="bg">
            <Container>
                <Row xs={1} md={2} lg={2}>
                    <Col>
                        <Card className="p-2 rounded-3 body">
                            <Card.Img style={{ height: "360px" }} variant="top" src={singleService[0]?.img} />
                            <Card.Body>
                                <Card.Title>{singleService[0]?.name}</Card.Title>
                                <Card.Text>
                                    {singleService[0]?.description}
                                </Card.Text>
                                <Card.Title>
                                    {singleService[0]?.price}
                                </Card.Title>
                                <Link to="/home">
                                    <button style={{ backgroundColor: "black", color: "white", borderRadius: "5px", padding: "4px 8px" }}>Back To Home</button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Detail;