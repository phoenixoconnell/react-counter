import React, { useState } from 'react';
import Display from './Display';
import ButtonPad from './ButtonPad';


function Counter() {
    const [runningCount, setRunningCount] = useState([0])

    const updateCount = updater => {
        let tempCount = [...runningCount]
        tempCount.unshift(tempCount[0] + updater)
        setRunningCount(tempCount)
    }

    const resetCount = () => {
        setRunningCount([0])
    }

    return (
        <div className="counter">
            <Display runningCount={runningCount} />
            <ButtonPad updateCount={updateCount} resetCount={resetCount} />
        </div>
    )
}

export default Counter;