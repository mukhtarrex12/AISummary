import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const TimeDisplay: React.FC = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <Typography variant="h6" component="div">
            {time}
        </Typography>
    );
};

export default TimeDisplay;
