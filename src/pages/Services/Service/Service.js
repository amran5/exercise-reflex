import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';
// import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, img, price, description, id } = props.service;
    return (
        <div className="bg">
            <Col>
                <Card className="p-2 rounded-3">
                    <Card.Img style={{ height: "360px" }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Title>
                            {price}
                        </Card.Title>
                        <Link to={`/detail/${id}`}>
                            <button style={{ backgroundColor: "black", color: "white", borderRadius: "5px", padding: "4px 8px" }}>Package</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;