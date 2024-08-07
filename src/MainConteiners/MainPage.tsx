import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import backgroundImg from '../Pictures/BackgroundMainPaper.jpeg';
import { Box } from "@mui/material";

import { useTranslation } from 'react-i18next';


export default function MainPage() {
    const { t } = useTranslation();

    return (
        <Paper elevation={3} sx={{
            minHeight: '100%',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            flexDirection: "column",
            overflow: 'hidden'
        }}>

            <Typography variant="h2" sx={{ mt: 6, fontWeight: 'bold', textAlign: "center" }}>
                {t('greeting')}
            </Typography>

            <Grid container spacing={5} sx={{ mt: 2, width: '90%', paddingBottom: "38px" }}>

                <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: "38px", color: "#00A6A0" }}>
                        {t('aboutMe')}
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 4 }}>
                        {t('aboutMeText1')}
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 2 }}>
                        {t('aboutMeText2')}
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 2 }}>
                        {t('aboutMeText3')}
                    </Typography>

                    <Typography variant="h6" sx={{ mt: 6 }}>
                        {t('aboutMeText4')}
                    </Typography>
                </Grid>


                <Grid item xs={12} md={6} sx={{ textAlign: 'right' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: "38px", color: "#00A6A0" }}>
                        {t('details')}
                    </Typography>

                    <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 4 }}>
                        {t('age')}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        {t('ageText')}
                    </Typography>

                    <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 4 }}>
                        {t('city')}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        {t('cityText')}
                    </Typography>

                    <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 4 }}>
                        {t('goal')}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        {t('goalText')}
                    </Typography>

                </Grid>



            </Grid>


            <Box sx={{
                overflow: "hidden",
                width: '100%',
                position: 'relative',
                minHeight: "100px",
                flex: 1
            }}>
                <img
                    src={backgroundImg}
                    alt="background"
                    style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        borderRadius: "7px"
                    }}
                    
                />
            </Box>

        </Paper >
    )
}