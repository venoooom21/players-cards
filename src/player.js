import React from "react";
import { Card } from "react-bootstrap";
const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Team: {team}<br />
                    Nationality: {nationality}<br />
                    Jersey Number: {jerseyNumber}<br />
                    Age: {age}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

Player.defaultProps = {
    name: "Unknown Player",
    team: "Unknown Team",
    nationality: "Unknown",
    jerseyNumber: 0,
    age: "Unknown",
    image: "https://via.placeholder.com/150"
};

export default Player;