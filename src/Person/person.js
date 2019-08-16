import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Im a Person and i am {props.name} {props.age} old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;










/* First Step with random Numbers

const person = () => {
    return <p>Im a Person and i am {Math.floor(Math.random() * 30)} years old!</p>
}; */