import React from 'react';

function Scores(props) {
    return (
        <p>Score: {props.current} | Top Score: {props.best}</p>
    );
};


export default Scores;