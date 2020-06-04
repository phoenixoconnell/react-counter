import React from 'react'

function ButtonPad(props) {


    return (
        <div>
            <div>
                <button className="counterButton" onClick={() => props.updateCount(-10)}>-10</button>
                <button className="counterButton" onClick={() => props.updateCount(-5)}>-5</button>
                <button className="counterButton" onClick={() => props.updateCount(-2)}>-2</button>
                <button className="counterButton" onClick={() => props.updateCount(-1)}>-1</button>
                <button className="counterButton" onClick={() => props.updateCount(1)}>1</button>
                <button className="counterButton" onClick={() => props.updateCount(2)}>2</button>
                <button className="counterButton" onClick={() => props.updateCount(5)}>5</button>
                <button className="counterButton" onClick={() => props.updateCount(10)}>10</button>
            </div>
            <div>
                <button className="resetButton" onClick={props.resetCount}>Reset</button>
            </div>
        </div>
    )
}

export default ButtonPad;
