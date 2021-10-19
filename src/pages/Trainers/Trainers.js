import React from 'react';
import { Container, Row } from 'react-bootstrap';
import trainer1 from '../../images/trainers/full_body_trainer.jpg';
import trainer2 from '../../images/trainers/running_trainer.png';
import trainer3 from '../../images/trainers/workout_trainer.jpg';
import trainer4 from '../../images/trainers/yoga_trainer.jpg';
import Trainer from './Trainer';

const trainers = [
    {
        img: trainer1,
        id: 14,
        name: "Alin josh",
        expertize: "Full Body Trainer",
        description: "Big offer 600 dirhams subscription for 6 months Register now and start a new healthy life. Health Fitness CenterBodybuilding Experts."
    },
    {
        img: trainer2,
        id: 15,
        name: "Ohid Rahman",
        expertize: "Running Trainer",
        description: "This 5k training program starts out with one minute runs separated by some walking breaks and gradually increases the intensity until."
    },
    {
        img: trainer3,
        id: 16,
        name: "Almas Uddin",
        expertize: "Workout Trainer",
        description: "Workout Trainer Top Free Fitness App coached by Certified Personal Trainers. Stay fit, lose weight, get a six pack, build muscle and more."
    },
    {
        img: trainer4,
        id: 16,
        name: "shahab khan",
        expertize: "Yoga Trainer",
        description: "Best yoga classes to live a happier & healthier life. Taking a live online yoga class with amazing teachers has never been easier!"
    }
]


const Trainers = () => {
    return (
        <div className="mb-3">
            <h2 className="my-5">Trainers</h2>
            <div>
                <Container>
                    <Row xs={1} md={2} lg={2} className="g-4">
                        {
                            trainers.map(trainer => <Trainer
                                key={trainer.id}
                                trainer={trainer}
                            >
                            </Trainer>)
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Trainers;