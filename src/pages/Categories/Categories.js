import React from 'react';
import category1 from '../../images/Category/Aerobic.jpg';
import category2 from '../../images/Category/Strength_training.jpg';
import category3 from '../../images/Category/Squats_workout.jpg';
import category4 from '../../images/Category/Stretching.jpg';
import Category from './Category';
import { Container, Row } from 'react-bootstrap';


const categories = [
    {
        img: category1,
        id: 10,
        name: "Aerobic exercise",
        description: "Aerobic exercise, which speeds up your heart rate and breathing, is important for many body functions. It gives your heart and lungs a workout and increases endurance."
    },
    {
        img: category2,
        id: 11,
        name: "Strength training",
        description: "Strength training, also called weight training or resistance training, is an important part of any fitness routine. It helps make you stronger and also builds muscle endurance."
    },
    {
        img: category3,
        id: 12,
        name: "Squat",
        description: " Slowly bend your hips and knees, lowering your buttocks about eight inches, as if you're sitting back into a chair."
    },
    {
        img: category4,
        id: 13,
        name: "Stretching",
        description: "Stretching helps maintain flexibility. We often overlook that in youth, when our muscles are healthier. But aging leads to a loss of flexibility."
    }
]

const Categories = () => {
    return (
        <div>
            <h2 className="my-5">The 4 most important categories of exercise</h2>
            <div>
                <Container>
                    <Row xs={1} md={2} lg={2} className="g-4">
                        {
                            categories.map(category => <Category
                                key={category.id}
                                category={category}
                            >
                            </Category>)
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Categories;