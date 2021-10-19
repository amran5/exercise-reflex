import React from 'react';
import { Card, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, img, price, description } = props.service;
    return (
        <div>
            <Col>
                <Card className="p-2">
                    <Card.Img style={{ height: "400px" }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Title style={{ color: "red" }}>
                            Packages: {price}
                        </Card.Title>
                        <button style={{ backgroundColor: "black", color: "white", borderRadius: "5px" }}>Learn More</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;