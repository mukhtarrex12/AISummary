import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import useTheme from '@mui/material/styles/useTheme';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useTranslation } from 'react-i18next';

import { useState } from 'react';
import TimeDisplay from './TimeDisplay';

interface ResponsiveAppBarProps {
    onButtonClick: (pageIndex: number) => void;
}

const HeadAppBar: React.FC<ResponsiveAppBarProps> = ({ onButtonClick }) => {
    const { i18n, t } = useTranslation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    const [Language, setLanguage] = useState(i18n.language === 'ru' ? 'RUS' : 'ENG');

    console.log("Язык браузера:" + Language);

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        if (newAlignment !== null) {
            setLanguage(newAlignment);
            i18n.changeLanguage(newAlignment === 'RUS' ? 'ru' : 'en');
        }
    };

    return (
        <AppBar position="static" style={{ backgroundColor: 'rgba(25, 25, 26, .95)', minHeight: "84px", display: "flex", justifyContent: "center" }}>
            <Toolbar>
                <Grid container justifyContent="space-between" alignItems="center" sx={{ flexWrap: "wrap" }}>
                    <Grid item xs={isMobile ? 12 : 'auto'} sx={{ textAlign: 'left', marginBottom: isMobile ? 3 : 0 }}>
                        <Typography variant="h6" component="div">
                            Created by Azat Iskakov
                        </Typography>
                    </Grid>
                    <Grid item xs={isMobile ? 12 : 'auto'} sx={{ textAlign: isMobile ? 'center' : 'right', width: "100vh" }}>
                        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-end' : 'center', justifyContent: isMobile ? 'center' : 'flex-end' }}>
                            <Button color="inherit" sx={{ fontWeight: "500", fontSize: "18px" }} onClick={() => onButtonClick(0)}>{t('responsive1')}</Button>
                            <Button color="inherit" sx={{ fontWeight: "500", fontSize: "18px" }} onClick={() => onButtonClick(1)}>{t('responsive2')}</Button>

                            <ToggleButtonGroup
                                color="primary"
                                value={Language}
                                exclusive
                                onChange={handleChange}
                                aria-label="Platform"
                                sx={{ marginRight: isMobile ? 0 : 2, marginLeft: isMobile ? 0 : 6 }}
                            >
                                <ToggleButton sx={{ fontWeight: "bold", color: 'whitesmoke' }} value="RUS">RUS</ToggleButton>
                                <ToggleButton sx={{ fontWeight: "bold", color: 'whitesmoke' }} value="ENG">ENG</ToggleButton>
                            </ToggleButtonGroup>


                            <Typography variant="h6" component="div" sx={{ marginLeft: isMobile ? 0 : '80px', marginTop: isMobile ? 1 : 0 }}>
                                <TimeDisplay />
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>

    );
}

export default HeadAppBar;