import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useMemo } from 'react';

export default function NotFound(){
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isSm = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
    const isMd = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isLg = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const isXl = useMediaQuery(theme.breakpoints.up('lg'));

    const fontSize = useMemo(() => {
        if (isXs) {
            return '15rem';
        } else if (isSm) {
            return '18rem';
        } else if (isMd) {
            return '20rem';
        } else if (isLg) {
            return '25rem';
        } else if (isXl) {
            return '30rem';
        } else {
            return '25rem'; // значение по умолчанию
        }
    }, [isXs, isSm, isMd, isLg, isXl]);

    return (
        <Box sx={{ backgroundColor: '#00a67e', margin: "0", color: "whitesmoke", minHeight: "100vh"}}>
            <CssBaseline />
            <Container fixed maxWidth="xl" >
                <Box sx={{
                    minHeight: '100vh',
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "nowrap",
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",

                }}>
                    <Typography variant="h1" gutterBottom style={{ fontSize }}>
                        404
                    </Typography>
                    <Typography variant="h5" gutterBottom >
                        Упс, такой страницы не существует
                    </Typography>
                </Box>
            </Container>
        </Box>
    );

}