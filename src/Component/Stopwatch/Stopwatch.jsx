import React, { useState, useEffect } from 'react';

const Stopwatch = () => {

    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState({
        seconds: 0,
        minutes: 0,
        hours: 0,
    });

    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setTime({ ...time, seconds: time.seconds + 1 })
                if (time.seconds === 60) {
                    setTime({ ...time, minutes: time.minutes + 1, seconds: 0 })
                }
                if (time.minutes === 60) {
                    setTime({ ...time, hours: time.hours + 1, minutes: 0, seconds: 0 })
                }
            }, 1000)
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, time])

    const startStopwatch = () => {
        setIsRunning({ isRunning: !isRunning })
    };

    const resetStopwatch = () => {
        setIsRunning(false);
        setTime({ ...time, seconds: 0, minutes: 0, hours: 0 });
    };
    return (
        <div>
            <h1>Stopwatch</h1>
            <span>{String(time.hours).padStart(2, '0')}:</span>
            <span>{String(time.minutes).padStart(2, '0')}:</span>
            <span>{String(time.seconds).padStart(2, '0')}</span>
            <div>
                <button onClick={startStopwatch}>
                    {isRunning ? 'Stop' : 'Start'}
                </button>
                <button onClick={resetStopwatch}>Reset</button>
            </div>
        </div>
    )
}

export default Stopwatch