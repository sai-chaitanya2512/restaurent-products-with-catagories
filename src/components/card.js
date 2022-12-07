import React from 'react'
import Button from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";

const Cardmenu = ({ menuopen }) => {

    console.log(menuopen);
    
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
            {menuopen.map((objects) => {

                const { image, name, description } = objects;

                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{ height: "300px" }} variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                )
            }
            )}
        </div>
    )
}

export default Cardmenu