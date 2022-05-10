import React, { useState } from "react";

const PersonCard = props =>
{
    const [newAge, setNewAge] = useState(props.age)
    const clickHandler = e =>
    {
        setNewAge(newAge + 1)
    }
    return(
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {newAge}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={clickHandler}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    );
}

export default PersonCard;
