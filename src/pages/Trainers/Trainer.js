import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Trainer = ({ trainer }) => {
    const { expertize, img, description, name } = trainer;
    return (
        <div>
            <Col>
                <Card className="p-2">
                    <Card.Img style={{ height: "400px" }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{expertize}</Card.Title>
                        <Card.Text>
                            {name}
                        </Card.Text>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Trainer;