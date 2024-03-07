import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count => count + 1);
    };

    const incrementAfterDelay = () => {
        setTimeout(() => {
            setCount(count => count + 1);
        }, 2000);
    };

    const incrementTwice = () => {
        setCount(count + 1);
        setCount(count + 1);
    };

    const correctIncrementTwice = () => {
        setCount(prevCount => prevCount + 2);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={incrementAfterDelay}>Increment After Delay</button>
            <button onClick={incrementTwice}>Increment Twice</button>
            <button onClick={correctIncrementTwice}>Correct Implement</button>
        </div>
    );
};

export default Counter;