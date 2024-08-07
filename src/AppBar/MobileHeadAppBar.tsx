import { useTranslation } from 'react-i18next';
import useTheme from '@mui/material/styles/useTheme';
import { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import TimeDisplay from './TimeDisplay';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import CssBaseline from '@mui/material/CssBaseline';
interface ResponsiveAppBarProps {
    onButtonClick: (pageIndex: number) => void;
}

const drawerWidth = 280;


const MobileHeadAppBar: React.FC<ResponsiveAppBarProps> = ({ onButtonClick }) => {

    const { i18n, t } = useTranslation();
    const theme = useTheme();
    const [Language, setLanguage] = useState(i18n.language === 'ru' ? 'RUS' : 'ENG');
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        if (newAlignment !== null) {
            setLanguage(newAlignment);
            i18n.changeLanguage(newAlignment === 'RUS' ? 'ru' : 'en');
        }
    };


    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const container = window !== undefined ? window.document.body : undefined;
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', display: "flex", flexDirection: "column", flexWrap: "nowrap" }}>
            <CssBaseline />
            <Typography variant="h6" sx={{ my: 2 }}>
                Created by Azat Iskakov
            </Typography>
            <Divider />
            <List>

                <ToggleButtonGroup
                    color="primary"
                    value={Language}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                    sx={{ marginTop: 2, marginBottom: 3 }}
                >
                    <ToggleButton sx={{ fontWeight: "bold", color: 'GrayText' }} value="RUS">RUS</ToggleButton>
                    <ToggleButton sx={{ fontWeight: "bold", color: 'GrayText' }} value="ENG">ENG</ToggleButton>
                </ToggleButtonGroup>
                <Divider />
            </List>
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => onButtonClick(0)}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={t('responsive1')} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => onButtonClick(1)}>
                        <ListItemIcon>
                            <WorkHistoryIcon />
                        </ListItemIcon>
                        <ListItemText primary={t('responsive2')} />
                    </ListItemButton>
                </ListItem>
            </List>

        </Box>
    );




    return (
        <Box sx={{ flexGrow: 1, }}  >
            <AppBar position="static" style={{ backgroundColor: 'rgba(25, 25, 26, .95)' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <TimeDisplay />


                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    )

}


export default MobileHeadAppBar;

