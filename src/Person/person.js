import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>Im a Person and i am {props.name} {props.age} old!</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;










/* First Step with random Numbers

const person = () => {
    return <p>Im a Person and i am {Math.floor(Math.random() * 30)} years old!</p>
}; */