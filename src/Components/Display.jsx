import React from 'react';

function Display(props) {
    return (
        <section className="display">
            {props.runningCount.map((v, i) => 
                <h1 key={i}>{v}</h1>
            )}
        </section>
    )


}

export default Display;

