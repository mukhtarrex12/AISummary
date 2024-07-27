import Paper from "@mui/material/Paper";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import backgroundImg from '../Pictures/BackgroundPaper.png';

const steps = [
    {
        label: 'Февраль 2022 - май 2022',
        Jobtitle: "Android разработчик",
        description: 'Разработка мобильного приложения "Личный кабинет студента" для операционной системы Android на Java'
    },
    {
        label: 'Сентябрь 2022 - Август 2024',
        Jobtitle: "Разработчик C#/Системный администратор",
        description: 'Поддержка внутренних проектов на .NET и .NET Framework, а так же разработка собственных проектов: "WOLWEB" и "WEBCAM". Монтаж и обслуживание компьютерной техники, устранение ошибок и неполадок в Windows, поддержка домена и серверов лицензий, MECM, Kaspersky, ADFS, Autodesk и др.'
    },
    {
        label: '2024 год',
        Jobtitle: "Разработчик C#",
        description: 'Цель: позиция C# разработчика',

    },
];

const stepsTeach = [
    {
        label: 'Сентябрь 2018 - Июнь 2022',
        Jobtitle: "Бакалавриат в ВКТУ",
        description: 'Специальность: Школа информационных технологий и интеллектуальных систем, Вычислительная техника и программное обеспечение'
    },
    {
        label: 'Сентябрь 2022 - июнь 2024',
        Jobtitle: "Магистрант в ВКТУ",
        description: 'Специальность: Школа информационных технологий и интеллектуальных систем, Вычислительная техника и программное обеспечение'
    }
];

const Additionaleducation = [
    {
        label: '2024 год',
        Jobtitle: "Проводившая организация: Google",
        description: 'Google Cloud / ML learning'
    },
    {
        label: '2024 год',
        Jobtitle: "Яндекс Практикум",
        description: 'Основы работы с Git'
    }
];

export default function ExperiencePage() {


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
                }}
            />


            <Grid container spacing={5} sx={{ mt: 6, width: '90%', paddingBottom: "7%" }}>



                <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: "30px", color: "#00A6A0", marginBottom: "8px" }}>
                        Опыт работы
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
                        Образование
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
                        Дополнительное образование
                    </Typography>

                    <Stepper orientation="vertical">
                        {Additionaleducation.map((step, index) => (
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