import Paper from "@mui/material/Paper";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import backgroundImg from '../Pictures/BackgroundPaper.jpeg';
import { useTranslation } from "react-i18next";

interface StepperArray {
    label: string;
    Jobtitle: string;
    description: string;
}

export default function ExperiencePage() {

    const { t } = useTranslation();
    const steps : StepperArray[] = t('experience.steps', { returnObjects: true }) as StepperArray[];
    const stepsTeach : StepperArray[] = t('experience.stepsTeach', { returnObjects: true }) as StepperArray[];
    const additionalEducation : StepperArray[] = t('experience.additionalEducation', { returnObjects: true }) as StepperArray[];
    
    return (
        <Paper elevation={3} sx={{
            height: 'auto',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            flexDirection: "column",
            paddingBottom: "32px",
            overflow: 'hidden',
            overflowY: "auto"
        }}>

            <img
                src={backgroundImg}
                alt="background"
                style={{
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '30%',
                    minHeight: "180px"
                }}
            />


            <Grid container spacing={5} sx={{ mt: 6, width: '90%', paddingBottom: "7%" }}>



                <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: "30px", color: "#00A6A0", marginBottom: "8px" }}>
                        {t('experience.myexperience')}
                    </Typography>
                    <Stepper orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={index} active={index !== steps.length - 1}>

                                <StepLabel >{step.label}</StepLabel>
                                <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold' }}>{step.Jobtitle}</Typography>
                                <Typography variant="body1" sx={{ mt: 1 }}>{step.description}</Typography>

                            </Step>
                        ))}
                    </Stepper>
                </Grid>


                <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: "30px", color: "#00A6A0", marginBottom: "8px" }}>
                        {t('experience.education')}
                    </Typography>

                    <Stepper orientation="vertical">
                        {stepsTeach.map((step, index) => (
                            <Step key={index} active={true}>

                                <StepLabel >{step.label}</StepLabel>
                                <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold' }}>{step.Jobtitle}</Typography>
                                <Typography variant="body1" sx={{ mt: 1 }}>{step.description}</Typography>

                            </Step>
                        ))}
                    </Stepper>

                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: "30px", color: "#00A6A0", marginBottom: "8px", paddingTop: "48px" }}>
                        {t('experience.additionaleducation')}
                    </Typography>

                    <Stepper orientation="vertical">
                        {additionalEducation.map((step, index) => (
                            <Step key={index} active={true}>

                                <StepLabel >{step.label}</StepLabel>
                                <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold' }}>{step.Jobtitle}</Typography>
                                <Typography variant="body1" sx={{ mt: 1 }}>{step.description}</Typography>

                            </Step>
                        ))}
                    </Stepper>

                </Grid>

            </Grid>

        </Paper >
    )
}