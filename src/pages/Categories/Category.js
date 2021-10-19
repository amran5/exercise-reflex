import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Category = ({ category }) => {
    const { name, img, description } = category
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
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Category;