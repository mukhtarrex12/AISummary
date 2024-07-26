import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import useTheme from '@mui/material/styles/useTheme';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useEffect, useState } from 'react';

interface ResponsiveAppBarProps {
    onButtonClick: (pageIndex: number) => void;
}

const HeadAppBar: React.FC<ResponsiveAppBarProps> = ({ onButtonClick }) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);


    return (
        <AppBar position="static" style={{ backgroundColor: 'rgba(25, 25, 26, .95)', minHeight: "84px", display: "flex", justifyContent: "center" }}>
            <Toolbar>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item xs={isMobile ? 12 : 'auto'} sx={{ textAlign: 'left', marginBottom: isMobile ? 3 : 0 }}>
                        <Typography variant="h6" component="div">
                            Created by Azat Iskakov
                        </Typography>
                    </Grid>
                    <Grid item xs={isMobile ? 12 : 'auto'} sx={{ textAlign: isMobile ? 'center' : 'right' }}>
                        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-end' : 'center', justifyContent: isMobile ? 'center' : 'flex-end' }}>
                            <Button color="inherit" onClick={() => onButtonClick(0)}>Главная</Button>
                            <Button color="inherit" onClick={() => onButtonClick(1)}>Проекты</Button>
                            <Typography variant="h6" component="div" sx={{ marginLeft: isMobile ? 0 : '80px', marginTop: isMobile ? 1 : 0 }}>
                                {time}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>

    );
}

export default HeadAppBar;